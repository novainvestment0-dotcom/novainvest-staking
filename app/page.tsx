export default function Home() {
  return (
    <main style={{background:'#0a0a0a', color:'white', minHeight:'100vh', padding:'20px', fontFamily:'sans-serif'}}>
      <div style={{maxWidth:'900px', margin:'0 auto'}}>
        <h1 style={{fontSize:'32px', fontWeight:'bold', color:'#22c55e'}}>NOVAINVEST STAKING</h1>
        <p style={{marginTop:'10px', color:'#aaa'}}>Plateforme d'investissement sécurisée - Bénin</p>
        
        <div style={{marginTop:'30px', background:'#171717', padding:'20px', borderRadius:'12px', border:'1px solid #333'}}>
          <h2 style={{fontSize:'20px', fontWeight:'bold'}}>💰 Plans de Staking</h2>
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:'15px', marginTop:'20px'}}>
            <div style={{background:'#000', padding:'15px', borderRadius:'8px', border:'1px solid #22c55e'}}>
              <h3>Starter</h3><p style={{color:'#22c55e', fontSize:'24px'}}>5% / jour</p><p>Min: 5,000 FCFA</p>
            </div>
            <div style={{background:'#000', padding:'15px', borderRadius:'8px', border:'1px solid #22c55e'}}>
              <h3>Pro</h3><p style={{color:'#22c55e', fontSize:'24px'}}>8% / jour</p><p>Min: 50,000 FCFA</p>
            </div>
            <div style={{background:'#000', padding:'15px', borderRadius:'8px', border:'1px solid #22c55e'}}>
              <h3>VIP</h3><p style={{color:'#22c55e', fontSize:'24px'}}>12% / jour</p><p>Min: 200,000 FCFA</p>
            </div>
          </div>
        </div>

        <div style={{marginTop:'30px', background:'#171717', padding:'20px', borderRadius:'12px', border:'1px solid #333'}}>
          <h2>👥 Fondateurs - Contact Direct WhatsApp</h2>
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'15px', marginTop:'15px'}}>
            <a href="https://wa.me/2290160000000" style={{background:'#25D366', color:'white', padding:'15px', borderRadius:'8px', textAlign:'center', textDecoration:'none', fontWeight:'bold'}}>Fondateur 1 - WhatsApp</a>
            <a href="https://wa.me/2290160000001" style={{background:'#25D366', color:'white', padding:'15px', borderRadius:'8px', textAlign:'center', textDecoration:'none', fontWeight:'bold'}}>Fondateur 2 - WhatsApp</a>
          </div>
          <p style={{marginTop:'10px', fontSize:'12px', color:'#666'}}>Remplace les numéros dans le code par vos vrais numéros.</p>
        </div>

        <div style={{marginTop:'30px', textAlign:'center'}}>
          <button style={{background:'#22c55e', color:'black', padding:'15px 30px', borderRadius:'8px', fontWeight:'bold', border:'none', fontSize:'18px'}}>Commencer à Investir</button>
        </div>
      </div>
    </main>
  )
                     }
