'use client'
export default function Home(){
  return (
    <main style={{minHeight:'100vh', background:'#050507'}}>
      <nav style={{display:'flex', justifyContent:'space-between', alignItems:'center', padding:'20px', maxWidth:'1200px', margin:'0 auto'}}>
        <h1 style={{fontWeight:900, fontSize:'22px'}}>NOVAINVEST<span style={{color:'#D4AF37'}}>.</span></h1>
        <a href="/dashboard" style={{background:'white', color:'black', padding:'10px 18px', borderRadius:'999px', fontSize:'13px', fontWeight:800, textDecoration:'none'}}>Dashboard</a>
      </nav>
      <section style={{textAlign:'center', padding:'60px 20px 30px'}}>
        <span style={{border:'1px solid #D4AF3730', background:'#D4AF3715', color:'#D4AF37', padding:'6px 14px', borderRadius:'999px', fontSize:'11px'}}>FOND NOIR • OR • VERT ÉMERAUDE</span>
        <h2 style={{fontSize:'52px', fontWeight:900, lineHeight:'0.95', marginTop:'24px'}}>Trading<br/>Automatique<br/><span style={{color:'#D4AF37'}}>Institutionnel.</span></h2>
        <p style={{color:'#a1a1aa', maxWidth:'480px', margin:'18px auto', fontSize:'15px'}}>Créez un compte, déposez, copiez des traders vérifiés. Solde démo séparé du réel. Dépôts confirmés par blockchain uniquement.</p>
        <div style={{display:'flex', gap:'12px', justifyContent:'center', marginTop:'28px'}}>
          <a href="/dashboard" style={{background:'#D4AF37', color:'black', padding:'16px 28px', borderRadius:'14px', fontWeight:900, textDecoration:'none'}}>Commencer (Démo)</a>
          <a href="/copy-trading" style={{border:'1px solid #27272a', background:'#0F0F10', padding:'16px 28px', borderRadius:'14px', fontWeight:700, textDecoration:'none', color:'white'}}>Voir Traders</a>
        </div>
      </section>
      <section style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(280px, 1fr))', gap:'14px', maxWidth:'1100px', margin:'20px auto', padding:'0 20px'}}>
        <div style={{background:'#0F0F10', border:'1px solid #27272a', borderRadius:'20px', padding:'22px'}}><p style={{fontSize:'11px', color:'#71717a'}}>SOLDE DISPONIBLE</p><p style={{fontSize:'26px', fontWeight:800, marginTop:'8px'}}>$0.00 RÉEL</p><p style={{fontSize:'11px', color:'#10B981', marginTop:'6px'}}>● Séparé du démo</p></div>
        <div style={{background:'#0F0F10', border:'1px solid #27272a', borderRadius:'20px', padding:'22px'}}><p style={{fontSize:'11px', color:'#71717a'}}>SOLDE INVESTI</p><p style={{fontSize:'26px', fontWeight:800, marginTop:'8px'}}>$0.00</p><p style={{fontSize:'11px', color:'#71717a', marginTop:'6px'}}>Aucune allocation</p></div>
        <div style={{background:'#0F0F10', border:'1px solid #27272a', borderRadius:'20px', padding:'22px'}}><p style={{fontSize:'11px', color:'#71717a'}}>COPY TRADING</p><p style={{fontSize:'26px', fontWeight:800, marginTop:'8px'}}>3 Traders</p><p style={{fontSize:'11px', color:'#D4AF37', marginTop:'6px'}}>Données vérifiables</p></div>
      </section>
      <footer style={{textAlign:'center', padding:'40px', color:'#52525b', fontSize:'11px'}}>© 2026 NOVAINVEST - Conformité requise avant ouverture publique</footer>
    </main>
  )
}
