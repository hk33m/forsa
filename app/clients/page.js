import  Navbar  from "@/components/home/navbar";
import  Footer  from "@/components/home/footer";
import { FloatingContact } from "@/components/floating-contact";
import { Card, CardContent } from "@/components/ui/card";
import { Quote, Building2, Truck, Factory } from "lucide-react";

const clients = [
  {
    name: "شركة أبناء ياشيخ",
    logo: "/arabic-company-logo-1.jpg",
    type: "مزارع دواجن",
    description: "من أكبر مزارع الدواجن في المنطقة الجنوبية",
  },
  {
    name: "شركة التنمية للدواجن",
    logo: "/poultry-company-logo-arabic.jpg",
    type: "إنتاج دواجن",
    description: "شركة رائدة في إنتاج الدواجن والبيض",
  },
  {
    name: "مزارع الوطنية",
    logo: "/national-farms-logo.jpg",
    type: "مزارع متكاملة",
    description: "مجموعة مزارع متكاملة للدواجن والماشية",
  },
  {
    name: "شركة الصفا للمواشي",
    logo: "/livestock-company-logo.jpg",
    type: "تربية ماشية",
    description: "متخصصون في تربية الأبقار والأغنام",
  },
  {
    name: "مجموعة الراجحي",
    logo: "/rajhi-group-logo.jpg",
    type: "استثمار زراعي",
    description: "مجموعة استثمارية زراعية متنوعة",
  },
  {
    name: "شركة حائل الزراعية",
    logo: "/agricultural-company-logo.jpg",
    type: "زراعة وإنتاج حيواني",
    description: "من أكبر الشركات الزراعية في المنطقة",
  },
];

const testimonials = [
  {
    name: "م. عبدالله الياشيخ",
    company: "شركة أبناء ياشيخ",
    role: "المدير التنفيذي",
    quote:
      "تعاملنا مع مصنع التكامل منذ بداية تأسيسه، ونفخر بأن نكون من أوائل عملائهم. جودة الأعلاف ممتازة وأثرت بشكل ملحوظ على إنتاجية مزارعنا.",
  },
  {
    name: "أ. محمد السعيد",
    company: "شركة التنمية للدواجن",
    role: "مدير العمليات",
    quote:
      "ما يميز مصنع التكامل هو التزامهم بالجودة والمواعيد. أصبحوا شريكنا الاستراتيجي في نجاح مشاريعنا وتوسعاتنا المستقبلية.",
  },
  {
    name: "د. فهد العتيبي",
    company: "مزارع الوطنية",
    role: "المدير العام",
    quote:
      "نوعية الأعلاف من مصنع التكامل ساهمت في تحسين معدلات التحويل الغذائي لدينا بشكل ملحوظ، مما انعكس إيجاباً على ربحية المشروع.",
  },
];

const partners = [
  {
    category: "موردو المواد الخام",
    icon: Truck,
    items: [
      "شركات الحبوب العالمية",
      "موردو الفيتامينات والمعادن",
      "مصادر البروتين المعتمدة",
    ],
  },
  {
    category: "شركاء التقنية",
    icon: Factory,
    items: [
      "شركات معدات الإنتاج",
      "مزودو أنظمة الأتمتة",
      "شركات التغليف والتعبئة",
    ],
  },
  {
    category: "شركاء الخدمات",
    icon: Building2,
    items: [
      "مختبرات الفحص المعتمدة",
      "شركات النقل والتوزيع",
      "استشاريو التغذية الحيوانية",
    ],
  },
];

export default function ClientsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-primary py-20 lg:py-28">
          <div className="absolute inset-0 opacity-10">
            <div
              className="h-full w-full bg-cover bg-center"
              style={{
                backgroundImage: `url('/modern-feed-factory-industrial.jpg')`,
              }}
            />
          </div>
          <div className="container relative mx-auto px-4 text-center lg:px-8">
            <h1 className="mb-4 text-4xl font-bold text-primary-foreground lg:text-5xl">
              عملاؤنا وشركاؤنا
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-primary-foreground/90">
              نفخر بشراكاتنا الاستراتيجية مع كبرى المزارع والشركات في المملكة
            </p>
          </div>
        </section>

        {/* Clients Grid */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mb-12 text-center">
              <span className="mb-4 inline-block text-sm font-semibold text-primary">
                عملاؤنا المميزون
              </span>
              <h2 className="mb-4 text-3xl font-bold lg:text-4xl">
                شركاء النجاح
              </h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                نعتز بثقة عملائنا ونسعى دائماً لتقديم أفضل الحلول التي تدعم
                نجاحهم
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {clients.map((client, index) => (
                <Card
                  key={index}
                  className="group overflow-hidden transition-all hover:shadow-lg"
                >
                  <CardContent className="p-6">
                    <div className="mb-4 flex h-20 items-center justify-center rounded-lg bg-muted/50">
                      <img
                        src={client.logo || "/placeholder.svg"}
                        alt={client.name}
                        className="h-12 w-auto object-contain grayscale transition-all group-hover:grayscale-0"
                      />
                    </div>
                    <h3 className="mb-1 text-lg font-semibold">
                      {client.name}
                    </h3>
                    <p className="mb-2 text-sm text-primary">{client.type}</p>
                    <p className="text-sm text-muted-foreground">
                      {client.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-muted/30 py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mb-12 text-center">
              <span className="mb-4 inline-block text-sm font-semibold text-primary">
                آراء العملاء
              </span>
              <h2 className="mb-4 text-3xl font-bold lg:text-4xl">
                ماذا يقول عملاؤنا
              </h2>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="relative">
                  <CardContent className="p-6 pt-8">
                    <Quote className="absolute -top-4 right-6 h-10 w-10 text-primary/20" />
                    <p className="mb-6 text-muted-foreground leading-relaxed">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                    <div className="border-t pt-4">
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-primary">{testimonial.role}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.company}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Strategic Partners */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mb-12 text-center">
              <span className="mb-4 inline-block text-sm font-semibold text-primary">
                الشركاء الاستراتيجيون
              </span>
              <h2 className="mb-4 text-3xl font-bold lg:text-4xl">
                شبكة شركاء متميزة
              </h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                نتعاون مع أفضل الموردين والشركاء لضمان أعلى جودة في منتجاتنا
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
              {partners.map((partner, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <partner.icon className="h-6 w-6" />
                    </div>
                    <h3 className="mb-4 text-xl font-semibold">
                      {partner.category}
                    </h3>
                    <ul className="space-y-2">
                      {partner.items.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 text-muted-foreground"
                        >
                          <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
}
