import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Link-Shortener</title>
      </Head>
      <div className="flex justify-center items-center h-screen text-3xl text-red-600">
        Hello World!
      </div>
    </div>
  );
};

export default Home;
