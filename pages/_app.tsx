import Layout from "@/components/layout/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import ExploreLayout from "../layouts/ExploreLayout";

export default function App({ Component, pageProps, ...appProps }: AppProps) {
  if ([`/login`].includes(appProps.router.pathname))
    return <Component {...pageProps} />;

  // if ([`/explore`].includes(appProps.router.pathname))
  //   return (
  //     <Layout>
  //       <ExploreLayout>
  //         <Component {...pageProps} />
  //       </ExploreLayout>
  //     </Layout>
  //   );

  return (
    <>
      <Head>
        <title>SpaceX | Daily</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
