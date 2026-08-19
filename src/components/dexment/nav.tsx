"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import styles from "@/app/page.module.css";

const navLinks = [
  { href: "/#solutions", label: "Solutions" },
  { href: "/#psp", label: "PSP Network" },
  { href: "/#workflow", label: "How It Works" },
];

export function SiteNav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav>
        <div className={cn(styles.wrap, styles.navin)}>
          <a className={styles.brand} href="#">
            <img
              src="/images/dexment-mark-nav.png"
              alt=""
              width={180}
              height={179}
              className={styles.navMark}
            />
            <span className={cn(styles.logo, styles.wordmark)}>
              DEX<span>MENT</span>
            </span>
          </a>
          <div className={styles.links}>
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
          <div className={styles.navRight}>
            <a className={cn(styles.btn, styles.yellow)} href="/#tools">
              Core Tools
            </a>
            <button
              type="button"
              className={styles.burger}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobileNav"
              onClick={() => setMobileOpen((open) => !open)}
            >
              <span />
            </button>
          </div>
        </div>
      </nav>
      <div className={cn(styles.mobileNav, mobileOpen && styles.open)} id="mobileNav">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setMobileOpen(false)}>
            {link.label}
          </a>
        ))}
        <a href="/#tools" onClick={() => setMobileOpen(false)}>
          Core Tools
        </a>
      </div>
    </>
  );
}
