import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { Layout } from "../components/layout/Layout";
import styles from "../styles/Home.module.css";
import heroTower from "../images/hero-tower.svg";
import ServiceCard from "../components/ui/ServiceCard";
import PriceCardForWebHosting from "../components/ui/PriceCardForWebHosting";
import { servicesDescription } from "../public/constant/servicesDescription";
import { pricesDescription } from "../public/constant/pricesDescription";
import MuslimManInTurban from "../images/MuslimManInTurban";

export default function Home() {
  const router = useRouter();

  const { webHosting } = pricesDescription;
  const domainFindHandler = (e) => {
    e.preventDefault();
    const domainName = e.target[0].value;
    router.push(
      `https://panel.salafihosting.com/cart.php?a=add&domain=register&query=${domainName}`
    );
  };

  const ListFeature = (props) => {
    return (
      <li className="flex flex-row items-center">
        <svg
          className="mr-6"
          width="18"
          height="13"
          viewBox="0 0 18 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.99313 12.421L0.286133 5.57997L1.71413 4.17997L7.00713 9.57897L16.2931 0.292969L17.7071 1.70697L6.99313 12.421Z"
            fill="#079552"
          />
        </svg>
        {props.children}
      </li>
    );
  };
  return (
    <Layout>
      <Head>
        <title>Salai Hosting LLC</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
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
      {/* Call to Action */}
      <div className="sm:py-20 bg-salafi-grey-white space-y-10">
        {/* Hero */}
        <div className="p-10 sm:p-0 grid grid-cols-12 place-items-center  ">
          <h1 className="heading col-span-12 sm:col-span-6 self-start sm:w-9/12 pb-10 text-center sm:text-left">
            Reliable Web Hosting Platform for Your Website
          </h1>
          <div className="relative col-span-12 sm:col-span-6 m-2">
            <Image className="absolute  " src={heroTower} />

            {/* svg1 */}
            <svg
              className="absolute -right-5  sm:right-0 top-[10%]"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M40 40H0L40 0V40Z" fill="#6B67F5" />
            </svg>

            {/* svg2 */}
            <svg
              className="absolute -left-5 sm:-left-10 top-[40%]"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 40H40L0 0V40Z" fill="#6B67F5" />
            </svg>

            {/* svg3 */}
            <svg
              className="absolute -right-5 sm:-right-0 bottom-[1%]"
              width="72"
              height="72"
              viewBox="0 0 72 72"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M72 72H0L72 0V72Z" fill="#605CEE" />
            </svg>
          </div>
        </div>

        {/* Services */}
        <div className="flex flex-col sm:flex-row sm:flex-wrap p-10  sm:px-10 justify-center  gap-10">
          {servicesDescription.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>

        {/* Find the Perfect Domain */}
        <div className="relative bg-[#7721FF] w-[90%] h-[26rem] p-2 sm:p-0 mx-auto  flex flex-col items-center justify-center text-center sm:text-center rounded-2xl shadow-sm">
          <h1 className="heading !text-white">Find the perfect domain name</h1>
          <p className="sm:w-6/12 mt-5 text-[#E6E6E6]">
            Enter your select domain name and choose any extension name in the
            next step (choose between .com, .online, .tech, .site, .net, and
            more)
          </p>

          <form className="mt-10 relative" onSubmit={domainFindHandler}>
            <input
              className="sm:relative sm:w-[35rem] sm:h-[3rem] rounded-md shadow-sm p-2 outline-none"
              type="text"
              placeholder="Search your domain name"
            />
            <button
              className="sm:absolute right-2 top-1 p-2 px-4 mt-2 sm:mt-0 ml-2 sm:ml-0 rounded-md shadow-sm text-white bg-salafi-primary-btn hover:bg-salafi-blue "
              type="submit"
            >
              Submit
            </button>
          </form>

          {/* svg1 */}

          <svg
            className="absolute top-2 left-1/3"
            width="55"
            height="35"
            viewBox="0 0 55 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M34.8154 34.641L0.174415 14.641L54.8154 0L34.8154 34.641Z"
              fill="#17D7B5"
            />
          </svg>
          {/* svg2 */}

          <svg
            className="absolute top-[60%] left-0"
            width="49"
            height="39"
            viewBox="0 0 49 39"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.3528 38.9898L48.9898 28.6371L0 0.352783L10.3528 38.9898Z"
              fill="#17D7B5"
            />
          </svg>

          {/* svg3 */}
          <svg
            className="absolute right-2 bottom-4"
            width="89"
            height="71"
            viewBox="0 0 89 71"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M69.5467 70.1817L8.82149e-06 51.5467L88.1816 0.63501L69.5467 70.1817Z"
              fill="#17D7B5"
            />
          </svg>
        </div>
      </div>

      {/*Web Hosting Price */}
      <div className="flex flex-col items-center m-10">
        <h1 className="heading text-center  mt-10 sm:mt-20 mb-10 w-8/12 sm:w-full">
          Choose Your Web Hosting Package
        </h1>

        <div className="flex flex-wrap gap-10 justify-center">
          {webHosting.map((plan) => (
            <PriceCardForWebHosting key={plan.title} {...plan} />
          ))}
        </div>
      </div>

      {/* Features */}
      {/* Feature1 Extra Security */}

      <div className="m-10 sm:m-20">
        <div>
          <h1 className="heading">Extra Security</h1>
          <ul className="mt-6">
            {[
              "Hard Secured Servers",
              "DDoS Protected",
              "Up to date servers at all times",
            ].map((feature) => (
              <ListFeature>{feature}</ListFeature>
            ))}
          </ul>
        </div>

        <div className="relative w-[10rem] h-[10rem]">
          <MuslimManInTurban className="absolute w-[20rem]  h-[20rem]" />
        </div>
      </div>
    </Layout>
  );
}
