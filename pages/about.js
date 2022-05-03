import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Layout } from "../components/layout/Layout";
// import Teamwork from "../images/teamwork.png";
export default function Home() {
  return (
    <Layout>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-2JYXB6HX49"
      />

      <script
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '[Tracking ID]', { page_path: window.location.pathname });
            `,
        }}
      />
      <Head>
        <title>About Us</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {/*About */}

      <div className="flex flex-col justify-center items-center p-10 sm:py-10 sm:px-80 bg-[#FBFAFF]">
        <div className="bg-[#F9FBFF] sm:w-[40rem] sm:h-[38rem] ">
          <div className="pl-[1rem] sm:pt-[4rem] pt-[1rem] sm:pl-[4rem]">
            <h1 className="text-[#6752E0] font-bold text-4xl ">About Us</h1>
            <p className="sm:w-8/12 mt-6 ">
            Salafi Hosting was founded in early 2022 by Nehar Tale. He founded Salafi Hosting, To provide easy setup for website hosting, discord bot hosting and Minecraft hosting.
            </p>
           
          </div>
          <div className="relative w-[12rem] sm:w-[18rem] mx-auto mt-10 sm:mt-20">
            {/* <Image src={Teamwork}></Image> */}
          </div>
        </div>
      </div>
    </Layout>
  );
}
