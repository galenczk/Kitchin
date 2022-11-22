import '../styles/globals.css'
import Layout from "./components/Layout"
import axios from "axios"

function MyApp({ Component, pageProps, number }) {
  return (
  <Layout number={number}>
    <Component {...pageProps} />
  </Layout>
)}

MyApp.getInitialProps = async () => {
  const response = await axios.get("https://testmicro.vercel.app/");
  let number = await response.data;
  number = number % 10;
  return { number: number }
}

export default MyApp