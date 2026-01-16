"use client";

import { Phone, Mail, MapPin, Instagram, Twitter } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <ScrollReveal direction="up" delay={0}>
            <div>
              <a href="#" className="flex items-center gap-2 mb-4 group">
                <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <span className="text-primary-foreground font-bold text-lg">
                    ف
                  </span>
                </div>
                <span className="font-bold text-lg">فرصة</span>
              </a>
              <p className="text-background/70 leading-relaxed">
                حلول متكاملة لإدارة المشاريع من الفكرة إلى التنفيذ والتشغيل
                الكامل
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={100}>
            <div>
              <h3 className="font-bold text-lg mb-4">خدماتنا</h3>
              <ul className="space-y-2 text-background/70">
                {[
                  { href: "#marketing", label: "التسويق الرقمي" },
                  { href: "#trips", label: "تنظيم الرحلات" },
                  { href: "#printing", label: "الطباعة والتجهيز" },
                ].map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="hover:text-background transition-colors hover:translate-x-1 inline-block"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={200}>
            <div>
              <h3 className="font-bold text-lg mb-4">روابط سريعة</h3>
              <ul className="space-y-2 text-background/70">
                {[
                  { href: "#", label: "الرئيسية" },
                  { href: "#services", label: "خدماتنا" },
                  { href: "#contact", label: "تواصل معنا" },
                ].map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="hover:text-background transition-colors hover:translate-x-1 inline-block"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={300}>
            <div>
              <h3 className="font-bold text-lg mb-4">تواصل معنا</h3>
              <ul className="space-y-3 text-background/70">
                <li className="flex items-center gap-2 group cursor-pointer hover:text-background transition-colors">
                  <Phone className="w-4 h-4 group-hover:animate-pulse" />
                  <span>+966 XX XXX XXXX</span>
                </li>
                <li className="flex items-center gap-2 group cursor-pointer hover:text-background transition-colors">
                  <Mail className="w-4 h-4 group-hover:animate-pulse" />
                  <span>info@example.com</span>
                </li>
                <li className="flex items-center gap-2 group cursor-pointer hover:text-background transition-colors">
                  <MapPin className="w-4 h-4 group-hover:animate-pulse" />
                  <span>المملكة العربية السعودية</span>
                </li>
              </ul>
              <div className="flex gap-4 mt-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={400}>
          <div className="pt-8 border-t border-background/10 text-center text-background/60">
            <p>© {new Date().getFullYear()} فرصة. جميع الحقوق محفوظة.</p>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}
