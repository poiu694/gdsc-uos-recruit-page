import Script from 'next/script';

function ScriptHeader() {
  return (
    <>
      <Script
        async
        id="gtag-key"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_KEY ?? ''}`}
      />
      <Script
        id="gtag-html"
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
      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;700&display=swap"
        rel="preload"
        as="font"
      ></link>
    </>
  );
}

export default ScriptHeader;
