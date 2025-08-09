import type { Harmony } from '../data/harmonies'
export default function HarmonyCard({ h }:{h:Harmony}){
  return (<div className="card">
    <div style={{display:'flex',alignItems:'center',gap:8}}>
      <div style={{fontSize:24}}>{h.icon}</div>
      <h3 style={{margin:0}}>{h.name}</h3>
    </div>
    <div className="dim">{h.dimension}</div>
    <div className="kicker"><b>{h.state}</b></div>
    <div className="small"><b>路径</b>：{h.path}</div>
    <blockquote>{h.mantra}</blockquote>
    <div className="small">{h.desc}</div>
  </div>)
}
