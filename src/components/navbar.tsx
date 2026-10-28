"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { MenuIcon, UserIcon, type LucideIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

type NavLink = { label: string; href: string; icon?: LucideIcon }

const leftLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Destinations", href: "/destinations" },
  { label: "Add Destination", href: "/add-destination" },
  { label: "Admin", href: "/admin" },
]

const rightLinks: NavLink[] = [
  { label: "Profile", href: "/profile", icon: UserIcon },
  { label: "Login", href: "/login" },
  { label: "Sign Up", href: "/sign-up" },
]

const mobileLinks: NavLink[] = [
  ...leftLinks,
  ...rightLinks.map(({ label, href }) => ({ label, href })),
]

/** "/" only matches itself; other paths also match their nested routes. */
function isActivePath(pathname: string, href: string) {
  return href === "/"
    ? pathname === "/"
    : pathname === href || pathname.startsWith(`${href}/`)
}

function linkClassName(active: boolean) {
  return cn(
    "relative text-[16px] transition-colors",
    active
      ? "text-brand after:absolute after:inset-x-0 after:-bottom-[3px] after:h-px after:bg-brand"
      : "text-[#111111] hover:text-brand",
  )
}

function rightLinkClassName(active: boolean) {
  return cn(
    "flex items-center gap-2 text-[16px] transition-colors hover:text-brand",
    active ? "text-brand" : "text-[#111111]",
  )
}


export function Navbar() {
  const pathname = usePathname()
  const profileActive = isActivePath(pathname, "/profile")

  return (
    <header>
      <nav
        aria-label="Main"
        className="flex h-14 items-center justify-between bg-white px-[26px]"
      >
        {/* Left: primary links (desktop) */}
        <ul className="hidden items-center gap-8 md:flex">
          {leftLinks.map((link) => {
            const active = isActivePath(pathname, link.href)
            return (
              <li key={link.label}>
                <Link
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={linkClassName(active)}
                >
                  {link.label}
                </Link>
              </li>
            )
          })}
        </ul>

        {/* Left: mobile menu trigger */}
        <Sheet>
          <SheetTrigger
            render={
              <Button
                variant="ghost"
                size="icon-lg"
                aria-label="Open menu"
                className="md:hidden"
              />
            }
          >
            <MenuIcon />
          </SheetTrigger>
          <SheetContent side="left" className="w-72 font-system">
            <SheetHeader>
              <SheetTitle className="sr-only">Navigation</SheetTitle>
              <SheetDescription className="sr-only">
                Browse Wanderlust
              </SheetDescription>
            </SheetHeader>
            <ul className="flex flex-col gap-5 px-6 pt-4 text-[16px]">
              {mobileLinks.map((link) => {
                const active = isActivePath(pathname, link.href)
                return (
                  <li key={link.label}>
                    <SheetClose
                      nativeButton={false}
                      render={
                        <Link
                          href={link.href}
                          aria-current={active ? "page" : undefined}
                          className={linkClassName(active)}
                        />
                      }
                    >
                      {link.label}
                    </SheetClose>
                  </li>
                )
              })}
            </ul>
          </SheetContent>
        </Sheet>

        {/* Center: logo */}
        <Link href="/" aria-label="Wanderlust home" className="shrink-0">
          <Image
            src="/images/Wanderlast.png"
            alt="Wanderlust"
            width={162}
            height={24}
            priority
          />
        </Link>

        {/* Right: account links (desktop) */}
        <ul className="hidden items-center gap-8 md:flex">
          {rightLinks.map(({ label, href, icon: Icon }) => {
            const active = isActivePath(pathname, href)
            return (
              <li key={label}>
                <Link
                  href={href}
                  aria-current={active ? "page" : undefined}
                  className={rightLinkClassName(active)}
                >
                  {Icon ? <Icon aria-hidden="true" className="size-4" /> : null}
                  {label}
                </Link>
              </li>
            )
          })}
        </ul>

        {/* Right: mobile profile link */}
        <Link
          href="/profile"
          aria-label="Profile"
          aria-current={profileActive ? "page" : undefined}
          className={cn(
            "md:hidden",
            profileActive ? "text-brand" : "text-[#111111]",
          )}
        >
          <UserIcon className="size-6" aria-hidden="true" />
        </Link>
      </nav>
    </header>
  )
}

export default Navbar
