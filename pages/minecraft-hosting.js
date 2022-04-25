// import Head from "next/head";
import Image from "next/image";
import { Layout } from "../components/layout/Layout";
import styles from "../styles/Home.module.css";
import heroTower from "../images/hero-tower.svg";
import ServiceCard from "../components/ui/ServiceCard";
import PriceCardForMinecraftHosting from "../components/ui/PriceCardForMinecraftHosting";
import Head from 'next/head'
import { useRouter } from "next/router";
import { servicesDescription } from "../public/constant/servicesDescription";
import { pricesDescription } from "../public/constant/pricesDescription";
const { mineCraftHosting } = pricesDescription;
export default function Home() {
  const router = useRouter();

  const { mineCraftHosting } = pricesDescription;
  
  return (
    <Layout>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-2JYXB6HX49"
      />
 <Head>
        <title>Minecraft Hosting</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
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

      {/*Web Hosting Price */}
      <div className="flex flex-col items-center m-10">
        <h1 className="heading text-center mt-20 mb-10 w-6/12 sm:w-full">
          Choose Your Web Hosting Package
        </h1>

        <div className="flex flex-wrap gap-10 justify-center">
          {mineCraftHosting.map((plan) => (
            <PriceCardForMinecraftHosting key={plan.title} {...plan} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
