import Head from 'next/head';
import Script from 'next/script';

function ScriptHeader() {
  return (
    <Head>
      <meta
        name='google-site-verification'
        content={process.env.NEXT_PULBIC_GOOGLE_SITE_VERIFICATION ?? ''}
      />
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${
          process.env.GA_KEY ?? ''
        }`}
      />
      <Script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${process.env.GA_KEY ?? ''}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </Head>
  );
}

export default ScriptHeader;
