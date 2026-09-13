"use client";
import Link from "next/link";
import { useState } from "react";
import { profile } from "@/data/profile";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav style={{
      position: "fixed",
      top: 0,
      width: "100%",
      backgroundColor: "rgba(10,10,15,0.85)",
      backdropFilter: "blur(12px)",
      borderBottom: "1px solid var(--border)",
      zIndex: 50,
    }}>
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "0 24px",
        height: "64px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
        <Link href="/" style={{ fontSize: "1.25rem", fontWeight: 800, color: "var(--text)", textDecoration: "none" }}>
          {profile.name.split(" ")[0]}<span style={{ color: "var(--primary)" }}>.</span>
        </Link>

        {/* Desktop nav */}
        <div style={{ display: "flex", gap: "32px" }} className="hidden md:flex">
          {navLinks.map(l => (
            <a key={l.href} href={l.href} style={{
              color: "var(--muted)",
              textDecoration: "none",
              fontSize: "0.9rem",
              fontWeight: 500,
              transition: "color 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.color = "var(--primary)")}
            onMouseLeave={e => (e.currentTarget.style.color = "var(--muted)")}
            >{l.label}</a>
          ))}
        </div>

        <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer" style={{
          padding: "8px 20px",
          backgroundColor: "rgba(108,99,255,0.1)",
          color: "var(--primary)",
          border: "1px solid rgba(108,99,255,0.35)",
          borderRadius: "8px",
          fontSize: "0.875rem",
          fontWeight: 600,
          textDecoration: "none",
          transition: "all 0.2s",
        }}
        onMouseEnter={e => { e.currentTarget.style.backgroundColor = "var(--primary)"; e.currentTarget.style.color = "#fff"; }}
        onMouseLeave={e => { e.currentTarget.style.backgroundColor = "rgba(108,99,255,0.1)"; e.currentTarget.style.color = "var(--primary)"; }}
        >Resume</a>
      </div>
    </nav>
  );
}
