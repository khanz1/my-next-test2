import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const themes = {
    dark: '#000000',
    light: '#e3e3e3',
    gray: '#A6A6A6',
    yellow: '#FFC000',
    lightGreen: '#C2D69A',
    lightPink: '#D99795',
    lightBlue: '#93CDDD',
    darkGreen: '#3A5818'
  }

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
        <nav>
          <div />
        </nav>
        <Component {...pageProps} themes={themes} />
      </main>
    </>
  )
}

export default MyApp
