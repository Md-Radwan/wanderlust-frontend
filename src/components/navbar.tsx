"use client";

import Link from "next/link";
import { MenuIcon, UserIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/destinations", label: "Destinations" },
  { href: "/my-bookings", label: "My Bookings" },
  { href: "/admin", label: "Admin" },
];

const authLinks = [
  { href: "/profile", label: "Profile", withIcon: true },
  { href: "/login", label: "Login", withIcon: false },
  { href: "/signup", label: "Sign Up", withIcon: false },
];

const linkClassName =
  "text-[0.95rem] font-medium text-foreground transition-colors hover:text-brand";

function linkClassNameFor(href: string) {
  return href === "/"
    ? `${linkClassName} border-b-2 border-brand pb-0.5 text-brand`
    : linkClassName;
}

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full bg-white shadow-sm">
      <div className="relative mx-auto flex h-16 items-center justify-between px-4 md:px-8">
        {/* Left navigation (desktop) */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={linkClassNameFor(link.href)}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile menu trigger */}
        <Sheet>
          <SheetTrigger
            render={
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                aria-label="Open menu"
              />
            }
          >
            <MenuIcon className="size-5" />
          </SheetTrigger>

          <SheetContent>
            <SheetHeader>
              <SheetTitle className="text-2xl font-bold text-brand">
                Wanderlast
              </SheetTitle>
            </SheetHeader>

            <nav className="flex flex-col gap-1 px-4">
              {navLinks.map((link, index) => (
                <SheetClose
                  key={index}
                  render={<Link href={link.href} />}
                  className={linkClassNameFor(link.href)}
                >
                  {link.label}
                </SheetClose>
              ))}
            </nav>

            <div className="mx-4 border-t border-border" />

            <nav className="flex flex-col gap-1 px-4 pb-2">
              {authLinks.map((link) => (
                <SheetClose
                  key={link.href}
                  render={<Link href={link.href} />}
                  className={`${linkClassName} flex items-center gap-2 py-1.5`}
                >
                  {link.withIcon && <UserIcon className="size-4" />}
                  {link.label}
                </SheetClose>
              ))}
            </nav>
          </SheetContent>
        </Sheet>

        {/* Centered logo */}
        <Link
          href="/"
          className="absolute left-1/2 -translate-x-1/2 text-2xl font-bold tracking-wide text-brand md:text-3xl"
        >
          Wanderlast
        </Link>

        {/* Right navigation (desktop) */}
        <nav className="hidden items-center gap-8 md:flex">
          {authLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${linkClassName} flex items-center gap-1.5`}
            >
              {link.withIcon && <UserIcon className="size-4" />}
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
