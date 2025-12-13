
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata = {
  title: "مصنع التكامل للأعلاف | Al-Takamol Factory for Fodder",
  description:
    "مصنع التكامل للأعلاف - الشريك الموثوق في صناعة أعلاف الدواجن والماشية في المملكة العربية السعودية. طاقة إنتاجية تصل إلى 120 طن في الساعة.",
  keywords: ["أعلاف", "دواجن", "ماشية", "السعودية", "feed", "poultry", "livestock"],
  generator: "v0.app",
  icons: {
    icon: [
      { url: "/icon-light-32x32.png", media: "(prefers-color-scheme: light)" },
      { url: "/icon-dark-32x32.png", media: "(prefers-color-scheme: dark)" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
}
export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body dir="rtl">
       <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
