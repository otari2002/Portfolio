import Head from "next/head";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>
      <section>
        <h1>Home Page</h1>
        <section id="contact">
          <h3 className="section-title">Contact ME</h3>
        </section>
      </section>
    </>
  );
}