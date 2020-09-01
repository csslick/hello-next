import Link from "next/link";
import Head from "next/head";
import Nav from '../components/Nav';

const myStyle = {
  color: 'red',
  border: '1px solid black',
  padding: '10px'
}
const Index = () => {
  return (
    <>
      <Head>
        {/* 검색 엔진 최적화 */}
        <title>Home Page</title>
        <meta name="description"  content="SEO React NEXT JS app" />
        <meta name="keywords" content="react next seo" />
        <meta name="author" content="Michael Kwon" />
      </Head>
      <h1>Hello Next JS</h1>
      <Nav />

      <style jsx>
        {`
          h1 { color: red;}
          p { color: green;}
        `}
      </style>
    </>
  )
}

export default Index;