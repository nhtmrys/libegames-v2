import '../styles/globals.css'
import Layout from "../components/layout";
import {useRouter} from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return <Layout router={router}>
    <Component {...pageProps} />
  </Layout>

}

export default MyApp
