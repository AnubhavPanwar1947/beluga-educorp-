type BelugaLogoProps = {
  className?: string;
  variant?: "light" | "dark";
};

/** Clean Beluga wordmark — no stray line artifacts from the JPG */
export function BelugaLogo({ className, variant = "light" }: BelugaLogoProps) {
  const text = variant === "dark" ? "#f7fbf9" : "#0f3f36";
  const bar = variant === "dark" ? "#9edcc4" : "#1f7a66";

  return (
    <svg
      className={className}
      viewBox="0 0 280 130"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Beluga Education Corp"
    >
      <rect x="8" y="10" width="10" height="108" rx="5" fill={bar} />
      <text
        x="32"
        y="40"
        fill={text}
        fontFamily="Manrope, 'Segoe UI', system-ui, sans-serif"
        fontSize="34"
        fontWeight="700"
        letterSpacing="-0.02em"
      >
        beluga
      </text>
      <text
        x="32"
        y="76"
        fill={text}
        fontFamily="Manrope, 'Segoe UI', system-ui, sans-serif"
        fontSize="34"
        fontWeight="700"
        letterSpacing="-0.02em"
      >
        education
      </text>
      <text
        x="32"
        y="112"
        fill={text}
        fontFamily="Manrope, 'Segoe UI', system-ui, sans-serif"
        fontSize="34"
        fontWeight="700"
        letterSpacing="-0.02em"
      >
        corp
      </text>
    </svg>
  );
}
