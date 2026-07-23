<?php
/**
 * Beluga Education Corp — DreamHost contact form handler
 * - No paid third-party APIs
 * - Uses DreamHost PHP mail()
 * - Notifies Beluga + auto-replies to the visitor
 *
 * REQUIRED on DreamHost:
 * 1) Create mailbox: info@belugaeducorp.com (Mail → Manage Email)
 * 2) Upload this file to the Beluga web root with your static site
 */

declare(strict_types=1);

header('X-Content-Type-Options: nosniff');
header('Referrer-Policy: strict-origin-when-cross-origin');

const ADMIN_EMAIL = 'info@belugaeducorp.com';
const FROM_EMAIL = 'info@belugaeducorp.com';
const FROM_NAME = 'Beluga Education Corp';
const SITE_NAME = 'Beluga Education Corp';
const MAX_PER_HOUR = 8;

function wants_json(): bool
{
    $accept = $_SERVER['HTTP_ACCEPT'] ?? '';
    $xhr = $_SERVER['HTTP_X_REQUESTED_WITH'] ?? '';
    return stripos($accept, 'application/json') !== false
        || strcasecmp($xhr, 'XMLHttpRequest') === 0;
}

function respond(bool $ok, string $message, int $status = 200): void
{
    http_response_code($status);
    if (wants_json()) {
        header('Content-Type: application/json; charset=utf-8');
        echo json_encode(['ok' => $ok, 'error' => $ok ? null : $message, 'message' => $message]);
        exit;
    }

    $target = $ok ? '/contact/?sent=1' : '/contact/?error=1';
    header('Location: ' . $target, true, 303);
    exit;
}

function clean_header(string $value): string
{
    return trim(str_replace(["\r", "\n", "%0a", "%0d"], '', $value));
}

function client_ip(): string
{
    $ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
    return preg_replace('/[^a-zA-Z0-9\.:_-]/', '', $ip) ?: 'unknown';
}

function rate_limited(string $ip): bool
{
    $dir = sys_get_temp_dir() . DIRECTORY_SEPARATOR . 'beluga-contact-rate';
    if (!is_dir($dir)) {
        @mkdir($dir, 0700, true);
    }
    $file = $dir . DIRECTORY_SEPARATOR . hash('sha256', $ip) . '.json';
    $now = time();
    $window = 3600;
    $hits = [];

    if (is_file($file)) {
        $raw = @file_get_contents($file);
        $decoded = json_decode((string) $raw, true);
        if (is_array($decoded)) {
            $hits = array_values(array_filter($decoded, static fn($t) => is_int($t) && ($now - $t) < $window));
        }
    }

    if (count($hits) >= MAX_PER_HOUR) {
        return true;
    }

    $hits[] = $now;
    @file_put_contents($file, json_encode($hits), LOCK_EX);
    return false;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    respond(false, 'Invalid request method.', 405);
}

// Honeypot — bots fill this; humans never see it
$honeypot = trim((string) ($_POST['company_website'] ?? ''));
if ($honeypot !== '') {
    // Fake success so bots learn nothing
    respond(true, 'Thank you — your message has been sent.');
}

// Minimum fill time (~3s) — blocks instant bot posts
$started = (int) ($_POST['form_started_at'] ?? 0);
if ($started > 0 && (time() * 1000 - $started) < 3000) {
    respond(false, 'Please take a moment and try again.', 429);
}

$ip = client_ip();
if (rate_limited($ip)) {
    respond(false, 'Too many messages. Please try again later.', 429);
}

$name = trim((string) ($_POST['name'] ?? ''));
$email = trim((string) ($_POST['email'] ?? ''));
$subject = trim((string) ($_POST['subject'] ?? ''));
$message = trim((string) ($_POST['message'] ?? ''));

if ($name === '' || $email === '' || $subject === '' || $message === '') {
    respond(false, 'Please fill in all fields.', 400);
}

if (strlen($name) > 120 || strlen($email) > 180 || strlen($subject) > 180 || strlen($message) > 4000) {
    respond(false, 'One or more fields are too long.', 400);
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    respond(false, 'Please enter a valid email address.', 400);
}

$name_h = clean_header($name);
$email_h = clean_header($email);
$subject_h = clean_header($subject);

if ($name_h === '' || $email_h === '' || $subject_h === '') {
    respond(false, 'Invalid input.', 400);
}

$safe_message = str_replace(["\r\n", "\r"], "\n", $message);
$safe_message = trim(strip_tags($safe_message));

$admin_subject = 'Beluga website enquiry: ' . $subject_h;
$admin_body =
    "New message from the Beluga Education Corp website\n\n" .
    "Name: {$name_h}\n" .
    "Email: {$email_h}\n" .
    "Subject: {$subject_h}\n" .
    "IP: {$ip}\n" .
    "Time: " . gmdate('Y-m-d H:i:s') . " UTC\n\n" .
    "Message:\n{$safe_message}\n";

$admin_headers = [
    'From: ' . FROM_NAME . ' <' . FROM_EMAIL . '>',
    'Reply-To: ' . $name_h . ' <' . $email_h . '>',
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'X-Mailer: BelugaContactForm',
];

$admin_ok = @mail(
    ADMIN_EMAIL,
    '=?UTF-8?B?' . base64_encode($admin_subject) . '?=',
    $admin_body,
    implode("\r\n", $admin_headers)
);

$visitor_subject = 'We received your message — ' . SITE_NAME;
$visitor_body =
    "Dear {$name_h},\n\n" .
    "Thank you for contacting " . SITE_NAME . ".\n\n" .
    "We have received your message and will get back to you as soon as possible.\n\n" .
    "----- Your message -----\n" .
    "Subject: {$subject_h}\n\n" .
    "{$safe_message}\n" .
    "------------------------\n\n" .
    "Warm regards,\n" .
    SITE_NAME . "\n" .
    "info@belugaeducorp.com\n" .
    "https://www.belugaeducorp.com\n";

$visitor_headers = [
    'From: ' . FROM_NAME . ' <' . FROM_EMAIL . '>',
    'Reply-To: ' . FROM_EMAIL,
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'X-Mailer: BelugaContactForm',
];

$visitor_ok = @mail(
    $email_h,
    '=?UTF-8?B?' . base64_encode($visitor_subject) . '?=',
    $visitor_body,
    implode("\r\n", $visitor_headers)
);

if (!$admin_ok) {
    respond(
        false,
        'We could not send your message right now. Please email info@belugaeducorp.com directly.',
        500
    );
}

// Auto-reply is best-effort; admin mail already succeeded
respond(
    true,
    $visitor_ok
        ? 'Thank you — your message has been sent. A confirmation email is on its way.'
        : 'Thank you — your message has been sent. Our team will get back to you soon.'
);
