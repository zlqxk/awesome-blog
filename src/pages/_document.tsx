import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name='keywords' content='前端,react,babel,ts,typescript,学习记录' />
          <meta
            name='description'
            content='学习和分享工作生活中遇到的问题，记录前沿的技术，分享技术文章。'
          />
          <meta
            name='google-site-verification'
            content='s-VsAQCdV_MrjX9LC-rvr6SZ-MYSM4y1vVMJ9Fw7Oxo'
          />
        </Head>
        <script async src='//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js'></script>
        <body className='dark'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
