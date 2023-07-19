import './globals.css'
import Navigation from './components/navigation/Navigation'

export default function RootLayout ({ children }) {
  return (
    <html>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
