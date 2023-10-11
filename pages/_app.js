import '@/styles/globals.css'
import GmailMainLayout from '@/components/GmailLayout'

export default function App({ Component, pageProps }) {
  return <GmailMainLayout><Component {...pageProps} /></GmailMainLayout>
}
