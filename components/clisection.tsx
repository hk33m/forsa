"use client";

import { motion } from "framer-motion";
import { Users, Store, Star, TrendingUp } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal"
const stats = [
  {
    icon: Store,
    number: "+120",
    title: "متجر تم إطلاقه",
  },
  {
    icon: Users,
    number: "+350",
    title: "عميل سعيد",
  },
  {
    icon: Star,
    number: "4.9",
    title: "متوسط التقييم",
  },
  {
    icon: TrendingUp,
    number: "+85%",
    title: "نسبة نمو العملاء",
  },
];

export  function ClientsSection() {
  return (
    <section id="clisection" className="py-24 bg-gradient-to-b from-white to-stone-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-amber-700 font-semibold">
            نجاحات نفتخر بها
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-slate-900">
            عملاء حققوا النجاح معنا
          </h2>

          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            ساعدنا عشرات العلامات التجارية والمتاجر الإلكترونية على النمو
            وتحقيق نتائج حقيقية من خلال حلول تسويقية متكاملة.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-3xl p-8 shadow-sm border border-stone-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-amber-100 flex items-center justify-center mb-6">
                <item.icon className="w-7 h-7 text-amber-700" />
              </div>

              <h3 className="text-4xl font-bold text-slate-900 mb-2">
                {item.number}
              </h3>

              <p className="text-slate-600">{item.title}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 bg-white rounded-[32px] border border-stone-200 p-10 shadow-sm">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">
                أكثر من 120 مشروع ناجح
              </h3>

              <p className="text-slate-600 leading-8">
                نفخر بثقة عملائنا في مختلف القطاعات، من المتاجر الإلكترونية
                والشركات الناشئة إلى العلامات التجارية الكبرى.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              {["عميل 1", "عميل 2", "عميل 3", "عميل 4", "عميل 5"].map(
                (client,index) => (
                  < ScrollReveal key={client} direction="left" delay={200 + index * 50}>
                  <div
                    
                    className="px-8 py-4 bg-stone-50 rounded-2xl border border-stone-200 text-slate-700 font-medium"
                  >
                    {client}
                  </div>
                  </ScrollReveal>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}