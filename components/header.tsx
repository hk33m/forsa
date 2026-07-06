"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Menu, Phone ,MessageCircle, Moon, Sun} from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { setTheme, theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "الرئيسية", href: "#" },
    { label: "خدماتنا", href: "#services" },
    { label: "التسويق", href: "#marketing" },
     { label: "عملائنا", href: "#clisection" },
    // { label: "الطباعة", href: "#printing" },
    { label: "تواصل معنا", href: "#contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 right-0 left-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
              <span className="text-primary-foreground font-bold text-lg">
                ف
              </span>
            </div>
            <span className="font-bold text-lg text-foreground">فرصة</span>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative text-muted-foreground hover:text-primary transition-colors font-medium group"
              >
                {item.label}
                <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>
          
       
          
          <div className="hidden lg:flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="border sm:flex relative cursor-pointer"
            >
              <Moon className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Sun className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            
              <span className="sr-only">تبديل المظهر</span>
            </Button>
            <Link href="https://wa.me/966560694276">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25">
              <MessageCircle className="w-4 h-4" />
              تواصل الآن
            </Button>
            </Link>
          </div>
      
    
            
         <div className=" flex gap-1.5">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="border sm:flex relative lg:hidden cursor-pointer"
            >
              <Moon className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Sun className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            
              <span className="sr-only">تبديل المظهر</span>
            </Button>
            {/* <SheetHeader>
              <SheetTitle className="sr-only">Menu</SheetTitle>
            </SheetHeader> */}
            <SheetTrigger asChild className="lg:hidden border">
              <Button variant="ghost" size="icon">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <nav className="flex flex-col gap-4 mt-8">
                {navItems.map((item, index) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-foreground hover:text-primary transition-colors font-medium py-3 border-b border-border animate-in slide-in-from-right duration-300"
                    style={{ animationDelay: `${index * 50}ms` }}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 mt-4">
                  <Phone className="w-4 h-4" />
                  تواصل الآن
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
       </div>
        </div>
      </div>
    </header>
  );
}
