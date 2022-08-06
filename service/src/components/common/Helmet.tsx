import Head from 'next/head';

interface HelemetProps {
  title?: string;
  description?: string;
  imageSrc?: string;
  url?: string;
  isRoot?: boolean;
}

const baseURL = 'https://gdsc-uos-recruit-page.vercel.app';

function Helmet({
  title,
  description,
  imageSrc,
  url,
  isRoot = false,
}: HelemetProps) {
  return (
    <Head>
      {/* for google publish seo */}
      <meta name='article:published_time' content='2022-08-05T00:00:00.000Z' />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'http://schema.org',
            '@type': 'WebSite',
            datePublished: '2022-08-05T00:00:00.000Z',
            dateModified: '2022-08-05T00:00:00.000Z',
            author: {
              '@type': 'Person',
              name: 'Lee SangMin',
            },
          }),
        }}
      />

      <meta property='og:title' content={`GDSC | ${title}`} />
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content='GDSC,UOS,RECRUIT,GDSC UOS' />

      {/* for mobile */}
      <meta property='og:type' content='website' />
      <meta property='og:title' content={title} />
      <meta property='og:site_name' content='GDSC-UOS-RECRUIT-PAGE' />
      <meta property='og:description' content={description} />
      <meta property='og:image' content='../../../public/logo128.png' />
      <meta property='og:url' content={url} />

      {isRoot && <link rel='canonical' href={baseURL} />}
    </Head>
  );
}

export default Helmet;
