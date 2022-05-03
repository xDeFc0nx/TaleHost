import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "@headlessui/react";

import logo from "../../images/salafi-logo-resize.png";

const Header = (props) => {
  function MyLink(props) {
    let { href, children, ...rest } = props;
    return (
      <div className=" flex-col">
        <Link href={href}>
          <a
            {...rest}
            className="btn-primary sm:text-white hover:text-salafi-black"
          >
            {children}
          </a>
        </Link>
      </div>
    );
  }
  return (
    <header className="  flex flex-col  sm:flex-row sm:justify-between sm:items-center space-y-2 sm:space-y-0 p-10 sm:px-20 sm:py-2 2xl:mt-6 text-salafi-heading   ">
      <div className="relative w-12 h-12 2xl:w-16 2xl:h-16">
        <Link href="/">
          <a>
            <Image src={logo} alt="logo>" layout="fill" />
          </a>
        </Link>
      </div>

      <nav className="inline-flex flex-col sm:flex-row space-x-2 2xl:space-x-4 lg:text-xs xl:text-sm 2xl:text-lg mr-2">
        <Menu>
          <Menu.Button className="sm:relative">
            <span className="btn-primary group ">
              Services
              <svg
                className=" inline-block ml-1  fill-[#8D70FE] group-hover:fill-white	"
                width="18"
                height="11"
                viewBox="0 0 18 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8.99997 10.414L0.292969 1.70697L1.70697 0.292969L8.99997 7.58597L16.293 0.292969L17.707 1.70697L8.99997 10.414Z" />
              </svg>
            </span>
            <Menu.Items className="sm:absolute sm:top-12 sm:bg-salafi-primary-btn  rounded-md py-4 w-[12rem] text-left space-y-2">
              <Menu.Item>
                <MyLink href="/web-hosting">Web hosting</MyLink>
              </Menu.Item>
              <Menu.Item>
                <MyLink href="/discord-bot-hosting">Discord Bot hosting</MyLink>
              </Menu.Item>
              <Menu.Item>
                <MyLink href="/minecraft-hosting">Minecraft hosting</MyLink>
              </Menu.Item>
            </Menu.Items>
          </Menu.Button>
        </Menu>
        
        <Link href="https://discord.gg/eWsYZZz9Nz">
          <a className="btn-primary">Discord</a>
        </Link>
        <Link href="/contact">
          <a className="btn-primary">Contact</a>
        </Link>
        <Link href="/about">
          <a className="btn-primary">About</a>
        </Link>
      </nav>
      <Link href="https://billing.salafihosting.com/index.php?rp=/login">
        <a className="btn-primary bg-salafi-blue-light text-white hover:bg-salafi-blue   rounded-1 py-2 px-8">
          Login
        </a>
      </Link>
    </header>
  );
};

export default Header;
