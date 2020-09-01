import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {

  // 모든 문서에 반영되는 셋업(수정 후 서버 재실행 필요)
  render() {
    return (
      <Html lang="ko">
        <Head>
          <meta charSet="utf-8" />
          <meta name="description"  content="SEO React NEXT JS app" />
          <meta name="keywords" content="react next seo" />
          <meta name="author" content="Michael Kwon" />
          <link rel="stylesheet" href="https://unpkg.com/bootstrap-material-design@4.1.1/dist/css/bootstrap-material-design.min.css" integrity="sha384-wXznGJNEXNG1NFsbm0ugrLFMQPWswR3lds2VeinahP8N0zJw9VWSopbjv2x7WCvX" crossorigin="anonymous"></link>
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument