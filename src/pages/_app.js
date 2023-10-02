import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* <GlobalStyle /> */}
      <Component {...pageProps} />
    </>
  );
}
