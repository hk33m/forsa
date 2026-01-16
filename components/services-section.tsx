"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Megaphone, Mountain, Printer } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

const services = [
  {
    icon: Megaphone,
    title: "فريق تسويق متكامل 360°",
    description: "من الفكرة إلى الشهرة والانتشار، بدون عناء. نقدّم لك فريقًا متخصصًا لإدارة التسويق بالكامل.",
    color: "bg-primary",
    href: "#marketing",
  },
  {
    icon: Mountain,
    title: "تنظيم الرحلات والهايكنق",
    description: "نوفّر فريقًا متخصصًا لتنظيم رحلات الطبيعة، الكامب، واليوغا باحترافية عالية وتجربة لا تُنسى.",
    color: "bg-accent",
    href: "#trips",
  },
  {
    icon: Printer,
    title: "الطباعة والتجهيز للقهاوي",
    description: "خدمة طباعة شاملة ومخصصة لكل ما يخص القهاوي والأعمال التجارية بجودة عالية وسرعة تنفيذ.",
    color: "bg-chart-2",
    href: "#printing",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-24 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">خدماتنا المتكاملة</h2>
            <p className="text-lg text-muted-foreground">فريق متخصص لكل مجال يضمن لك التنفيذ الاحترافي</p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ScrollReveal
              key={index}
              delay={index * 150}
              direction={index === 1 ? "up" : index === 0 ? "right" : "left"}
            >
              <a href={service.href}>
                <Card className="group h-full bg-card hover:shadow-xl transition-all duration-500 border-border hover:border-primary/30 cursor-pointer hover:-translate-y-2">
                  <CardHeader>
                    <div
                      className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center mb-2 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                    >
                      <service.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <h3 className="text-xl font-bold text-card-foreground mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
