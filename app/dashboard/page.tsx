export default function Dashboard(){
  return (
    <div style={{minHeight:'100vh', background:'#050507', color:'white', padding:'16px'}}>
      <div style={{maxWidth:'1100px', margin:'0 auto'}}>
        <div style={{display:'flex', justifyContent:'space-between'}}><h1 style={{fontSize:'26px', fontWeight:900}}>Tableau de bord</h1><a href="/" style={{fontSize:'12px', color:'#71717a', textDecoration:'none'}}>← Accueil</a></div>
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'12px', marginTop:'20px'}}>
          <div style={{background:'#0F0F10', border:'1px solid #27272a', borderRadius:'16px', padding:'18px'}}><p style={{fontSize:'11px', color:'#71717a'}}>Solde Disponible (RÉEL)</p><p style={{fontSize:'28px', fontWeight:900}}>$0.00</p><span style={{fontSize:'10px', background:'#f59e0b20', color:'#fbbf24', padding:'4px 8px', borderRadius:'999px'}}>En attente paiement</span></div>
          <div style={{background:'#0F0F10', border:'1px solid #27272a', borderRadius:'16px', padding:'18px'}}><p style={{fontSize:'11px', color:'#71717a'}}>Solde Investi</p><p style={{fontSize:'28px', fontWeight:900, color:'#10B981'}}>$0.00</p><p style={{fontSize:'11px', color:'#71717a'}}>P&L Démo: $0.00</p></div>
        </div>
        <div style={{display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:'8px', marginTop:'16px'}}>
          <a href="/deposit" style={{background:'#18181b', border:'1px solid #27272a', borderRadius:'12px', padding:'14px', textAlign:'center', fontWeight:700, fontSize:'13px', textDecoration:'none', color:'white'}}>Dépôt</a>
          <a href="/withdraw" style={{background:'#18181b', border:'1px solid #27272a', borderRadius:'12px', padding:'14px', textAlign:'center', fontWeight:700, fontSize:'13px', textDecoration:'none', color:'white'}}>Retrait</a>
          <a href="/trading" style={{background:'#18181b', border:'1px solid #27272a', borderRadius:'12px', padding:'14px', textAlign:'center', fontWeight:700, fontSize:'13px', textDecoration:'none', color:'white'}}>Trading</a>
          <a href="/copy-trading" style={{background:'#D4AF37', border:'1px solid #D4AF37', borderRadius:'12px', padding:'14px', textAlign:'center', fontWeight:700, fontSize:'13px', textDecoration:'none', color:'black'}}>Copy</a>
        </div>
      </div>
    </div>
  )
                                     }
