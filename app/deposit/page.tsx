'use client'
import { useState } from 'react'
export default function Deposit(){
  const [step, setStep] = useState(1)
  return (
    <div style={{minHeight:'100vh', background:'#050507', color:'white', padding:'16px'}}>
      <div style={{maxWidth:'500px', margin:'0 auto'}}>
        <a href="/dashboard" style={{fontSize:'12px', color:'#71717a', textDecoration:'none'}}>← Dashboard</a>
        <h1 style={{fontSize:'26px', fontWeight:900, marginTop:'12px'}}>Dépôt Sécurisé</h1>
        <p style={{fontSize:'12px', color:'#fbbf24', background:'#f59e0b15', padding:'10px', borderRadius:'10px', marginTop:'10px'}}>MODE DÉMO: Aucun paiement réel. L'adresse affichée sera votre adresse de dépôt unique par utilisateur en production.</p>
        
        {step===1 && (
          <div style={{marginTop:'20px'}}>
            <label style={{fontSize:'12px', color:'#71717a'}}>Montant (USDT)</label>
            <input type="number" placeholder="100" style={{width:'100%', background:'#0F0F10', border:'1px solid #27272a', padding:'14px', borderRadius:'12px', color:'white', marginTop:'6px'}}/>
            <button onClick={()=>setStep(2)} style={{width:'100%', background:'#D4AF37', color:'black', padding:'14px', borderRadius:'12px', fontWeight:900, border:'none', marginTop:'16px'}}>Générer adresse de dépôt (Démo)</button>
          </div>
        )}
        {step===2 && (
          <div style={{background:'#0F0F10', border:'1px solid #27272a', borderRadius:'16px', padding:'18px', marginTop:'20px', textAlign:'center'}}>
            <p style={{fontSize:'12px', color:'#71717a'}}>Envoyez uniquement USDT TRC20</p>
            <div style={{background:'white', width:'160px', height:'160px', margin:'16px auto', borderRadius:'12px', display:'flex', alignItems:'center', justifyContent:'center', color:'black', fontSize:'10px'}}>QR CODE ICI</div>
            <p style={{fontFamily:'monospace', fontSize:'11px', wordBreak:'break-all', background:'#18181b', padding:'10px', borderRadius:'8px'}}>TQn9Y2...DemoAddress...9a8b7c</p>
            <p style={{fontSize:'11px', color:'#10B981', marginTop:'12px'}}>● En attente de confirmation blockchain (DÉMO)</p>
            <button onClick={()=>setStep(1)} style={{marginTop:'12px', background:'transparent', border:'none', color:'#71717a', fontSize:'12px'}}>← Retour</button>
          </div>
        )}
      </div>
    </div>
  )
}
