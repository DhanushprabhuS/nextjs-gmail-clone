import '@/styles/globals.css'
import GmailMainLayout from '@/components/GmailMainLayout'

export default function App({ Component, pageProps }) {
  return <GmailMainLayout><Component {...pageProps} /></GmailMainLayout>
}
