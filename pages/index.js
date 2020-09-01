import Link from "next/link";
import Head from "next/head";
import Layout from "../components/Layout";

const Index = () => {
  return (
    <Layout 
      title="Home title" 
      footer={ 'Copyright ' + new Date().getFullYear()}>
      <Head>
        <title>Home Page</title>
        <meta name="description"  content="SEO React NEXT JS app" />
        <meta name="keywords" content="react next seo" />
        <meta name="author" content="Michael Kwon" />
      </Head>
      <p>Hello Next JS</p>
    </Layout>
  )
}

export default Index;