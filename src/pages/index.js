import Head from "next/head";
import Layout from "@/components/Layout/Layout";
import Hero from "@/components/Hero/Hero";

import Content from "@/components/Content/Content";
import ScrollComponent from "@/components/ScrollComponent/ScrollComponent";
import styles from "@/styles/Home.module.css";
import { use, useEffect } from "react";

export default function Home() {
  function handleScrollContainer(event) {
    const container = event.target;
    console.log("triggered");
    // Code to handle the scroll event goes here
    const currentPosition = container.scrollTop;
    console.log(currentPosition);
  }

  function handleClick(event) {
    console.log("clicked", event);
  }

  return (
    <>
      <Head>
        <title>Create Visions, Code Products</title>
      </Head>
      <Layout onScroll={handleScrollContainer}>
        <Hero />
        <Content onClick={handleClick}>
          <article>
            <h1>Challenge the Status Quo</h1>
            <p>
              Digital solutions and consumer-needs evolve, and so should you.
              Over a swift 2-week sprint, we dive deep into your industry,
              identify unmet consumer needs, and craft inventive solutions that
              set you apart. From revolutionary ideas to enhancing existing
              products, we are here to challenge the status quo together and
              drive your success.
            </p>
          </article>
          <article>
            What to Expect:
            <ul>
              <li>
                Fresh Ideas: Harness our creative genius to envision new
                horizons.
              </li>
              <li>Market Insights: Stay ahead with cutting-edge research. </li>
              <li>
                Competitive Edge: Outshine the competition with innovation at
                your core.
              </li>
            </ul>
          </article>
        </Content>
        <Content>
          <h1>Create Prototypes</h1>
        </Content>
        <Content>
          <h1>Code Vision into Reality</h1>
        </Content>

        {/* <ScrollComponent> </ScrollComponent> */}
      </Layout>
    </>
  );
}
