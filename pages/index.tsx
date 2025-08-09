import { useRouter } from 'next/router'
import HarmonyCard from '../components/HarmonyCard'
import { getHarmonies } from '../data/harmonies'
export default function Home(){
  const { locale } = useRouter(); const items = getHarmonies((locale as any)||'zh'); const zh = locale==='zh';
  return (<main>
    <section className="hero">
      <h1>{zh ? '心沐六和｜觉醒之路，从和开始' : 'Heart of Harmony · The Way Begins with Harmony'}</h1>
      <p className="kicker">{zh ? '通过融合与整合，回归到“和”。' : 'Return to harmony through integration and union.'}</p>
      <div className="block">
        <p>{zh ? '意境引子' : 'Prologue'}</p>
        <p>{zh ? '🌅 自省一念… 🪞 理解一瞬… 🍃 顺应一息… 💓 调养一日… 📡 同频一场… 🌌 放下一心…' :
          '🌅 One thought of introspection… 🪞 one moment… 🍃 one breath… 💓 one day… 📡 one session… 🌌 one heart released…'}</p>
      </div>
    </section>
    <hr className="hr"/>
    <section>
      <h2>{zh?'六和卡片总览':'Six Harmonies Overview'}</h2>
      <div className="grid">{items.map(h => <HarmonyCard key={h.key} h={h}/>)}</div>
    </section>
  </main>)
}
