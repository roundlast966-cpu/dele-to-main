import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, X, Flame, ArrowLeft, Shield, Lock, Zap, Code, AlertTriangle } from "lucide-react"
import Link from "next/link"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'DELE.TO - Alternative to Yopass, PasswordPusher, PrivateBin & OneTimeSecret',
  description: 'DELE.TO is the modern alternative to popular secure sharing tools. Zero-knowledge encryption, password protection, and superior UX.',
  openGraph: {
    title: 'DELE.TO - Alternative to Popular Password Sharing Tools',
    description: 'Modern alternative to Yopass, PasswordPusher, PrivateBin, OneTimeSecret and other secure sharing tools with zero-knowledge security.',
    images: ['/SEO.png'],
  },
}

const alternatives = [
  {
    name: "DELE.TO",
    description: "Modern zero-knowledge password sharing with client-side encryption",
    icon: Flame,
    color: "#D2461E",
    features: ["Zero-knowledge", "Client-side encryption", "Multi-recipient sharing", "Password protection", "Modern UI", "Mobile-first"],
    pricing: "Free",
    security: "Excellent",
    usability: "Excellent",
    openSource: true,
    selfHosted: true,
    pros: ["True zero-knowledge architecture", "Multi-recipient sharing", "Modern, intuitive interface", "Optional password protection", "Mobile optimized"],
    cons: ["File sharing coming soon"],
    bestFor: "Teams prioritizing privacy and user experience"
  },
  {
    name: "Yopass",
    description: "Established secure sharing with file support",
    icon: Shield,
    color: "#2563eb",
    features: ["Client-side encryption", "File sharing", "Open source", "Self-hosted", "Established"],
    pricing: "Free",
    security: "Excellent",
    usability: "Good",
    openSource: true,
    selfHosted: true,
    pros: ["File sharing support", "Proven track record", "Active development", "Multiple deployment options"],
    cons: ["Basic UI", "No password protection", "Limited mobile optimization"],
    bestFor: "Users needing file sharing with passwords"
  },
  {
    name: "PasswordPusher",
    description: "Feature-rich sharing with API access",
    icon: Lock,
    color: "#7c3aed",
    features: ["Server-side encryption", "File sharing", "API access", "URL sharing", "Extensive features"],
    pricing: "Free / Paid",
    security: "Good",
    usability: "Good",
    openSource: true,
    selfHosted: true,
    pros: ["Rich feature set", "API access", "File and URL sharing", "Good documentation"],
    cons: ["Server-side encryption", "Not zero-knowledge", "Complex interface"],
    bestFor: "Organizations needing API integration and file sharing"
  },
  {
    name: "PrivateBin",
    description: "Developer-focused pastebin with zero-knowledge encryption",
    icon: Code,
    color: "#6b7280",
    features: ["Zero-knowledge", "Code sharing", "Syntax highlighting", "File sharing", "Discussion"],
    pricing: "Free",
    security: "Excellent",
    usability: "Good",
    openSource: true,
    selfHosted: true,
    pros: ["Zero-knowledge architecture", "Syntax highlighting", "File sharing", "Discussion features"],
    cons: ["Basic UI", "Developer-focused", "Limited mobile optimization"],
    bestFor: "Developers sharing code snippets and files"
  },
  {
    name: "OneTimeSecret",
    description: "Enterprise-focused with API and compliance features",
    icon: AlertTriangle,
    color: "#3b82f6",
    features: ["Server-side encryption", "API access", "Custom domains", "Compliance", "Enterprise"],
    pricing: "Free / Paid",
    security: "Good",
    usability: "Good",
    openSource: true,
    selfHosted: true,
    pros: ["API access", "Custom domains", "Compliance features", "Enterprise support"],
    cons: ["Server-side encryption", "Not zero-knowledge", "Paid features"],
    bestFor: "Enterprises needing API integration and compliance"
  }
]

const comparisonMatrix = [
  { feature: "Multi-Recipient Sharing", deleto: true, yopass: false, passwordpusher: false, privatebin: false, onetimesecret: false },
  { feature: "Zero-Knowledge", deleto: true, yopass: true, passwordpusher: false, privatebin: true, onetimesecret: false },
  { feature: "Client-Side Encryption", deleto: true, yopass: true, passwordpusher: false, privatebin: true, onetimesecret: false },
  { feature: "Password Protection", deleto: true, yopass: false, passwordpusher: false, privatebin: true, onetimesecret: true },
  { feature: "File Sharing", deleto: "coming-soon", yopass: true, passwordpusher: true, privatebin: true, onetimesecret: false },
  { feature: "API Access", deleto: false, yopass: false, passwordpusher: true, privatebin: false, onetimesecret: true },
  { feature: "Self-Hosted", deleto: true, yopass: true, passwordpusher: true, privatebin: true, onetimesecret: true },
  { feature: "Open Source", deleto: true, yopass: true, passwordpusher: true, privatebin: true, onetimesecret: true },
  { feature: "Mobile Optimized", deleto: true, yopass: false, passwordpusher: false, privatebin: false, onetimesecret: false },
  { feature: "Syntax Highlighting", deleto: false, yopass: false, passwordpusher: false, privatebin: true, onetimesecret: false },
]

export default function AlternativesPage() {
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

      <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              DELE.TO - Alternative to Popular Password Sharing Tools
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Compare the top 5 secure password sharing tools. Find the perfect solution
              for your security needs, team size, and technical requirements.
            </p>
          </div>

          {/* Top 3 Comparison Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {alternatives.slice(0, 3).map((alt, index) => {
              const IconComponent = alt.icon
              return (
                <Card key={index} className="relative h-full">
                  <CardHeader className="pb-3">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-full flex-shrink-0" style={{ backgroundColor: alt.color }}>
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <CardTitle className="text-lg">{alt.name}</CardTitle>
                          {alt.name === "DELE.TO" && (
                            <Badge className="text-xs">
                              Recommended
                            </Badge>
                          )}
                        </div>
                        <CardDescription className="text-sm">{alt.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-3">
                      <div className="flex flex-wrap gap-1">
                        {alt.features.slice(0, 3).map((feature, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>

                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-xs font-medium">Security:</span>
                          <span className={`text-xs font-medium ${
                            alt.security === 'Excellent' ? 'text-green-600' :
                            alt.security === 'Good' ? 'text-blue-600' : 'text-yellow-600'
                          }`}>
                            {alt.security}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-xs font-medium">Usability:</span>
                          <span className={`text-xs font-medium ${
                            alt.usability === 'Excellent' ? 'text-green-600' : 'text-blue-600'
                          }`}>
                            {alt.usability}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-xs font-medium">Price:</span>
                          <span className="text-xs text-muted-foreground">{alt.pricing}</span>
                        </div>
                      </div>

                      <div className="text-xs text-muted-foreground border-t pt-2">
                        <strong>Best for:</strong> {alt.bestFor}
                      </div>

                      {alt.name === "DELE.TO" && (
                        <Link href="/create">
                          <Button size="sm" className="w-full">
                            Try Now
                          </Button>
                        </Link>
                      )}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Additional Alternatives */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
              Additional Alternatives
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {alternatives.slice(3).map((alt, index) => {
                const IconComponent = alt.icon
                return (
                  <Card key={index + 3} className="relative h-full">
                    <CardHeader className="pb-3">
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-full flex-shrink-0" style={{ backgroundColor: alt.color }}>
                          <IconComponent className="w-5 h-5 text-white" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <CardTitle className="text-lg">{alt.name}</CardTitle>
                          </div>
                          <CardDescription className="text-sm">{alt.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="space-y-3">
                        <div className="flex flex-wrap gap-1">
                          {alt.features.slice(0, 3).map((feature, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {feature}
                            </Badge>
                          ))}
                        </div>

                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-xs font-medium">Security:</span>
                            <span className={`text-xs font-medium ${
                              alt.security === 'Excellent' ? 'text-green-600' :
                              alt.security === 'Good' ? 'text-blue-600' : 'text-yellow-600'
                            }`}>
                              {alt.security}
                            </span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-xs font-medium">Usability:</span>
                            <span className={`text-xs font-medium ${
                              alt.usability === 'Excellent' ? 'text-green-600' : 'text-blue-600'
                            }`}>
                              {alt.usability}
                            </span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-xs font-medium">Price:</span>
                            <span className="text-xs text-muted-foreground">{alt.pricing}</span>
                          </div>
                        </div>

                        <div className="text-xs text-muted-foreground border-t pt-2">
                          <strong>Best for:</strong> {alt.bestFor}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>

          {/* Detailed Comparison Matrix */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle>Feature Comparison Matrix</CardTitle>
              <CardDescription>
                Compare key features across all major secure sharing platforms
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-2 font-medium">Feature</th>
                      <th className="text-center py-3 px-2 font-medium">DELE.TO</th>
                      <th className="text-center py-3 px-2 font-medium">Yopass</th>
                      <th className="text-center py-3 px-2 font-medium">PasswordPusher</th>
                      <th className="text-center py-3 px-2 font-medium">PrivateBin</th>
                      <th className="text-center py-3 px-2 font-medium">OneTimeSecret</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonMatrix.map((row, index) => (
                      <tr key={index} className="border-b hover:bg-muted/40">
                        <td className="py-2 px-2 font-medium">{row.feature}</td>
                        <td className="py-2 px-2 text-center">
                          {row.deleto === true ? (
                            <Check className="w-4 h-4 text-green-600 mx-auto" />
                          ) : row.deleto === false ? (
                            <X className="w-4 h-4 text-red-500 mx-auto" />
                          ) : row.deleto === "coming-soon" ? (
                            <span className="text-xs text-amber-600 font-medium">Soon</span>
                          ) : (
                            <X className="w-4 h-4 text-red-500 mx-auto" />
                          )}
                        </td>
                        <td className="py-2 px-2 text-center">
                          {row.yopass ? <Check className="w-4 h-4 text-green-600 mx-auto" /> : <X className="w-4 h-4 text-red-500 mx-auto" />}
                        </td>
                        <td className="py-2 px-2 text-center">
                          {row.passwordpusher ? <Check className="w-4 h-4 text-green-600 mx-auto" /> : <X className="w-4 h-4 text-red-500 mx-auto" />}
                        </td>
                        <td className="py-2 px-2 text-center">
                          {row.privatebin === true ? (
                            <Check className="w-4 h-4 text-green-600 mx-auto" />
                          ) : row.privatebin === false ? (
                            <X className="w-4 h-4 text-red-500 mx-auto" />
                          ) : row.privatebin === "coming-soon" ? (
                            <span className="text-xs text-amber-600 font-medium">Soon</span>
                          ) : (
                            <X className="w-4 h-4 text-red-500 mx-auto" />
                          )}
                        </td>
                        <td className="py-2 px-2 text-center">
                          {row.onetimesecret === true ? (
                            <Check className="w-4 h-4 text-green-600 mx-auto" />
                          ) : row.onetimesecret === false ? (
                            <X className="w-4 h-4 text-red-500 mx-auto" />
                          ) : row.onetimesecret === "coming-soon" ? (
                            <span className="text-xs text-amber-600 font-medium">Soon</span>
                          ) : (
                            <X className="w-4 h-4 text-red-500 mx-auto" />
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Final Recommendation */}
          <Card>
            <CardHeader>
              <CardTitle>Why Choose DELE.TO?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="text-center">
                  <div className="p-3 rounded-full mx-auto mb-3 w-fit bg-primary">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold mb-2">Maximum Security</h4>
                  <p className="text-sm text-muted-foreground">
                    True zero-knowledge architecture with client-side AES-256-GCM encryption
                  </p>
                </div>
                <div className="text-center">
                  <div className="p-3 rounded-full mx-auto mb-3 w-fit bg-primary">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold mb-2">Modern Experience</h4>
                  <p className="text-sm text-muted-foreground">
                    Built with Next.js 14, featuring a polished, mobile-first interface
                  </p>
                </div>
                <div className="text-center">
                  <div className="p-3 rounded-full mx-auto mb-3 w-fit bg-primary">
                    <Lock className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold mb-2">Extra Protection</h4>
                  <p className="text-sm text-muted-foreground">
                    Optional password protection and built-in security guidance
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center mt-12">
            <Link href="/create">
              <Button size="lg">Try DELE.TO - The Secure Choice</Button>
            </Link>
          </div>
        </div>
      </div>
  )
}