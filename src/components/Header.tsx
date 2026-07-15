"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about/", label: "About" },
  { href: "/programs/", label: "Our Courses" },
  { href: "/contact/", label: "Contact" },
  { href: "/blog/", label: "Blog" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href.replace(/\/$/, ""));
}

export function Header() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="wrap nav">
        <Link className="brand" href="/">
          <Image
            src="/images/logo.jpg"
            alt="Beluga Education Corp logo"
            width={96}
            height={96}
            className="brand-logo"
            priority
          />
          <span className="brand-text">
            <span className="brand-name">Beluga Education Corp</span>
            <span className="brand-tag">Maritime training</span>
          </span>
        </Link>
        <nav aria-label="Primary">
          <ul className="nav-links">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive(pathname, link.href) ? "page" : undefined}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
