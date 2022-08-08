import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import Header from "../components/Header";
import UserHistory from "../components/UserHistory";
import Clipboard from "react-clipboard.js";
import { FiCopy } from "react-icons/fi";
import { ToastContainer, toast } from "react-toastify";

const Home: NextPage = () => {
  const [link, setLink] = useState("");
  const [loading, setLoading] = useState(false);

  const handleShorten = () => {
    setLoading(true);
  };

  return (
    <div>
      <Head>
        <title>Link Shortener</title>
      </Head>
      <Header />
      <ToastContainer position="bottom-center" />
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center mt-32">
        <section className="flex flex-col">
          <div>
            <input
              type="text"
              className="border-2 rounded mr-2 w-80 p-2"
              placeholder="Paste your link here"
            />
            <button
              className={`bg-slate-600 hover:bg-slate-700 text-white py-2 px-4 rounded font-bold ${
                loading
                  ? "bg-slate-200 text-black hover:cursor-default hover:bg-slate-200"
                  : ""
              }`}
              onClick={handleShorten}
              disabled={loading}
            >
              Shorten
            </button>
          </div>
          {link && (
            <div className="mt-16 flex flex-col items-center">
              <span>Your link is ready!</span>
              <div className="flex mt-2">
                <input
                  type="text"
                  className="border-2 rounded w-80 p-2 mr-2"
                  readOnly
                  value={link}
                />
                <Clipboard data-clipboard-text={link}>
                  <FiCopy
                    onClick={() =>
                      toast("Copied to clipboard!", { type: "info" })
                    }
                    size={"30"}
                  />
                </Clipboard>
              </div>
            </div>
          )}
        </section>
        <section className="mt-32">
          <UserHistory />
        </section>
      </main>
    </div>
  );
};

export default Home;
