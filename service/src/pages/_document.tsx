import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head />
      <meta
        name='google-site-verification'
        content={process.env.NEXT_PULBIC_GOOGLE_SITE_VERIFICATION ?? ''}
      />
      <html lang='ko' />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
