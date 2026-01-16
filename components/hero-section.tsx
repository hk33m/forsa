"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Sparkles } from "lucide-react";
import { Phone3D } from "@/components/3d-phone";
import { AnimatedCounter } from "@/components/animated-counter";
import { ScrollReveal } from "@/components/scroll-reveal";

export function HeroSection() {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <ScrollReveal delay={100}>
              <Badge
                variant="secondary"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border-0 hover:bg-primary/20 transition-colors"
              >
                <Sparkles className="w-4 h-4 animate-pulse" />
                <span className="text-sm font-medium">
                  حلول متكاملة من مكان واحد
                </span>
              </Badge>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                فريق فرصة
                <span className="block text-primary mt-2 bg-gradient-to-l from-primary to-chart-2 bg-clip-text text-transparent">
                  من جوالك!
                </span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
                نقدّم لك حلولًا متكاملة لإدارة المشاريع، القهاوي، الرحلات،
                والطباعة من الفكرة إلى التنفيذ إلى التشغيل الكامل
              </p>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 text-lg px-8 group transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
                >
                  ابدأ مشروعك الآن
                  <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="gap-2 text-lg px-8 border-primary text-primary hover:bg-primary/5 bg-transparent transition-all duration-300 hover:scale-105"
                >
                  تعرف على خدماتنا
                </Button>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={500}>
              <div className="flex items-center gap-8 pt-4">
                <div className="text-center">
                  <AnimatedCounter
                    end={500}
                    prefix="+"
                    className="text-3xl font-bold text-primary"
                  />
                  <div className="text-sm text-muted-foreground">
                    مشروع ناجح
                  </div>
                </div>
                <div className="w-px h-12 bg-border" />
                <div className="text-center">
                  <AnimatedCounter
                    end={200}
                    prefix="+"
                    className="text-3xl font-bold text-primary"
                  />
                  <div className="text-sm text-muted-foreground">عميل سعيد</div>
                </div>
                <div className="w-px h-12 bg-border" />
                <div className="text-center">
                  <AnimatedCounter
                    end={5}
                    suffix="+"
                    className="text-3xl font-bold text-primary"
                  />
                  <div className="text-sm text-muted-foreground">
                    سنوات خبرة
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal direction="left" delay={300}>
            <div className="relative">
              <Phone3D />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
