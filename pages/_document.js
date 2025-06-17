import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          /* Critical CSS for above-the-fold content */
body { font-family: Arial, sans-serif; margin: 0; }
.plasmic-hero { padding: 20px; background: #fff; }
/* Critical font styles (example for Roboto) */
.plasmic-text {
  font-family: 'Roboto', Arial, sans-serif;
  font-weight: 400;
  font-size: 16px;
}
@media (min-width: 600px) {
  .plasmic-text { font-size: 18px; }
}
          />
          {/* Preload and Defer Google Fonts CSS */}
          <link
            rel="preload"
            href="https://fonts.googleapis.com/css2?family=...&display=swap"
            as="style"
            onLoad="this.rel='stylesheet'"
          />
          {/* Fallback for older browsers */}
          <noscript>
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap"
            />
          </noscript>
          {/* Google Tag Manager (via Stape custom loader, async) */}
          <script
            async
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s);j.async=true;j.src=
                'https://load.server.agriculturalinsights.com/5imesvfns.js?'+i;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','cywxoi=aWQ9R1RNLVRHWFhWVFg%3D&page=1');
              `,
            }}
          />
          {/* End Google Tag Manager */}
        </Head>
        <body>
          {/* Google Tag Manager (noscript) */}
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://load.server.agriculturalinsights.com/ns.html?id=GTM-TGXXVTX"
              height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
            }}
          />
          {/* End Google Tag Manager (noscript) */}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
