import { GitHubLogoIcon } from '@radix-ui/react-icons'
import { Globe } from 'lucide-react'
import Link from 'next/link'

export function Footer() {
    return (
        <footer className="relative border-t bg-background overflow-hidden">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
            <div className="pointer-events-none absolute -top-24 left-1/2 h-56 w-[520px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

            <div className="container mx-auto px-4 py-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="space-y-3">
                        <h3 className="font-semibold text-lg tracking-tight">DELE.TO</h3>
                        <p className="text-sm text-muted-foreground">
                            Secure credential sharing with zero-knowledge encryption.
                        </p>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <span className="inline-block h-2 w-2 rounded-full bg-primary" />
                            <span>Client-side encryption</span>
                            <span className="text-muted-foreground/40">•</span>
                            <span>One-time links</span>
                        </div>
                    </div>

                    {/* Product */}
                    <div className="space-y-3">
                        <h4 className="font-medium">Product</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>
                                <Link href="/create" className="inline-flex items-center gap-1 hover:text-foreground transition-all hover:translate-x-0.5">
                                    Create Share
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="inline-flex items-center gap-1 hover:text-foreground transition-all hover:translate-x-0.5">
                                    How It Works
                                </Link>
                            </li>
                            <li>
                                {/* <Link href="/security" className="hover:text-foreground transition-colors">
                                    Security
                                </Link> */}
                            </li>
                        </ul>
                    </div>

                    {/* Comparisons */}
                    <div className="space-y-3">
                        <h4 className="font-medium">Alternatives</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>
                                <Link href="/vs/yopass" className="inline-flex items-center gap-1 hover:text-foreground transition-all hover:translate-x-0.5">
                                    vs Yopass
                                </Link>
                            </li>
                            <li>
                                <Link href="/vs/passwordpusher" className="inline-flex items-center gap-1 hover:text-foreground transition-all hover:translate-x-0.5">
                                    vs PasswordPusher
                                </Link>
                            </li>
                            <li>
                                <Link href="/vs/privatebin" className="inline-flex items-center gap-1 hover:text-foreground transition-all hover:translate-x-0.5">
                                    vs PrivateBin
                                </Link>
                            </li>
                            <li>
                                <Link href="/vs/onetimesecret" className="inline-flex items-center gap-1 hover:text-foreground transition-all hover:translate-x-0.5">
                                    vs OneTimeSecret
                                </Link>
                            </li>
                            <li>
                                <Link href="/alternatives" className="inline-flex items-center gap-1 hover:text-foreground transition-all hover:translate-x-0.5">
                                    All Alternatives
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Legal & Social */}
                    <div className="space-y-3">
                        <h4 className="font-medium">Links</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>
                                <a
                                    href="https://dele.to"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 hover:text-foreground transition-all hover:translate-x-0.5"
                                >
                                    <Globe className="h-3 w-3" />
                                    Website
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://github.com/dele-to/dele-to"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 hover:text-foreground transition-all hover:translate-x-0.5"
                                >
                                    <GitHubLogoIcon className="h-3 w-3" />
                                    GitHub Repo
                                </a>
                            </li>
                            {/* <li>
                                <Link href="/privacy" className="hover:text-foreground transition-colors">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms" className="hover:text-foreground transition-colors">
                                    Terms of Service
                                </Link>
                            </li> */}
                        </ul>
                    </div>
                </div>

                <div className="border-t mt-10 pt-6 text-center text-sm text-muted-foreground">
                    <p>© {new Date().getFullYear()} DELE.TO. Built for secure sharing.</p>
                    <div className="mt-3">
                        <a
                            href="https://github.com/dele-to/dele-to"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-2 text-foreground/90 hover:text-foreground transition-colors"
                        >
                            <GitHubLogoIcon className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
                            <span className="font-medium underline-offset-4 group-hover:underline">Open source on GitHub</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}