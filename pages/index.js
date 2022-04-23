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
  return (
    <Layout>
      {/* Call to Action */}
      <div className="sm:py-20 bg-salafi-grey-white">
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
        <div className="flex flex-col sm:flex-row p-10  sm:px-20 justify-center  gap-10">
          {servicesDescription.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
