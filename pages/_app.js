import '@/styles/globals.css'
import { SessionProvider } from "next-auth/react"
import { authOptions } from './api/auth/[...nextauth]'

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}