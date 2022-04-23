// import Head from "next/head";
import Image from "next/image";
import { Layout } from "../components/layout/Layout";
import styles from "../styles/Home.module.css";
import heroTower from "../images/hero-tower.svg";
import ServiceCard from "../components/ui/ServiceCard";

const servicesDescription = [
  {
    title: "Web Hosting",
    description: "Host your own website and email without the worry of DDoS",
    link: "https://panel.salafihosting.com/index.php?rp=/store/website-hosting",
    id: "web1",
  },
  {
    title: "Discord Bot Hosting",
    description:
      "Host your own custom coded Discord bot, with basic Linux command.",
    link: "https://panel.salafihosting.com/index.php?rp=/store/discord-bot-hosting",
    id: "web2",
  },
  {
    title: "Minecraft server",
    description: "Play with your friends anywhere, whether on mobile or PC!",
    link: "https://panel.salafihosting.com/index.php?rp=/store/minecraft-hosting",
    id: "minecraft2",
  },
];

export default function Home() {
  const domainFindHandler = (e) => {
    e.preventDefault();
    console.log(e);
    console.log(e.target[0].value);
  };
  return (
    <Layout>
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
              className="sm:absolute right-2 top-1 p-2 px-4 mt-2 sm:mt-0 ml-2 sm:ml-0 rounded-md shadow-sm text-white hover:bg-[#8D70FE] bg-salafi-primary-btn"
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
    </Layout>
  );
}
