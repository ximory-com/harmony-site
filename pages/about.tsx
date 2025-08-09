import { useRouter } from 'next/router'
export default function About(){
  const { locale } = useRouter(); const zh = locale==='zh';
  return (<main>
    <h1>{zh?'关于·心沐六和':'About · Heart of Harmony'}</h1>
    <p className="kicker">{zh?'一个面向 AI 时代的人类意识与协作框架。':'A framework of human awareness & collaboration for the AI era.'}</p>
  </main>)
}
