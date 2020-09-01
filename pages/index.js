import Link from "next/link";
import Head from "next/head";
import Layout from "../components/Layout";

const Index = () => {
  return (
    <Layout>
      <Head>
        <title>Home Page</title>
        <meta name="description"  content="SEO React NEXT JS app" />
        <meta name="keywords" content="react next seo" />
        <meta name="author" content="Michael Kwon" />
      </Head>
      <h1>Hello Next JS</h1>
    </Layout>
  )
}

export default Index;