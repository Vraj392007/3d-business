"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-inner">

        {/* LOGO */}
        <Link href="/" className="logo">
          3DModelsHub
        </Link>

        {/* DESKTOP NAV */}
        <nav className="nav-desktop">
          <Link href="/">Home</Link>
          <Link href="/models">Models</Link>
          <Link href="/categories">Categories</Link>
          <Link href="/upload">Upload</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        {/* CTA BUTTON */}
        <div className="cta">
          <Link href="/upload" className="btn">
            Upload 
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="menu-btn"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE NAV */}
      {open && (
        <nav className="nav-mobile">
          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/models" onClick={() => setOpen(false)}>Models</Link>
          <Link href="/categories" onClick={() => setOpen(false)}>Categories</Link>
          <Link href="/upload" onClick={() => setOpen(false)}>Upload</Link>
          <Link href="/pricing" onClick={() => setOpen(false)}>Pricing</Link>
          <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
        </nav>
      )}
    </header>
  );
}