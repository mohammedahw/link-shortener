import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import Header from "../components/Header";
import UserHistory from "../components/UserHistory";

const Home: NextPage = () => {
  const handleShorten = (e: any) => {
    e.preventDefault();
    console.log("Shorten");
  };

  return (
    <div>
      <Head>
        <title>Link Shortener</title>
      </Head>
      <Header />
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center mt-32">
        <section>
          <input
            type="text"
            className="border-2 rounded mr-2 w-80 p-1"
            placeholder="Paste your link here"
          />
          <button
            className="border bg-slate-600 hover:bg-slate-700 text-white p-1 rounded"
            onClick={(e) => handleShorten(e)}
          >
            Shorten
          </button>
        </section>
        <section className="mt-32">
          <UserHistory />
        </section>
      </main>
    </div>
  );
};

export default Home;
