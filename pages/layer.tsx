"use client";
import Image from "next/image";
import LayerHeader from "../components/shared/layerheader";
import Footer from "../components/layer/footer";
import About from "../components/layer/about";
import ninenine from "../public/99.png";
import text from "../public/layertext.png";
import ship from "../public/ship.png";
import prize from "../public/Frame 147.svg";
import Link from "next/link";
import { useEffect, useState } from "react";
import { RiseLoader } from "react-spinners";
import Judges from "../components/judges/judges";
import Partners from "../components/layer/partners";
import Tracks from "../components/layer/tracks";

export default function Layer() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="">
      {loading ? (
        <div
          className={`h-screen bg-dark-purple flex justify-center items-center transition-all duration-200 ease-out ${
            loading ? "opacity-100" : "opacity-0"
          }`}
        >
          <RiseLoader color="#00D1FF" />
        </div>
      ) : (
        <>
          <div className="min-h-screen bg-cover bg-[url(/layerbg.png)]">
            <LayerHeader />
            <div className="main flex flex-col">
              <Image
                alt="layer"
                loading="eager"
                src={text}
                className="self-center mt-16 xl:w-auto w-80"
              />
              <Image
                loading="eager"
                alt="ship"
                src={ship}
                className=" xl:block absolute  top-[22rem] -left-3 w-[82rem] hidden"
              />
              <Image
                loading="eager"
                alt="99"
                src={ninenine}
                className=" self-center mt-[40rem] xl:w-auto w-96 "
              />
              <div className="buttons flex flex-col md:flex-row mt-16 self-center gap-14 mb-72 ">
                <Link href="https://layer-2.devfolio.co/">
                  {" "}
                  <h1 className="bg-[#849fa2] hover:scale-110 transition-transform h-16 backdrop-blur-sm w-72 text-center p-4 rounded-full bg-opacity-50 tracking-[3.38px] border-2 border-[#d2cccc] font-Montserrat text-white text-lg ">
                    Devfolio
                  </h1>{" "}
                </Link>
                <Link href="https://layer-2.devfolio.co/">
                  {" "}
                  <h1 className="bg-black h-16 hover:scale-110 transition-transform backdrop-blur-sm w-72 text-center p-4 rounded-full bg-opacity-30 tracking-[3.38px] border-2 border-[#d2cccc] font-Montserrat text-white text-lg ">
                    Learn More
                  </h1>{" "}
                </Link>
              </div>
            </div>
          </div>
          {/* <About /> */}
          <Tracks />

          <Image
            loading="eager"
            alt="prizes"
            src={prize}
            layout="responsive"
            width={1180}
            height={752}
            style={{
              backgroundColor: "rgba(11, 15, 24, 1)",
            }}
          />
          <div className="test">
            <Partners />
          </div>
          <Judges />
          <Footer />
        </>
      )}
    </div>
  );
}
