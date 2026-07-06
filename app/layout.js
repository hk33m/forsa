import "./globals.css";
 import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/next";
import Webpushr from "@/components/Webpushr";


export const metadata = {
  title: "تسويق رقمي    ",
  description:
    "لوحة تحكم ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body dir="rtl">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Webpushr></Webpushr>
          {children}
         
         
        </ThemeProvider>
      </body>
    </html>
  );
}
