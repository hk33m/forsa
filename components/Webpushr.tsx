"use client";

import Script from "next/script";

export default function Webpushr() {
  return (
    <>
      <Script
        src="https://cdn.webpushr.com/app.min.js"
        strategy="afterInteractive"
      />

      <Script id="webpushr-init" strategy="afterInteractive">
        {`
          window.addEventListener('load', function() {
            if (window.webpushr) {
              window.webpushr('setup', {
                key: 'BJFhgeYsGG3pXYffh9LkfgzCqtj0fFVvn-Mtp3OwCWPuHCpi7BsPc6sTobGFwZ5YwPbNEMH49JtAcZt-dBg10vw'
              });
            }
          });
        `}
      </Script>
    </>
  );
}