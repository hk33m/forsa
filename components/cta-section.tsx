"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Phone, MessageCircle } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { AnimatedCounter } from "@/components/animated-counter"

export function CtaSection() {
  return (
    <section id="contact" className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <Badge
              variant="secondary"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent-foreground border-0 mb-6"
            >
              <span className="text-sm font-medium">ابدأ الآن</span>
            </Badge>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              حوّل فكرتك إلى مشروع ناجح…
              <span className="block text-primary mt-2 bg-gradient-to-l from-primary to-chart-2 bg-clip-text text-transparent">
                من جوالك فقط
              </span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              لا تنتظر أكثر! تواصل معنا الآن وابدأ رحلة نجاحك مع فريق متخصص يضمن لك أفضل النتائج
            </p>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground gap-3 text-lg px-10 py-6 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/25 group"
              >
                <MessageCircle className="w-6 h-6 group-hover:animate-bounce" />
                تواصل عبر واتساب
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-3 text-lg px-10 py-6 border-primary text-primary hover:bg-primary/5 bg-transparent transition-all duration-300 hover:scale-105 group"
              >
                <Phone className="w-6 h-6 group-hover:animate-pulse" />
                اتصال مباشر
              </Button>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <div className="mt-12 pt-12 border-t border-border">
              <div className="text-muted-foreground mb-6">
                موثوق من قبل أكثر من <AnimatedCounter end={200} className="inline font-bold text-primary" /> عميل
              </div>
              <div className="flex justify-center gap-8 flex-wrap">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-24 h-12 bg-muted rounded-lg animate-pulse transition-all duration-300 hover:bg-muted/80"
                    style={{ animationDelay: `${i * 200}ms` }}
                  />
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
