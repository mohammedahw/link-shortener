import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import Clipboard from "react-clipboard.js";
import { FiCopy } from "react-icons/fi";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const [url, setUrl] = useState("");
  const [generatedLink, setGeneratedLink] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const validateInput = (input: string) => {
    return input.match(
      /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
    );
  };

  const handleShorten = async () => {
    if (!url) return;
    if (!validateInput(url)) return toast.error("Invalid URL");
    if (url) setLoading(true);
    toast.loading("Generating link...");
    const { data } = await axios.post("/api/links", { url: url });
    if (!data) {
      toast.error("Something went wrong");
    }
    setGeneratedLink(data.link);
    setLoading(false);
    toast.dismiss();
    toast.success("Link generated!");
  };

  return (
    <div>
      <Head>
        <title>Link Shortener</title>
      </Head>
      <header className="flex justify-around mt-16 text-xl items-center">
        <div>Link Shortener</div>
      </header>
      <ToastContainer position="bottom-center" />
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center mt-32">
        <section className="flex flex-col">
          <div>
            <input
              type="text"
              className="border-2 rounded mr-2 w-80 p-2"
              placeholder="Paste your link here"
              onChange={(e) => setUrl(e.target.value)}
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
          {generatedLink && (
            <div className="mt-16 flex flex-col items-center">
              <span>Your link is ready!</span>
              <div className="flex mt-2">
                <input
                  type="text"
                  className="border-2 rounded w-80 p-2 mr-2"
                  readOnly
                  value={generatedLink}
                />
                <Clipboard data-clipboard-text={generatedLink}>
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
      </main>
    </div>
  );
};

export default Home;
