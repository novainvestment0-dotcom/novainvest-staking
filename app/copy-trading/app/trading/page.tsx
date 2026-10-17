export default function Trading(){
  return (
    <div style={{minHeight:'100vh', background:'#050507', color:'white', padding:'16px'}}>
      <div style={{maxWidth:'1100px', margin:'0 auto'}}>
        <a href="/" style={{fontSize:'12px', color:'#71717a', textDecoration:'none'}}>← Accueil</a>
        <h1 style={{fontSize:'28px', fontWeight:900, marginTop:'12px'}}>Trading Terminal <span style={{color:'#10B981'}}>DÉMO</span></h1>
        <div style={{background:'#0F0F10', border:'1px solid #27272a', borderRadius:'16px', padding:'0', marginTop:'20px', overflow:'hidden'}}>
          <div style={{background:'#18181b', padding:'12px 16px', display:'flex', justifyContent:'space-between'}}><span style={{fontSize:'12px', fontWeight:700}}>XAU/USD • GOLD</span><span style={{fontSize:'12px', color:'#10B981'}}>↑ 2,045.30 (+0.45%)</span></div>
          <div style={{height:'260px', display:'flex', alignItems:'center', justifyContent:'center', color:'#3f3f46', fontSize:'13px'}}>Graphique TradingView à intégrer (nécessite clé API courtier)</div>
        </div>
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'12px', marginTop:'12px'}}>
          <button style={{background:'#10B981', color:'black', padding:'16px', borderRadius:'12px', fontWeight:900, border:'none'}}>ACHAT Démo</button>
          <button style={{background:'#ef4444', color:'white', padding:'16px', borderRadius:'12px', fontWeight:900, border:'none'}}>VENTE Démo</button>
        </div>
        <p style={{textAlign:'center', color:'#52525b', fontSize:'10px', marginTop:'14px'}}>Ordres simulés. Aucune exécution réelle.</p>
      </div>
    </div>
  )
}
