import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Layout } from "../components/layout/Layout";
import Teamwork from "../images/manForAbout.svg";
export default function Home() {
  return (
    <Layout>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-HDPL8YQR19"
      />

      <script
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-HDPL8YQR19', { page_path: window.location.pathname });
            `,
        }}
      />
      <Head>
        <title>About Us</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {/*About */}

      <div className="flex flex-col justify-center items-center p-10 sm:p-0 dark:bg-salafi-black  bg-salafi-grey-white">
        <div className="bg-salafi-grey-white dark:bg-salafi-black sm:w-[40rem] sm:h-[38rem] flex flex-col sm:flex-row justify-center items-center mb-10 sm:mb-20">
          <div className="">
            <h1 className="font-bold text-4xl dark:text-[#FBFAFF]">About Us</h1>
            <p className="sm:w-8/12 mt-6 dark:sm:text-white ">
              TaleHost was founded in early 2022 by Nehar Tale. He founded
              TaleHost, To provide easy setup for website hosting, discord bot
              hosting and Minecraft hosting.
            </p>
          </div>
          <div className="relative w-[12rem] sm:w-[18rem] mt-10 sm:mt-20">
            <Image src={Teamwork}></Image>
          </div>
        </div>
      </div>
    </Layout>
  );
}
