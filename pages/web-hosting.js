import Head from "next/head";
import { Layout } from "../components/layout/Layout";
import PriceCardForWebHosting from "../components/ui/PriceCardForWebHosting";
import { pricesDescription } from "../public/constant/pricesDescription";

export default function Home() {
  const { webHosting } = pricesDescription;

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
        <title>Website Hosting</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {/*Web Hosting Price */}
      <div className="flex flex-col items-center m-10">
        <h1 className="heading text-center mt-20 mb-10 w-6/12 sm:w-full">
          Choose Your Web Hosting Package
        </h1>

        <div className="flex flex-wrap gap-10 justify-center">
          {webHosting.map((plan) => (
            <PriceCardForWebHosting key={plan.title} {...plan} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
