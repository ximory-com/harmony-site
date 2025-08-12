import Head from 'next/head'
import zh from '../data/messages.zh'
import Link from 'next/link'

export default function Home(){
  const s = zh
  return (
    <>
      <Head>
        <title>{s.site.title}</title>
        <meta name="description" content={`${s.site.tagline}｜自我和·社会和·自然和·能量和·共频和·无我和`}/>
      </Head>
      <header style={{padding:'16px',borderBottom:'1px solid rgba(0,0,0,.08)'}}>
        <nav style={{display:'flex',gap:16,alignItems:'center',flexWrap:'wrap'}}>
          <Link href="/#six">{s.nav.six}</Link>
          <Link href="/appendix">{s.nav.appendix}</Link>
          <Link href="/about">{s.nav.about}</Link>
          <Link href="/contact">{s.nav.contact}</Link>
          <Link href="/en" prefetch={false} style={{marginLeft:'auto'}}>{s.nav.langSwitch}</Link>
        </nav>
      </header>

      <main style={{maxWidth:960,margin:'0 auto',padding:'24px'}}>
        <h1>{s.site.tagline}</h1>
        <p>以“合”为途，以“和”为归。</p>
        <hr/>
        <h2 id="six">六和概览</h2>

        {Object.entries(s.six).map(([k,v]:any)=>(
          <section key={k} style={{padding:'16px 0'}}>
            <h3>{v.title} ｜ {v.sub}</h3>
            <p>境界｜{v.realm}</p>
            <p>路径｜{v.path}</p>
            <p>心语｜{v.heart}</p>
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
