import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import logo from "../../images/salafi-logo-resize.png";

const Footer = (props) => {
  const date = new Date();
  const year = date.getFullYear();
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
    <footer className="w-full bg-[#7721FF] p-10 px-14 text-[#E6E6E6] ">
      <div className="flex flex-col sm:flex-row">
        {/* Logo and Description */}
        <div className="sm:w-6/12 ">
          <div className="relative w-16 h-16 2xl:w-16 2xl:h-16">
            <Link href="/">
              <a>
                <Image src={logo} alt="logo>" layout="fill" />
              </a>
            </Link>
          </div>
          <p className="sm:w-10/12 md:w-6/12  mt-4">
            By using Salafi Hosting's website and services, you agree to our
            Terms of Service and Privacy Policy.
          </p>
        </div>
        {/* Navigation */}
        <div className="flex flex-col sm:flex-row sm:space-x-2 md:space-x-3 lg:space-x-4 xl:space-x-8 ">
          <ul className="mt-5 space-y-1">
            <li>
              <h1 className="font-bold mb-2 ">Services</h1>
            </li>
            <li>
              <Link href="https://panel.salafihosting.com/">
                <a>Register Domain</a>
              </Link>
            </li>
            <li>
              <Link href="https://panel.salafihosting.com/index.php?rp=/store/website-hosting">
                <a>Web Hosting</a>
              </Link>
            </li>
            <li>
              <Link href="https://panel.salafihosting.com/index.php?rp=/store/discord-bot-hosting">
                <a>Discord Bot Hosting</a>
              </Link>
            </li>
            <li>
              <Link href="https://panel.salafihosting.com/index.php?rp=/store/minecraft-hosting">
                <a>Minecraft Hosting</a>
              </Link>
            </li>
          </ul>
          <ul className="mt-5 space-y-1">
            <li>
              <h1 className="font-bold mb-2 ">Company</h1>
            </li>
            <li>
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
            <li>
              <Link href="https://discord.gg/eWsYZZz9Nz">
                <a>Discord</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a>Contact</a>
              </Link>
            </li>
          </ul>
          <ul className="mt-5 space-y-1">
            <li>
              <h1 className="font-bold mb-2 ">Help</h1>
            </li>
            <li>
              <Link href="/about">
                <a>24 &#47;7 Support</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className=" sm:mt-20">
        <h1 className="lg:text-xl  text-black">{year} &copy; Salafi Hosting LLC</h1>
      </div>
    </footer>
  );
};

export default Footer;
