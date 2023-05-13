// Next Imports
import Head from 'next/head'
import Script from 'next/script'
// React Imports
import React from 'react'
import { useEffect } from 'react'
// Import CSS
import '../styles/globals.css'
// Import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
// Custom Imports 
import Layout from '../components/layout'

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    import('bootstrap/dist/js/bootstrap');
  }, [])

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
        crossOrigin="anonymous"
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>

  )
}

export default MyApp
