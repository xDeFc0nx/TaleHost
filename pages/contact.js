import Head from "next/head";
import Link from "next/link";
import { Layout } from "../components/layout/Layout";

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

      <div className="flex flex-col justify-center items-center px-10 sm:py-10 sm:px-80">
        <h1 className="heading">Contact US</h1>
        <div className="flex flex-col space-y-4 my-4">
          <Link href="tel:+123456789">
            <a>Phone Number Add Here</a>
          </Link>
          <Link href="mailto:salafihostin@gmailcom.com">
            <a>Email Address Add Here</a>
          </Link>
          <Link href="https://discord.gg/eWsYZZz9Nz">
            <a>Discord</a>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
