import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
        <script
          src="//code.tidio.co/r0drkzxogrdystb1n9njx9n1fp5gwt7q.js"
          async
        ></script>

        {/* <!-- DO NOT MODIFY -->
<!-- Quora Pixel Code (JS Helper) --> */}
        <script
          dangerouslySetInnerHTML={{
            __html: `!function(q,e,v,n,t,s){if(q.qp) return; n=q.qp=function(){n.qp?n.qp.apply(n,arguments):n.queue.push(arguments);}; n.queue=[];t=document.createElement(e);t.async=!0;t.src=v; s=document.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t,s);}(window, 'script', 'https://a.quora.com/qevents.js');
qp('init', '1a61e5bb870446c3aceec43a64121905');
qp('track', 'ViewContent');`,
          }}
        ></script>

        <noscript
          dangerouslySetInnerHTML={{
            __html: `<img
            height="1"
            width="1"
            style="display:none"
            src="https://q.quora.com/_/ad/1a61e5bb870446c3aceec43a64121905/pixel?tag=ViewContent&noscript=1"
          />`,
          }}
        ></noscript>
        {/* <!-- End of Quora Pixel Code --> */}
      </body>
    </Html>
  );
}
