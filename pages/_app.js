import '../styles/globals.css'
import Layout from "./components/Layout"
import axios from "axios"

function CustomApp({ Component, pageProps, number }) {
  // DOM return
  return (
    <Layout number={number}>
      <Component {...pageProps} />
    </Layout>
  );
}

// Gets random number from partner's microservice to select background image on page render.
CustomApp.getInitialProps = async () => {
  const response = await axios.get("https://testmicro.vercel.app/");
  let number = await response.data;
  number = number % 10;
  return { number: number }
}

export default CustomApp