import { SessionProvider } from 'next-auth/react'
import type { AppProps } from 'next/app'
import { ErrorBoundary } from '@/components'
import '../styles/globals.css'

export default function App({
  Component,
  pageProps: { session, ...pageProps }
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <ErrorBoundary>
        <Component {...pageProps} />
      </ErrorBoundary>
    </SessionProvider>
  )
}