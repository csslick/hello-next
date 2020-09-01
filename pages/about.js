import Link from "next/link"
import Head from "next/head";
import Layout from "../components/Layout";

function About() {
  return (
    <Layout title="About">
      <Head>
        <title>About Page</title>
      </Head>
      <p>this is about page</p>
    </Layout>
  )
}

export default About;