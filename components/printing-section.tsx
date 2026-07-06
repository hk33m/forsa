"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Coffee, Gift, Shirt, BadgeCheck, Lightbulb } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

const printingServices = [
  {
    icon: Coffee,
    title: "أكواب وبوكشات مخصصة",
    description: "أكواب مخصصة للقهاوي، بوكشات، وكل ما يخص تقديم المشروبات",
  },
  {
    icon: Gift,
    title: "هدايا دعائية",
    description: "هدايا دعائية للشركات والعملاء بتصاميم احترافية",
  },
  {
    icon: Shirt,
    title: "الملابس والتطريز",
    description: "تطريز احترافي وطباعة سلك سكرين على القمصان والحقائب",
  },
  {
    icon: BadgeCheck,
    title: "يونيفورم كامل",
    description: "يونيفورم كامل للقهاوي والموظفين يتوافق مع العلامة التجارية",
  },
]

export function PrintingSection() {
  return (
    <section id="printing" className="py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge
              variant="secondary"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-chart-2/20 text-foreground border-0 mb-6"
            >
              <span className="text-sm font-medium">الخدمة الثالثة</span>
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">الطباعة والتجهيز الكامل للقهاوي</h2>
            <p className="text-lg text-muted-foreground">
              خدمة طباعة شاملة ومخصصة لكل ما يخص القهاوي والأعمال التجارية بجودة عالية وسرعة تنفيذ ممتازة
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {printingServices.map((service, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <Card className="group h-full bg-card border-border hover:border-primary/30 hover:shadow-xl transition-all duration-500 text-center hover:-translate-y-2">
                <CardHeader className="pb-2">
                  <div className="w-16 h-16 rounded-2xl bg-chart-2/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-primary transition-all duration-500">
                    <service.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed">{service.description}</CardDescription>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-8 items-center">
          <ScrollReveal direction="right">
            <img
              src="/custom-printed-coffee-cups-branded-merchandise-pri.jpg"
              alt="خدمات الطباعة"
              className="w-full rounded-2xl shadow-lg transition-transform duration-500 hover:scale-[1.02]"
            />
          </ScrollReveal>

          <div className="space-y-6">
            <ScrollReveal direction="left" delay={100}>
              <Card className="bg-secondary/30 border-0 hover:bg-secondary/50 transition-colors">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg text-foreground mb-3">طباعة سلك سكرين</h3>
                  <p className="text-muted-foreground">
                    تقنية مثالية لتصاميم ثابتة على القمصان، الحقائب، والأقمشة الثقيلة
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={200}>
              <Card className="bg-secondary/30 border-0 hover:bg-secondary/50 transition-colors">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg text-foreground mb-3">التطريز الاحترافي</h3>
                  <p className="text-muted-foreground">لإضافة لمسة فاخرة واحترافية على اليونيفورم والملابس الرسمية</p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={300}>
              <div className="flex items-center gap-3 text-primary font-bold text-lg">
                <Lightbulb className="w-6 h-6 animate-pulse" />
                <span>من التصميم والتنفيذ حتى التسليم جاهز للاستخدام</span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
