import { useRouter } from 'next/router'
import { getHarmonies } from '../data/harmonies'
export default function TableView(){
  const { locale } = useRouter(); const items = getHarmonies((locale as any)||'zh'); const zh = locale==='zh';
  return (<main>
    <h1>{zh ? '六和·表格视图' : 'Six Harmonies · Table View'}</h1>
    <table className="table">
      <thead>
        <tr>
          <th>{zh?'图标':'Icon'}</th>
          <th>{zh?'名称':'Name'}</th>
          <th>{zh?'维度':'Dimension'}</th>
          <th>{zh?'境界':'State'}</th>
          <th>{zh?'路径':'Path'}</th>
        </tr>
      </thead>
      <tbody>
        {items.map(h => (<>
          <tr key={h.key}>
            <td style={{textAlign:'center'}}>{h.icon}</td>
            <td>{h.name}</td>
            <td>{h.dimension}</td>
            <td>{h.state}</td>
            <td>{h.path}</td>
          </tr>
          <tr><td colSpan={5} className="fullrow"><b>{zh?'心语':'Mantra'}</b>：{h.mantra}</td></tr>
          <tr><td colSpan={5} className="fullrow"><b>{zh?'描述':'Description'}</b>：{h.desc}</td></tr>
        </>))}
      </tbody>
    </table>
  </main>)
}
