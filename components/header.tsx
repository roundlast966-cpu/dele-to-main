"use client"

import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="container mx-auto flex h-16 items-center justify-between gap-4 px-4">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-primary" />
            <span>DELE.TO</span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            <Button asChild variant="ghost" size="sm">
              <Link href="/about">How it works</Link>
            </Button>
            <Button asChild variant="ghost" size="sm">
              <Link href="/alternatives">Alternatives</Link>
            </Button>
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <Button asChild size="sm">
            <Link href="/create">Create</Link>
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
