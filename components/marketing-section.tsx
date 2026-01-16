"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, PenTool, Star, TrendingUp, Lightbulb, Rocket, Eye, Award } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { AnimatedCounter } from "@/components/animated-counter"

const marketingServices = [
  { icon: Users, text: "إدارة الحسابات باحتراف" },
  { icon: PenTool, text: "صناعة المحتوى الإبداعي" },
  { icon: Star, text: "التعاون مع البلوقرز والمشاهير" },
  { icon: TrendingUp, text: "تمويل الحملات الإعلانية" },
  { icon: Lightbulb, text: "تجهيز الأفكار وتحويلها لمشاريع ناجحة" },
  { icon: Rocket, text: "تدشين المنتجات والخدمات" },
  { icon: Eye, text: "رفع المشاهدات والتفاعل" },
  { icon: Award, text: "صناعة شهرة حقيقية للعلامة التجارية" },
]

export function MarketingSection() {
  return (
    <section id="marketing" className="py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <ScrollReveal direction="right">
              <Badge
                variant="secondary"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border-0 mb-6"
              >
                <span className="text-sm font-medium">الخدمة الأولى</span>
              </Badge>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={100}>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">فريق تسويق متكامل 360°</h2>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={200}>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                نقدّم لك فريقًا متخصصًا لإدارة التسويق بالكامل من الفكرة إلى الشهرة والانتشار، بدون عناء.
              </p>
            </ScrollReveal>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {marketingServices.map((service, index) => (
                <ScrollReveal key={index} delay={300 + index * 50} direction="right">
                  <div className="flex items-center gap-3 group cursor-pointer">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <service.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <span className="text-foreground font-medium group-hover:text-primary transition-colors">
                      {service.text}
                    </span>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={700}>
              <Card className="bg-secondary/50 border-0">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center shrink-0 animate-pulse">
                      <Lightbulb className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <div>
                      <p className="text-foreground font-bold text-lg mb-1">من الفكرة… إلى الترند…</p>
                      <p className="text-muted-foreground">إلى العلامة التجارية الناجحة</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>

          <ScrollReveal direction="left" delay={200}>
            <div className="relative">
              <img
                src="/creative-marketing-team-working-on-social-media-co.jpg"
                alt="فريق التسويق"
                className="w-full rounded-3xl shadow-xl transition-transform duration-500 hover:scale-[1.02]"
              />
              <Card className="absolute -bottom-6 -right-6 shadow-lg border border-border animate-in slide-in-from-bottom duration-700">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="flex -space-x-3 space-x-reverse">
                      {[1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="w-10 h-10 rounded-full bg-primary/20 border-2 border-card animate-in zoom-in duration-300"
                          style={{ animationDelay: `${i * 100}ms` }}
                        />
                      ))}
                    </div>
                    <div>
                      <AnimatedCounter end={150} prefix="+" className="font-bold text-card-foreground" />
                      <div className="text-sm text-muted-foreground">حملة ناجحة</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
