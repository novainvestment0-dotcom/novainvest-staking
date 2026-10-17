export default function CopyTrading(){
  const traders = [
    {name:"Alpha Gold", win:"72%", dd:"8.2%", followers:1240, color:"#D4AF37"},
    {name:"Emerald Forex", win:"68%", dd:"12.1%", followers:890, color:"#10B981"},
    {name:"Bénin Scalper", win:"65%", dd:"6.5%", followers:560, color:"#3b82f6"},
  ]
  return (
    <div style={{minHeight:'100vh', background:'#050507', color:'white', padding:'16px'}}>
      <div style={{maxWidth:'1100px', margin:'0 auto'}}>
        <a href="/" style={{fontSize:'12px', color:'#71717a', textDecoration:'none'}}>← Accueil</a>
        <h1 style={{fontSize:'28px', fontWeight:900, marginTop:'12px'}}>Copy Trading <span style={{color:'#D4AF37'}}>Vérifié</span></h1>
        <p style={{color:'#71717a', fontSize:'13px'}}>Données simulées en mode DÉMO. Pas de copie réelle sans courtier.</p>
        <div style={{display:'grid', gap:'12px', marginTop:'20px'}}>
          {traders.map(t=>(
            <div key={t.name} style={{background:'#0F0F10', border:'1px solid #27272a', borderRadius:'16px', padding:'18px', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
              <div><p style={{fontWeight:800}}>{t.name}</p><p style={{fontSize:'12px', color:'#71717a'}}>Win {t.win} • DD {t.dd} • {t.followers} followers</p></div>
              <button style={{background:t.color, color:'black', border:'none', padding:'10px 18px', borderRadius:'999px', fontWeight:800, fontSize:'12px'}}>Copier (Démo)</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
