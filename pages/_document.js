import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Inline Critical CSS with Font Fallbacks */}
          <style
  dangerouslySetInnerHTML={{
    __html: `
      @font-face {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400; /* Regular */
        src: url('/fonts/roboto-v48-latin-regular.woff2') format('woff2'); /* Adjust file name if needed */
      }
      @font-face {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 600; /* Semi-Bold */
        src: url('/fonts/roboto-v48-latin-600.woff2') format('woff2');
      }
      @font-face {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700; /* Bold */
        src: url('/fonts/roboto-v48-latin-700.woff2') format('woff2');
      }
      body { font-family: Arial, sans-serif; margin: 0; line-height: 1.5; }
      .plasmic-hero, .plasmic-root-wrapper { padding: 20px; background: #fff; max-width: 100%; }
      .plasmic-text, .plasmic-default-styles, h2 { 
        font-family: 'Roboto', Arial, sans-serif; 
        font-weight: 400; 
        font-size: 16px; 
        color: rgb(255, 255, 255); 
      }
      @media (min-width: 600px) {
        .plasmic-text, .plasmic-default-styles, h2 { font-size: 18px; }
      }
      h2 { font-size: 2rem; } /* Match LCP <h2> styling */
    `,
  }}
/>
{/* Remove Google Fonts links since self-hosting is complete */}
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
