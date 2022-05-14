import Head from "next/head";
import { Layout } from "../components/layout/Layout";
import PriceCardForBotHosting from "../components/ui/PriceCardForBotHosting";
import { pricesDescription } from "../public/constant/pricesDescription";

export default function Home() {
  const { botHosting } = pricesDescription;

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
        <title>Discord Bot Hosting</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {/*Web Hosting Price */}
      <div className="flex flex-col items-center dark:bg-salafi-black dark:sm:text-white ">
        <h1 className="heading text-center mt-20 mb-10 w-6/12 sm:w-full dark:sm:text-white ">
          Choose Your Bot Hosting Package
        </h1>

        <div className="flex flex-wrap gap-10 justify-center ">
          {botHosting.map((plan) => (
            <PriceCardForBotHosting key={plan.title} {...plan} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
