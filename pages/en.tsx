import Head from 'next/head'
import en from '../data/messages.en'
import Link from 'next/link'

export default function HomeEN(){
  const s = en
  return (
    <>
      <Head>
        <title>{s.site.title}</title>
        <meta name="description" content={`${s.site.tagline} | Six Harmonies`}/>
        <link rel="alternate" hrefLang="zh" href="https://harmony.ximory.com/"/>
        <link rel="alternate" hrefLang="en" href="https://harmony.ximory.com/en"/>
      </Head>
      <header style={{padding:'16px',borderBottom:'1px solid rgba(0,0,0,.08)'}}>
        <nav style={{display:'flex',gap:16,alignItems:'center',flexWrap:'wrap'}}>
          <Link href="/en#six">{s.nav.six}</Link>
          <Link href="/en/appendix">{s.nav.appendix}</Link>
          <Link href="/en/about">{s.nav.about}</Link>
          <Link href="/en/contact">{s.nav.contact}</Link>
          <Link href="/" prefetch={false} style={{marginLeft:'auto'}}>{s.nav.langSwitch}</Link>
        </nav>
      </header>

      <main style={{maxWidth:960,margin:'0 auto',padding:'24px'}}>
        <h1>{s.site.tagline}</h1>
        <p>Union as the path, harmony as the return.</p>
        <hr/>
        <h2 id="six">Six Harmonies Overview</h2>

        {Object.entries(s.six).map(([k,v]:any)=>(
          <section key={k} style={{padding:'16px 0'}}>
            <h3>{v.title} ｜ {v.sub}</h3>
            <p>Realm｜{v.realm}</p>
            <p>Path｜{v.path}</p>
            <p>Heart｜{v.heart}</p>
            <p>{v.desc}</p>
            <hr/>
          </section>
        ))}
      </main>

      <footer style={{padding:'24px',borderTop:'1px solid rgba(0,0,0,.08)',textAlign:'center'}}>
        <p>{s.site.footer}</p>
      </footer>
    </>
  )
}
