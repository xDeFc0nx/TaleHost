import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Layout } from "../components/layout/Layout";
import Envolpe from "../images/support.svg";
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
        <title>Contact Us</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {/*About */}

      <div className="flex flex-col justify-center items-center p-10 sm:py-10 sm:px-80 bg-[#FBFAFF]">
        <div className="bg-[#F9FBFF] sm:w-[40rem] sm:h-[38rem] ">
          <div className="pl-[1rem] sm:pt-[4rem] pt-[1rem] sm:pl-[4rem]">
            <h1 className="text-[#6752E0] font-bold text-4xl ">Contact Us</h1>
            <ul className="mt-6 space-y-2">
              <li className="flex flex-col  sm:flex-row items-center">
                <h6 className="mr-8 font-medium  flex w-40">
                  <svg
                    className="mr-2"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.69 12.06C12.5062 12.2258 12.2675 12.3176 12.02 12.3176C11.7725 12.3176 11.5337 12.2258 11.35 12.06L2.87 4.35C3.20275 4.12206 3.59665 4.00005 4 4H20C20.4033 4.00005 20.7972 4.12206 21.13 4.35L12.69 12.06Z"
                      fill="black"
                    />
                    <path
                      d="M22 6.26001V17C22 17.7957 21.6839 18.5587 21.1213 19.1213C20.5587 19.6839 19.7956 20 19 20H5C4.20435 20 3.44129 19.6839 2.87868 19.1213C2.31607 18.5587 2 17.7957 2 17V6.26001L10.68 14.18C11.0461 14.4979 11.5152 14.6721 12 14.67C12.4909 14.669 12.9643 14.4875 13.33 14.16L22 6.26001Z"
                      fill="black"
                    />
                  </svg>
                  Email Address
                </h6>
                <a
                  className="text-[#B2AAF0]"
                  href="mailto:support@salafihosting.com"
                >
                  support@salafihosting.com
                </a>
              </li>
              <li className="flex flex-col  sm:flex-row items-center">
                <h6 className="mr-8 font-medium  flex w-40">
                  <svg
                    className="mr-2"
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.442 5.55603C18.1304 4.94233 16.7429 4.50616 15.316 4.25903C15.138 4.58003 14.931 5.01303 14.787 5.35603C13.2714 5.12504 11.7296 5.12504 10.214 5.35603C10.0551 4.98122 9.8765 4.61504 9.67901 4.25903C8.25093 4.50657 6.86231 4.94377 5.55001 5.55903C2.93901 9.50503 2.23101 13.353 2.58501 17.146C4.10917 18.2969 5.82161 19.1742 7.64601 19.739C8.05592 19.1749 8.41849 18.5779 8.73001 17.954C8.13749 17.7282 7.56623 17.4501 7.02301 17.123C7.16601 17.017 7.30601 16.906 7.44101 16.792C10.732 18.331 14.307 18.331 17.559 16.792C17.696 16.906 17.836 17.017 17.977 17.123C17.436 17.449 16.863 17.729 16.267 17.955C16.578 18.5792 16.9406 19.1763 17.351 19.74C19.1769 19.1756 20.8905 18.2975 22.415 17.145C22.83 12.749 21.706 8.93603 19.442 5.55603ZM9.17801 14.813C8.19001 14.813 7.38001 13.891 7.38001 12.768C7.38001 11.645 8.17301 10.721 9.17801 10.721C10.183 10.721 10.993 11.643 10.976 12.768C10.977 13.891 10.183 14.813 9.17801 14.813ZM15.822 14.813C14.834 14.813 14.024 13.891 14.024 12.768C14.024 11.645 14.817 10.721 15.822 10.721C16.827 10.721 17.637 11.643 17.62 12.768C17.62 13.891 16.827 14.813 15.822 14.813Z"
                      fill="black"
                    />
                  </svg>
                  Discord{" "}
                </h6>
                <a
                  className="text-[#B2AAF0]"
                  href="https://discord.com/invite/eWsYZZz9Nz"
                >
                  Discord Server Link
                </a>
              </li>
            </ul>
          </div>
          <div className="relative w-[12rem] sm:w-[18rem] mx-auto mt-10 sm:mt-20">
            <Image src={Envolpe}></Image>
          </div>
        </div>
      </div>
    </Layout>
  );
}
