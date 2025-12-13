const partners = [
  { name: "شركة أبناء ياشيخ", logo: "/arabic-company-logo-1.jpg" },
  { name: "شركة التنمية للدواجن", logo: "/poultry-company-logo-arabic.jpg" },
  { name: "مزارع الوطنية", logo: "/national-farms-logo.jpg" },
  { name: "شركة الصفا للمواشي", logo: "/livestock-company-logo.jpg" },
  { name: "مجموعة الراجحي", logo: "/rajhi-group-logo.jpg" },
  { name: "شركة حائل الزراعية", logo: "/agricultural-company-logo.jpg" },
]

export function PartnersSection() {
  return (
    <section className="bg-muted/30 py-16 lg:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-10 text-center">
          <span className="mb-4 inline-block text-sm font-semibold text-primary">شركاء النجاح</span>
          <h2 className="mb-4 text-2xl font-bold lg:text-3xl">عملاؤنا وشركاؤنا الاستراتيجيون</h2>
          <p className="mx-auto max-w-xl text-muted-foreground">نفخر بشراكاتنا مع كبرى المزارع والشركات في المملكة</p>
        </div>

        <div className="grid grid-cols-2 items-center gap-8 md:grid-cols-3 lg:grid-cols-6">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center rounded-lg bg-card p-6 grayscale transition-all hover:grayscale-0"
            >
              <img src={partner.logo || "/placeholder.svg"} alt={partner.name} className="h-12 w-auto object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
