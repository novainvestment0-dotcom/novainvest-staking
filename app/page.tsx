'use client'
export default function Home() {
  return (
    <div style={{minHeight:'100vh',background:'#0a0a0a',color:'white',padding:'16px',display:'flex',justifyContent:'center'}}>
      <div style={{width:'100%',maxWidth:'420px'}}>
        <div style={{textAlign:'center',padding:'32px 0'}}>
          <h1 style={{fontSize:'36px',fontWeight:900,color:'#22c55e'}}>NOVAINVEST</h1>
          <p style={{color:'#9ca3af',fontSize:'13px',marginTop:'8px'}}>Plateforme Crypto Sécurisée - Bénin</p>
        </div>

        <div style={{border:'1px solid #22c55e40',borderRadius:'16px',padding:'16px',background:'#000',marginBottom:'24px'}}>
          <p style={{fontSize:'12px',color:'#9ca3af'}}>Total Staké</p>
          <p style={{fontSize:'24px',fontWeight:'bold'}}>1,247.58 USDT</p>
          <p style={{fontSize:'12px',color:'#4ade80',marginTop:'8px'}}>Rendement total estimé: ~87.42 USDT</p>
        </div>

        <h2 style={{fontSize:'20px',fontWeight:'bold',marginBottom:'16px'}}>Niveaux de Staking</h2>

        <div style={{border:'1px solid #ffffff1a',borderRadius:'16px',padding:'16px',marginBottom:'12px',display:'flex',justifyContent:'space-between',background:'#ffffff08'}}>
          <div><p style={{fontWeight:'bold'}}>Starter</p><p style={{fontSize:'12px',color:'#9ca3af'}}>Min 10 USDT</p></div>
          <span style={{background:'#4ade80',color:'black',fontWeight:'bold',padding:'6px 12px',borderRadius:'10px',fontSize:'13px'}}>5% APY</span>
        </div>

        <div style={{border:'1px solid #ffffff1a',borderRadius:'16px',padding:'16px',marginBottom:'12px',display:'flex',justifyContent:'space-between',background:'#ffffff08'}}>
          <div><p style={{fontWeight:'bold'}}>Pro</p><p style={{fontSize:'12px',color:'#9ca3af'}}>Min 100 USDT</p></div>
          <span style={{background:'#4ade80',color:'black',fontWeight:'bold',padding:'6px 12px',borderRadius:'10px',fontSize:'13px'}}>8% APY</span>
        </div>

        <div style={{border:'1px solid #ffffff1a',borderRadius:'16px',padding:'16px',marginBottom:'12px',display:'flex',justifyContent:'space-between',background:'#ffffff08'}}>
          <div><p style={{fontWeight:'bold'}}>VIP</p><p style={{fontSize:'12px',color:'#9ca3af'}}>Min 500 USDT</p></div>
          <span style={{background:'#4ade80',color:'black',fontWeight:'bold',padding:'6px 12px',borderRadius:'10px',fontSize:'13px'}}>12% APY</span>
        </div>

        <h2 style={{fontSize:'20px',fontWeight:'bold',margin:'24px 0 16px'}}>Options de Dépôt</h2>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:'12px',marginBottom:'24px'}}>
          <div style={{border:'1px solid #22c55e60',borderRadius:'12px',padding:'12px',textAlign:'center'}}><p style={{fontWeight:'bold'}}>USDT</p><p style={{fontSize:'10px',color:'#9ca3af'}}>TRC20 BEP20</p></div>
          <div style={{border:'1px solid #22c55e60',borderRadius:'12px',padding:'12px',textAlign:'center'}}><p style={{fontWeight:'bold'}}>Bitcoin</p><p style={{fontSize:'10px',color:'#9ca3af'}}>BTC</p></div>
          <div style={{border:'1px solid #22c55e60',borderRadius:'12px',padding:'12px',textAlign:'center'}}><p style={{fontWeight:'bold'}}>Ethereum</p><p style={{fontSize:'10px',color:'#9ca3af'}}>ETH</p></div>
        </div>

        <button style={{width:'100%',background:'#22c55e',color:'black',fontWeight:900,padding:'16px',borderRadius:'16px',fontSize:'18px'}}>Commencer</button>
        <p style={{fontSize:'11px',color:'#fbbf2440',marginTop:'16px',lineHeight:'1.4'}}>Investissement crypto: risque de perte. Rendements variables selon marché.</p>
      </div>
    </div>
  )
      }
