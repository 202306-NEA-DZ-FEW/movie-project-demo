import Navbar from "@/component/Navbar/Navbar"
import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body style={{ margin: "0" }}>
        <Navbar />

        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
