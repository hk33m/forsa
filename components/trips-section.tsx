"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Tent, Sparkles, Mountain } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { AnimatedCounter } from "@/components/animated-counter"

const hikingLocations = ["هايكنق السودة", "هايكنق رجال ألمع", "هايكنق جزيرة ماركة", "هايكنق في جنوب المملكة"]

const campingLocations = ["السودة", "النماص", "تنومة", "جزيرة ماركة"]

const yogaServices = ["جلسات يوغا وسط الطبيعة", "ورش تطوير الذات", "أنشطة استرخاء وصحية", "تنظيم كامل من A إلى Z"]

export function TripsSection() {
  return (
    <section id="trips" className="py-16 md:py-24 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="right" className="order-2 lg:order-1">
            <div className="relative">
              <img
                src="/hiking-group-in-beautiful-saudi-arabia-mountains.jpg"
                alt="رحلات الهايكنق"
                className="w-full rounded-3xl shadow-xl transition-transform duration-500 hover:scale-[1.02]"
              />
              <Card className="absolute -bottom-6 -left-6 shadow-lg border border-border animate-in slide-in-from-left duration-700">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center animate-bounce">
                      <Mountain className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <div>
                      <AnimatedCounter end={50} prefix="+" className="font-bold text-card-foreground" />
                      <div className="text-sm text-muted-foreground">رحلة منظمة</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </ScrollReveal>

          <div className="order-1 lg:order-2">
            <ScrollReveal direction="left">
              <Badge
                variant="secondary"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent-foreground border-0 mb-6"
              >
                <span className="text-sm font-medium">الخدمة الثانية</span>
              </Badge>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={100}>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">فريق تنظيم الرحلات والهايكنق</h2>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={200}>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                نوفّر فريقًا متخصصًا لتنظيم رحلات الطبيعة، الكامب، واليوغا باحترافية عالية وتجربة لا تُنسى.
              </p>
            </ScrollReveal>

            <div className="grid gap-6">
              <ScrollReveal delay={300}>
                <Card className="bg-card border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-3 text-lg">
                      <MapPin className="w-6 h-6 text-primary" />
                      تنظيم رحلات الهايكنق
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {hikingLocations.map((loc, i) => (
                        <Badge
                          key={i}
                          variant="secondary"
                          className="bg-primary/10 text-primary border-0 hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
                        >
                          {loc}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={400}>
                <Card className="bg-card border-border hover:border-accent/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-3 text-lg">
                      <Tent className="w-6 h-6 text-accent" />
                      تنظيم الكامب والتخييم
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {campingLocations.map((loc, i) => (
                        <Badge
                          key={i}
                          variant="secondary"
                          className="bg-accent/20 text-accent-foreground border-0 hover:bg-accent hover:text-accent-foreground transition-colors cursor-pointer"
                        >
                          {loc}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={500}>
                <Card className="bg-card border-border hover:border-chart-2/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-3 text-lg">
                      <Sparkles className="w-6 h-6 text-chart-2" />
                      رحلات اليوغا وورش العمل
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {yogaServices.map((service, i) => (
                        <span
                          key={i}
                          className="text-muted-foreground text-sm flex items-center gap-2 group cursor-pointer hover:text-foreground transition-colors"
                        >
                          <span className="w-1.5 h-1.5 bg-chart-2 rounded-full group-hover:scale-150 transition-transform" />
                          {service}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
