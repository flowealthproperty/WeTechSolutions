 import Header from '@/components/headers/Header'
import './globals.css'

 
export const metadata = {
  title: 'WeTech Soluton',
  description: 'a digital marketing company',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Header/>
      {children}
      </body>
    </html>
  )
}
