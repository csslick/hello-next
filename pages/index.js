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
      </Head>
      <p>Hello Next JS</p>
    </Layout>
  )
}

export default Index;