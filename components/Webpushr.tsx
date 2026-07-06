"use client";

import { useEffect } from "react";

export default function Webpushr() {
  useEffect(() => {
    const loadWebpushr = () => {
      if ((window as any).webpushr) {
        (window as any).webpushr("setup", {
          key: "BJFhgeYsGG3pXYffh9LkfgzCqtj0fFVvn-Mtp3OwCWPuHCpi7BsPc6sTobGFwZ5YwPbNEMH49JtAcZt-dBg10vw",
        });
        return;
      }

      const script = document.createElement("script");
      script.src = "https://cdn.webpushr.com/app.min.js";
      script.async = true;

      script.onload = () => {
        if (typeof (window as any).webpushr === "function") {
          (window as any).webpushr("setup", {
            key: "BJFhgeYsGG3pXYffh9LkfgzCqtj0fFVvn-Mtp3OwCWPuHCpi7BsPc6sTobGFwZ5YwPbNEMH49JtAcZt-dBg10vw",
          });
        }
      };

      document.head.appendChild(script);
    };

    loadWebpushr();
  }, []);

  return null;
}