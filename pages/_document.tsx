import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="zh">
        <Head>
          {/* Noto Sans SC */}
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
          <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;700&display=swap" rel="stylesheet" />
          {/* 基础 SEO */}
          <meta name="theme-color" content="#008AE2"/>
          <meta name="description" content="心沐六和：念和在心，归和而明｜以“合”为途，以“和”为归。"/>
          <meta property="og:title" content="心沐六和｜Ximory Six Harmonies"/>
          <meta property="og:description" content="自我和｜社会和｜自然和｜能量和｜共频和｜无我和"/>
          <meta property="og:image" content="/og.png"/>
          <meta property="og:type" content="website"/>
          <meta property="og:url" content="https://harmony.ximory.com/"/>
        </Head>
        <body>
          <Main/><NextScript/>
        </body>
      </Html>
    )
  }
}
