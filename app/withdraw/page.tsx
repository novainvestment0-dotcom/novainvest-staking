export default function Withdraw(){
  return (
    <div style={{minHeight:'100vh', background:'#050507', color:'white', padding:'16px'}}>
      <div style={{maxWidth:'500px', margin:'0 auto'}}>
        <a href="/dashboard" style={{fontSize:'12px', color:'#71717a', textDecoration:'none'}}>← Dashboard</a>
        <h1 style={{fontSize:'26px', fontWeight:900, marginTop:'12px'}}>Retrait</h1>
        <div style={{background:'#0F0F10', border:'1px solid #27272a', borderRadius:'16px', padding:'18px', marginTop:'20px'}}>
          <p style={{fontSize:'11px', color:'#71717a'}}>SOLDE RÉEL DISPONIBLE</p>
          <p style={{fontSize:'24px', fontWeight:900}}>$0.00</p>
          <div style={{marginTop:'16px'}}>
            <label style={{fontSize:'12px', color:'#71717a'}}>Adresse USDT TRC20</label>
            <input placeholder="T..." style={{width:'100%', background:'#18181b', border:'1px solid #27272a', padding:'12px', borderRadius:'10px', color:'white', marginTop:'6px'}}/>
          </div>
          <div style={{marginTop:'12px'}}>
            <label style={{fontSize:'12px', color:'#71717a'}}>Montant</label>
            <input type="number" placeholder="50" style={{width:'100%', background:'#18181b', border:'1px solid #27272a', padding:'12px', borderRadius:'10px', color:'white', marginTop:'6px'}}/>
            <p style={{fontSize:'10px', color:'#71717a', marginTop:'6px'}}>Frais réseau : 1 USDT • Min 20 USDT • KYC requis en production</p>
          </div>
          <button style={{width:'100%', background:'#27272a', color:'#71717a', padding:'14px', borderRadius:'12px', fontWeight:900, border:'none', marginTop:'16px'}}>Demande de retrait (Démo - Désactivé)</button>
        </div>
        <p style={{fontSize:'10px', color:'#52525b', textAlign:'center', marginTop:'16px'}}>En production : retrait manuel validé après vérification + confirmation email/SMS + limite journalière.</p>
      </div>
    </div>
  )
      }
