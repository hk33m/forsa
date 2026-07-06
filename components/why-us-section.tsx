"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Users, Settings, Zap, Award, CheckCircle2, Building } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

const reasons = [
  { icon: Users, text: "فريق متخصص في كل مجال" },
  { icon: Settings, text: "تنفيذ كامل بدون تدخل منك" },
  { icon: Building, text: "حلول تشغيل + تسويق + تجهيز" },
  { icon: Zap, text: "سرعة في الإنجاز" },
  { icon: Award, text: "جودة عالية" },
  { icon: CheckCircle2, text: "كل شيء من مكان واحد" },
]

export function WhyUsSection() {
  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 relative">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">لماذا تختارنا؟</h2>
            <p className="text-primary-foreground/80 text-lg">نحن شريكك الموثوق لتحقيق النجاح</p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <Card className="bg-primary-foreground/10 border-primary-foreground/20 backdrop-blur-sm hover:bg-primary-foreground/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary-foreground/20 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <reason.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <span className="font-bold text-lg text-primary-foreground">{reason.text}</span>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
