export const metadata = {
  title: 'NOVAINVEST STAKING',
  description: 'Plateforme staking Bénin',
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body style={{margin:0}}>{children}</body>
    </html>
  )
}
