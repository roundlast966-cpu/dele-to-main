import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Lock, Eye, ArrowRight, Sparkles, Shield, Clock, Database, Zap, Github } from 'lucide-react'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="overflow-x-hidden">
      <section className="relative">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />
          <div className="absolute left-1/2 top-[-240px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
        </div>

        <div className="text-center max-w-4xl mx-auto py-10 sm:py-14 animate-in fade-in-0 slide-in-from-bottom-2 duration-700">
          <Link href="https://github.com/ardd/dele-to-deployed" target="_blank" rel="noopener noreferrer">
            <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary ring-1 ring-inset ring-primary/20 mb-6 hover:bg-primary/15 transition-colors hover:scale-[1.02]">
              <Sparkles className="h-3 w-3 mr-1" /> Open source & zero-knowledge
            </span>
          </Link>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
            Share secrets
            <br />
            that <span className="text-primary">disappear</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto hidden md:block">
            Stop sharing passwords in Slack. DELE.TO encrypts everything in your browser.
            <br />Your secrets self-destruct after reading. No traces, no logs, no worries.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 mb-12">
            <Button asChild size="lg" className="px-6 transition-transform hover:-translate-y-0.5">
              <Link href="/create">
                Create a secret <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="px-6 transition-transform hover:-translate-y-0.5">
              <Link href="/about">
                Learn more
              </Link>
            </Button>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-8 text-muted-foreground text-sm">
            <span className="flex items-center">
              <Lock className="h-4 w-4 mr-2" /> AES-256 encrypted
            </span>
            <span className="flex items-center">
              <Eye className="h-4 w-4 mr-2" /> Zero-knowledge
            </span>
          </div>
        </div>

        <div className="w-full max-w-6xl mx-auto mt-14 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <Card className="group relative overflow-hidden bg-card border-border transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10">
            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
            <CardHeader>
              <Shield className="w-8 h-8 mb-2 text-primary" />
              <CardTitle className="text-lg">Military-grade encryption</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-muted-foreground">
                Your data is encrypted with AES-256-GCM right in your browser. We never see the plaintext.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="group relative overflow-hidden bg-card border-border transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10">
            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
            <CardHeader>
              <Clock className="w-8 h-8 mb-2 text-primary" />
              <CardTitle className="text-lg">Self-destructing messages</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-muted-foreground">
                Set custom expiration times or view limits. Once read, it's gone forever.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="group relative overflow-hidden bg-card border-border transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10">
            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
            <CardHeader>
              <Eye className="w-8 h-8 mb-2 text-primary" />
              <CardTitle className="text-lg">Zero-knowledge architecture</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-muted-foreground">
                Encryption keys live in the URL fragment—they never touch our servers.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="group relative overflow-hidden bg-card border-border transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10">
            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
            <CardHeader>
              <Database className="w-8 h-8 mb-2 text-primary" />
              <CardTitle className="text-lg">No data retention</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-muted-foreground">
                We don't log IPs, don't track users, and can't read your secrets even if we tried.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="group relative overflow-hidden bg-card border-border transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10">
            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
            <CardHeader>
              <Zap className="w-8 h-8 mb-2 text-primary" />
              <CardTitle className="text-lg">Instant sharing</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-muted-foreground">
                No signup required for basic use. Create and share in seconds.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="group relative overflow-hidden bg-card border-border transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10">
            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
            <CardHeader>
              <Github className="w-8 h-8 mb-2 text-primary" />
              <CardTitle className="text-lg">Open source</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-muted-foreground">
                Fully auditable code on GitHub. Trust is earned through transparency.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        <div className="mt-10 rounded-2xl border bg-card/60 p-6 sm:p-8 text-center backdrop-blur animate-in fade-in-0 slide-in-from-bottom-3 duration-700">
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">Stop leaking secrets in chat</h2>
          <p className="mt-2 text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            Create a one-time link that expires automatically. The server stores only encrypted ciphertext.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg" className="transition-transform hover:-translate-y-0.5">
              <Link href="/create">Create a secret</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="transition-transform hover:-translate-y-0.5">
              <Link href="/alternatives">Compare alternatives</Link>
            </Button>
          </div>
        </div>
        </div>
      </section>
    </div>
  )
}
