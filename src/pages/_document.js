import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className='dark:bg-[#0d1117] w-screen overflow-x-hidden bg-blue-gray-50'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
