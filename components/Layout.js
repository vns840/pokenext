import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>PokeNext</title>
      </Head>
      <Navbar />
      <main className="main__container">
        {children}
      </main>
      <Footer />
    </>
  )
}