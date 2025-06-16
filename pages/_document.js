import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
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
          {/* Defer Plasmic JavaScript */}
          <script
            defer
            src="/_next/static/chunks/plasmic.js"
            dangerouslySetInnerHTML={{
              __html: `
                // Optional: Add custom logic to lazy-load Plasmic components
              `,
            }}
          />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
