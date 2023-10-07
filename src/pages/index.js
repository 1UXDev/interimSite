import Head from "next/head";
import Layout from "@/components/Layout/Layout";
import Hero from "@/components/Hero/Hero";
import Content from "@/components/Content/Content";
import ScrollComponent from "@/components/ScrollComponent/ScrollComponent";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Visions, Code Products</title>
      </Head>
      <Layout>
        <Hero />
        <Content />
        <ScrollComponent> </ScrollComponent>
      </Layout>
    </>
  );
}
