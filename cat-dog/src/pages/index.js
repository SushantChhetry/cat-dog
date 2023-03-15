import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Young Alumni Weekend</title>
        <meta
          name="description"
          content="Website for the Young Alumni Weekend"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Nav />
        <div className="body-wrapper">
          <div className="body"></div>
          <div className="button-wrapper">
            <button className="bodybtn">Events</button>
            <button className="bodybtn">RSVP</button>
            <button className="bodybtn">Donate</button>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
