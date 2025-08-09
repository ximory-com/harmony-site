import { useRouter } from 'next/router'
export default function Appendix(){
  const { locale } = useRouter(); const zh = locale==='zh';
  return (<main>
    <h1>{zh?'附录图集':'Appendix Gallery'}</h1>
    <p className="kicker">{zh?'多种视图展示六和体系：表格 / 卡片 / 圆环 / 金句。':'Multiple views: table / cards / ring / aphorisms.'}</p>
    <ul>
      <li>{zh?'表格总览：见“六和·表格视图”。':'Table: see Six Harmonies · Table View.'}</li>
      <li>{zh?'卡片组：见首页卡片区。':'Cards: see home overview.'}</li>
      <li>{zh?'圆环图：占位，后续可接入 SVG。':'Ring chart: placeholder for SVG.'}</li>
      <li>{zh?'哲思长图：可在此放下载链接。':'Philosophical poster: place download links here.'}</li>
    </ul>
  </main>)
}
