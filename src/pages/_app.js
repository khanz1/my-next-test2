import '../styles/globals.css'
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  console.log(Component)
  return (
    <>
      <Head>
        <title>My App</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
              integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
              crossOrigin="anonymous"/>
        {/*<link rel="icon" href="/favicon.ico" />*/}
      </Head>
      <main>
        <h1>MY TESTING NEXT DEPLOYMENT</h1>
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default MyApp
