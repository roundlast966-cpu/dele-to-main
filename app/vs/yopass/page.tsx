import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, X, Flame, ArrowLeft } from "lucide-react"
import Link from "next/link"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'DELE.TO - Alternative to Yopass for Secure Password Sharing',
  description: 'DELE.TO is a modern alternative to Yopass with zero-knowledge encryption, password protection, and mobile-first design. Compare features and security.',
  openGraph: {
    title: 'DELE.TO - Alternative to Yopass for Secure Password Sharing',
    description: 'Modern alternative to Yopass with zero-knowledge encryption, password protection, and superior user experience.',
    images: ['/SEO.png'],
  },
}

const comparisonData = [
  {
    feature: "Client-Side Encryption",
    deleto: true,
    yopass: true,
    details: "Both use AES-256 encryption in the browser"
  },
  {
    feature: "Zero-Knowledge Architecture",
    deleto: true,
    yopass: true,
    details: "Neither service can access your data"
  },
  {
    feature: "Custom Expiration Times",
    deleto: true,
    yopass: true,
    details: "Both offer flexible expiration settings"
  },
  {
    feature: "View Count Limits",
    deleto: true,
    yopass: true,
    details: "Burn-after-reading functionality"
  },
  {
    feature: "Password Protection",
    deleto: true,
    yopass: false,
    details: "DELE.TO adds optional password layer"
  },
  {
    feature: "Modern UI/UX",
    deleto: true,
    yopass: false,
    details: "DELE.TO has more polished interface"
  },
  {
    feature: "Mobile Responsive",
    deleto: true,
    yopass: "partial",
    details: "DELE.TO fully optimized for mobile"
  },
  {
    feature: "File Sharing",
    deleto: "coming-soon",
    yopass: true,
    details: "Yopass supports file uploads, DELE.TO coming soon"
  },
  {
    feature: "Self-Hosted Option",
    deleto: true,
    yopass: true,
    details: "Yopass available now, DELE.TO coming soon"
  },
  {
    feature: "Open Source",
    deleto: true,
    yopass: true,
    details: "Both are open source projects"
  },
  {
    feature: "Multi-Recipient Sharing",
    deleto: true,
    yopass: false,
    details: "DELE.TO supports sharing to multiple recipients"
  }
]

export default function YopassComparison() {
  return (
    <div>
      <div className="mb-6">
        <Link href="/">
          <Button variant="ghost">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>
      </div>

      <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              DELE.TO - Alternative to Yopass
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comparing two popular secure password sharing solutions. Both offer client-side encryption, 
              but which one is right for your needs?
            </p>
          </div>

          {/* Quick Overview */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-full bg-primary">
                    <Flame className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle>DELE.TO</CardTitle>
                    <CardDescription>Modern, user-focused design</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Badge>Modern UI</Badge>
                    <Badge variant="outline">Password Protection</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Built with Next.js 14, featuring a polished interface, optional password protection, 
                    and mobile-first design. Perfect for teams and individuals who value user experience.
                  </p>
                  <div className="pt-2">
                    <Link href="/create">
                      <Button>
                        Try DELE.TO
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-blue-100 rounded-full">
                    <div className="w-6 h-6 bg-blue-600 rounded"></div>
                  </div>
                  <div>
                    <CardTitle>Yopass</CardTitle>
                    <CardDescription>Established, feature-rich</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-blue-600">File Sharing</Badge>
                    <Badge variant="outline">Established</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    A mature solution with file sharing capabilities and proven track record. 
                    Great for users who need to share files along with passwords.
                  </p>
                  <div className="pt-2">
                    <Button variant="outline" asChild>
                      <a href="https://yopass.se" target="_blank" rel="noopener noreferrer">
                        Visit Yopass
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Detailed Comparison Table */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle>Feature Comparison</CardTitle>
              <CardDescription>
                Side-by-side comparison of key features and capabilities
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-medium">Feature</th>
                      <th className="text-center py-3 px-4 font-medium">DELE.TO</th>
                      <th className="text-center py-3 px-4 font-medium">Yopass</th>
                      <th className="text-left py-3 px-4 font-medium">Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((item, index) => (
                      <tr key={index} className="border-b hover:bg-muted/40">
                        <td className="py-3 px-4 font-medium">{item.feature}</td>
                        <td className="py-3 px-4 text-center">
                          {item.deleto === true ? (
                            <Check className="w-5 h-5 text-green-600 mx-auto" />
                          ) : item.deleto === false ? (
                            <X className="w-5 h-5 text-red-500 mx-auto" />
                          ) : item.deleto === "coming-soon" ? (
                            <span className="text-sm text-amber-600 font-medium">Soon</span>
                          ) : (
                            <span className="text-sm text-yellow-600">{item.deleto}</span>
                          )}
                        </td>
                        <td className="py-3 px-4 text-center">
                          {item.yopass === true ? (
                            <Check className="w-5 h-5 text-green-600 mx-auto" />
                          ) : item.yopass === false ? (
                            <X className="w-5 h-5 text-red-500 mx-auto" />
                          ) : (
                            <span className="text-sm text-yellow-600">{item.yopass}</span>
                          )}
                        </td>
                        <td className="py-3 px-4 text-sm text-muted-foreground">{item.details}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Use Cases */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle style={{ color: '#D2461E' }}>Choose DELE.TO if you:</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Want a modern, polished user interface</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Need optional password protection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Share text-based credentials (file sharing coming soon)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Value mobile-first design</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Want built-in security tips and guidance</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-blue-600">Choose Yopass if you:</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Need to share files along with passwords</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Prefer established, battle-tested solutions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Don't need additional password protection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Want a minimalist approach</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Have existing workflows with Yopass</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Security Comparison */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle>Security Analysis</CardTitle>
              <CardDescription>
                Both solutions offer strong security, but with different approaches
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3" style={{ color: '#D2461E' }}>DELE.TO Security</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• AES-256-GCM client-side encryption</li>
                    <li>• Keys in URL fragments (never sent to server)</li>
                    <li>• Optional password protection layer</li>
                    <li>• Built-in security tips and best practices</li>
                    <li>• Redis TTL for automatic cleanup</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-blue-600">Yopass Security</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• AES-256 client-side encryption</li>
                    <li>• Zero-knowledge architecture</li>
                    <li>• Proven track record and audits</li>
                    <li>• File encryption capabilities</li>
                    <li>• Multiple backend storage options</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Final Recommendation */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle>Our Recommendation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Both DELE.TO and Yopass are excellent choices for secure password sharing. Your choice depends on your specific needs:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
                    <h4 className="font-semibold mb-2 text-primary">For Modern Teams</h4>
                    <p className="text-sm text-muted-foreground">
                      Choose DELE.TO for its polished interface, mobile optimization, and additional security features like password protection.
                    </p>
                  </div>
                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <h4 className="font-semibold mb-2 text-blue-900">For File Sharing</h4>
                    <p className="text-sm text-blue-800">
                      Choose Yopass if you need to share files along with passwords or prefer a more established solution.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center mt-12">
            <Link href="/create">
              <Button size="lg">Try DELE.TO Now</Button>
            </Link>
          </div>
        </div>
    </div>
  )
}