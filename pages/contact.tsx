import { useRouter } from 'next/router'
export default function Contact(){
  const { locale } = useRouter(); const zh = locale==='zh';
  return (<main>
    <h1>{zh?'联系与社群':'Contact & Community'}</h1>
    <p className="kicker">{zh?'可在此放邮箱、社群二维码或订阅链接。':'Put email, community QR, or subscription links here.'}</p>
  </main>)
}
