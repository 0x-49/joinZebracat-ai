import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Transform text into engaging videos instantly with Zebracat's AI-powered video creation platform. Perfect for marketers, educators, and content creators." />
        <meta property="og:title" content="Zebracat AI - Instant Video Creation Platform" />
        <meta property="og:description" content="Transform text into professional videos in seconds with our AI-powered platform. Perfect for marketers, educators, and content creators." />
        <meta property="og:image" content="/images/og-image.jpg" />
        <meta property="og:url" content="https://zebracat.ai" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://zebracat.ai" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
