import Head from 'next/head'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()
  useEffect(()=>{
    router.push('/web/demo')
  })
  return (
    <>
      <Head>
        <title>Agora docs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
    </>
  )
}
