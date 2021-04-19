import Head from 'next/head';
import Link from 'next/link';

export default function Home() {

  return (
    <>
      <Head>
        <title>Create Next App</title>
        {/*<link rel="icon" href="/favicon.ico" />*/}
      </Head>

      <main style={{backgroundColor: '#000000'}}>
        <div style={{minHeight: '10vh'}} className="d-flex align-items-center justify-content-end">
          <div className="d-flex justify-content-around w-50">
            <Link href={{pathname: "/home"}}>
              <a className="text-decoration-none text-light">Home</a>
            </Link>
            <Link href={{pathname:"/portofolio"}} className="text-decoration-none text-light">
              <a className="text-decoration-none text-light">Portofolio</a>
            </Link>
            <Link href={{pathname: "/transaction"}} className="text-decoration-none text-light">
              <a className="text-decoration-none text-light">Transaction</a>
            </Link>
          </div>
        </div>
        <div style={{minHeight: '90vh'}} className="d-flex justify-content-center align-items-center text-light">
          <h1>LANDING PAGE</h1>
        </div>
      </main>
    </>
  )
}
