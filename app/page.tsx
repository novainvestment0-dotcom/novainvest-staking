'use client'
export default function Home() {
  return (
    <div style={{minHeight:'100vh', background:'#050507', color:'white', padding:'16px', fontFamily:'sans-serif', display:'flex', justifyContent:'center'}}>
      <div style={{width:'100%', maxWidth:'420px'}}>
        <div style={{textAlign:'center', padding:'32px 0'}}>
          <h1 style={{fontSize:'36px', fontWeight:900, color:'#22c55e'}}>NOVAINVEST<span style={{color:'white'}}>.</span></h1>
          <p style={{color:'#22c55e', fontSize:'13px', marginTop:'8px'}}>Plateforme Crypto Sécurisée - Bénin</p>
        </div>

        <div style={{border:'1px solid #22c55e60', borderRadius:'16px', padding:'16px', background:'#000', marginBottom:'24px'}}>
          <p style={{fontSize:'12px', color:'#9fcaaf'}}>Total Staké</p>
          <p style={{fontSize:'24px', fontWeight:'bold'}}>1,247.58 USDT</p>
          <p style={{fontSize:'12px', color:'#4ade80', marginTop:'8px'}}>Rendement total estimé: +87.42 USDT</p>
        </div>

        <h2 style={{fontSize:'20px', fontWeight:'bold', marginBottom:'16px'}}>Niveaux de Staking</h2>
        
        <div style={{display:'grid', gap:'12px'}}>
          <div style={{border:'1px solid #ffffff10', borderRadius:'16px', padding:'16px', background:'#111'}}>
            <div style={{display:'flex', justifyContent:'space-between'}}>
              <p style={{fontWeight:'bold'}}>Starter</p>
              <p style={{fontSize:'12px', color:'#9ca3af'}}>Min 10 USDT</p>
            </div>
            <p style={{fontSize:'24px', font
