import Link from 'next/link'
import { useRouter } from 'next/router'
export default function Layout({children}:{children:React.ReactNode}){
  const { locale, asPath } = useRouter(); const other = locale==='zh'?'en':'zh';
  return (<div className="container">
    <header className="header">
      <div><Link href="/" className="badge">心沐六和 · Harmony</Link></div>
      <nav className="nav">
        <Link href="/six-harmonies">{locale==='zh'?'六和总览':'Six Harmonies'}</Link>
        <Link href="/appendix">{locale==='zh'?'附录图':'Appendix'}</Link>
        <Link href="/about">{locale==='zh'?'关于':'About'}</Link>
        <Link href="/contact">{locale==='zh'?'联系':'Contact'}</Link>
      </nav>
      <div><Link href={asPath} locale={other} className="badge">{other.toUpperCase()}</Link></div>
    </header>
    {children}
    <footer className="footer">© {new Date().getFullYear()} 心沐六和 · Harmony</footer>
  </div>)
}
