import '../../styles/globals.scss'
import type { AppProps } from 'next/app'
import Image from 'next/image';
import { Card } from '../components/Dashboard/Card'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Card />
      <Component {...pageProps} />
    </>
  ) 
}

export default MyApp
