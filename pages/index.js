import { useEffect, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { useRouter } from "next/router";
import { Layout } from "../components/layout/Layout";
import styles from "../styles/Home.module.css";
import heroTower from "../images/hero-tower.svg";
import ServiceCard from "../components/ui/ServiceCard";
import PriceCardForWebHosting from "../components/ui/PriceCardForWebHosting";
import { pricesDescription } from "../public/constant/pricesDescription";
import { servicesDescription } from "../public/constant/servicesDescription";
import muslimManInTurban from "../images/muslimManInTurban.svg";
import simpleAndFastWeb from "../images/simpleAndFastWeb.svg";
import supportFeature from "../images/supportFeature.svg";
import ScrollToTop from "../components/utilities/ScrollToTop";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import gsap from "gsap";

export default function Home() {
  const router = useRouter();
  const heroHeadingRef = useRef();
  const featureOne = useRef();
  const featureTwo = useRef();
  const featureThree = useRef();
  const featureOneText = useRef();
  const featureOneImage = useRef();
  const featureTwoText = useRef();
  const featureTwoImage = useRef();
  const featureThreeText = useRef();
  const featureThreeImage = useRef();

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const heroTowerElment = document.getElementById("heroTower");
    const tl = gsap.timeline({
      defaults: {
        duration: 1,
        ease: "power1",
      },
    });
    tl.fromTo(heroHeadingRef.current, { x: -100 }, { x: 0 }, 0);
    tl.fromTo(heroTowerElment, { x: 100 }, { x: 0 }, 0);
  }, []);

  useEffect(() => {
    ///////////////////////////
    // Element Movement
    const leftToRightMovment = (element, loction) => {
      const tl = gsap.timeline({
        defaults: {
          duration: 1,
          ease: "power1",
        },
      });

      tl.fromTo(
        element.current,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: loction.current,
            start: "top center",
            end: "bottom bottom",
            scrub: true,
          },
        }
      );
    };
    ///////////////////////////
    // Movement rightToLeftMovment
    const rightToLeftMovment = (element, loction) => {
      const tl = gsap.timeline({
        defaults: {
          duration: 1,
          ease: "power1",
        },
      });

      tl.fromTo(
        element.current,
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: loction.current,
            start: "top center",
            end: "bottom bottom",
            scrub: true,
          },
        }
      );
    };
    leftToRightMovment(featureOneText, featureOne);
    rightToLeftMovment(featureOneImage, featureOne);
    leftToRightMovment(featureTwoImage, featureTwo);
    rightToLeftMovment(featureTwoText, featureTwo);
    leftToRightMovment(featureThreeText, featureThree);
    rightToLeftMovment(featureThreeImage, featureThree);
  }, []);

  const { webHosting } = pricesDescription;
  const domainFindHandler = (e) => {
    e.preventDefault();
    const domainName = e.target[0].value;
    router.push(
      `https://billing.talehost.com/cart.php?a=add&domain=register&query=${domainName}`
    );
  };

  const ListFeature = (props) => {
    return (
      <li className="flex flex-row items-center text-[#808080] ">
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
        <title>TaleHost</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
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
      {/* Call to Action */}
      <div className="sm:py-20 bg-salafi-grey-white dark:bg-salafi-black space-y-10">
        {/* Hero */}
        <div className="p-10 sm:p-0 grid grid-cols-12 place-items-center  ">
          <h1
            ref={heroHeadingRef}
            className="heading col-span-12 sm:col-span-6 self-start sm:w-9/12 pb-10 text-center sm:text-left dark:text-white"
          >
            Reliable Web Hosting Platform for Your Website
          </h1>
          <div className="relative col-span-12 sm:col-span-6 m-2">
            <Image className="absolute" id="heroTower" src={heroTower} />

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
        <div className="flex flex-col sm-10 sm:flex-row sm:flex-wrap p-10  sm:px-10 justify-center  gap-10 dark:text-white ">
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
              className="sm:relative sm:w-[35rem] sm:h-[3rem] dark:bg-salafi-light-black rounded-md shadow-sm p-2 outline-none"
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

      <div className="dark:bg-salafi-light-black  dark:sm:text-white ">
        {/*Web Hosting Price */}

        <div className="flex flex-col items-center dark:bg-salafi-black dark:text-white">
          <h1 className="heading text-center  mt-10 sm:mt-20 mb-10 w-8/12 sm:w-full dark:text-white">
            Choose Your Web Hosting Package
          </h1>

          <div className="flex flex-wrap gap-10 justify-center mb-10 sm:mb-20">
            {webHosting.map((plan) => (
              <PriceCardForWebHosting key={plan.title} {...plan} />
            ))}
          </div>
        </div>

        {/* Features */}
        {/* Feature1 Extra Security */}
        <div
          ref={featureOne}
          className="m-10 sm:m-20 dark:text-white flex flex-col justify-center items-center sm:flex-row  sm:justify-around sm:items-center"
        >
          <div ref={featureOneText}>
            <h1 className="heading dark:text-white">Extra Security</h1>
            <ul className="mt-6  2xl:text-2xl">
              {[
                "Hard Secured Servers",
                "DDoS Protected",
                "Up to date servers at all times",
              ].map((feature) => (
                <ListFeature key={feature}>{feature}</ListFeature>
              ))}
            </ul>
          </div>

          <div
            ref={featureOneImage}
            className="relative w-[15rem] sm:w-[25rem] 2xl:w-[30rem] h-[15rem] sm:h-[25rem] 2xl:h-[30rem] flex justify-center items-center"
          >
            <Image className="absolute" src={muslimManInTurban} />
          </div>
        </div>

        {/* Feature2 Simply and fast website */}
        <div
          ref={featureTwo}
          className="bg-[#F7FAFE] dark:bg-salafi-black -skew-y-6 py-1"
        >
          <div className="skew-y-6 m-10 sm:m-20 flex flex-col justify-center items-center sm:flex-row  sm:justify-around sm:items-center ">
            <div
              ref={featureTwoImage}
              className="relative w-[15rem] sm:w-[25rem] 2xl:w-[30rem] h-[15rem] sm:h-[25rem] 2xl:h-[30rem] flex justify-center items-center"
            >
              <Image className="absolute" src={simpleAndFastWeb} />
            </div>
            <div ref={featureTwoText}>
              <h1 className="heading sm:w-8/12 dark:text-white 2xl:10/12">
                Simple and fast Hosting
              </h1>
              <ul className="mt-6  2xl:text-2xl">
                {["1gbps", "99.99% up time"].map((feature) => (
                  <ListFeature key={feature}>{feature}</ListFeature>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Feature3 24/7 Customer Support */}
        <div
          ref={featureThree}
          className="m-10 sm:m-20 flex flex-col justify-center items-center sm:flex-row  sm:justify-around sm:items-center"
        >
          <div ref={featureThreeText}>
            <h1 className="heading sm:6/12 dark:text-white">
              24&#47;7 Customer Support
            </h1>
            <ul className="mt-6  2xl:text-2xl">
              {[
                "24/7 Support",
                "Average reply rate 5-25 Minutes",
                "Discord Server",
              ].map((feature) => (
                <ListFeature key={feature}>{feature}</ListFeature>
              ))}
            </ul>
          </div>

          <div
            ref={featureThreeImage}
            className="relative w-[15rem] sm:w-[25rem] 2xl:w-[30rem] h-[15rem] sm:h-[25rem] 2xl:h-[30rem] flex justify-center items-center"
          >
            <Image className="absolute" src={supportFeature} />
          </div>
        </div>

        {/* Call to Action  */}
        <div className="p-4">
          <div className="relative bg-[#7721FF] w-[90%]  h-[22rem] sm:h-[26rem]  mx-auto  flex flex-col items-center justify-center text-center sm:text-center rounded-2xl shadow-sm">
            <h1 className="heading !text-white w-6/12 leading-tight">
              Start the success of your website with us
            </h1>

            <button className="py-2 px-4 mt-8 rounded-lg shadow-sm text-salafi-black bg-white  font-medium  hover:bg-salafi-grey-white ">
              <Link href="https://billing.talehost.com/index.php">
                <a>Get started</a>
              </Link>
            </button>
          </div>
        </div>

        {/* svg1 */}

        {/* <svg
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
        </svg> */}
        {/* svg2 */}

        {/* <svg
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
        </svg> */}

        {/* svg3 */}
        {/* <svg
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
        </svg> */}
      </div>
      <ScrollToTop />
    </Layout>
  );
}
