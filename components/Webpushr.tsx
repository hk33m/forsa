// components/Webpushr.tsx

"use client";

import Script from "next/script";

export default function Webpushr() {
  return (
    <Script id="webpushr" strategy="afterInteractive">
      {`
        (function(w,d,s,id){
          if(typeof(w.webpushr)!=='undefined') return;
          w.webpushr=w.webpushr||function(){
            (w.webpushr.q=w.webpushr.q||[]).push(arguments)
          };
          var js,fjs=d.getElementsByTagName(s)[0];
          js=d.createElement(s);
          js.id=id;
          js.async=1;
          js.src="https://cdn.webpushr.com/app.min.js";
          fjs.parentNode.appendChild(js);
        }(window,document,'script','webpushr-jssdk'));

        webpushr('setup',{
          key:'BJFhgeYsGG3pXYffh9LkfgzCqtj0fFVvn-Mtp3OwCWPuHCpi7BsPc6sTobGFwZ5YwPbNEMH49JtAcZt-dBg10vw'
        });
      `}
    </Script>
  );
}
