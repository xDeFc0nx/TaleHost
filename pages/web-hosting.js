import Head from "next/head";
import { Layout } from "../components/layout/Layout";
import PriceCardForWebHosting from "../components/ui/PriceCardForWebHosting";
import { pricesDescription } from "../public/constant/pricesDescription";

export default function Home() {
  const { webHosting } = pricesDescription;

  return (
    <Layout>
      <Head>
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
        <title>Website Hosting</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {/*Web Hosting Price */}
      <div className="flex flex-col items-center  dark:bg-salafi-black dark:text-white ">
        <h1 className="heading text-center mt-20 mb-10 w-6/12 sm:w-full dark:text-white">
          Choose Your Web Hosting Package
        </h1>

        <div className="flex flex-wrap gap-10 justify-center mb-10 sm:mb-20">
          {webHosting.map((plan) => (
            <PriceCardForWebHosting key={plan.title} {...plan} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
