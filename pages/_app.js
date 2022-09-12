import '../styles/globals.css'
import Layout from "../components/layout";
import {useRouter} from "next/router";
import {withTranslateRoutes} from "next-translate-routes";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return <Layout router={router}>
    <Component {...pageProps} />
  </Layout>

}

export default withTranslateRoutes(MyApp)
