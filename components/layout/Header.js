import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "@headlessui/react";

import logo from "../../images/salafi-logo-resize.png";
const Header = (props) => {
  function MyLink(props) {
    let { href, children, ...rest } = props;
    return (
      <div className="d-flex flex-col">
        <Link href={href}>
          <a {...rest} className="btn-primary">
            {children}
          </a>
        </Link>
      </div>
    );
  }
  return (
    <header className="m-2 d-flex flex-col sm:flex-row sm:px-10 md:m-4 2xl:mt-6 text-salafi-heading  flex justify-between items-center">
      <div className="relative w-12 h-12 2xl:w-16 2xl:h-16">
        <Image src={logo} alt="logo>" layout="fill" />
      </div>

      <nav className="inline-flex flex-col sm:flex-row space-x-2 2xl:space-x-4 lg:text-xs xl:text-sm 2xl:text-lg mr-2">
        <Menu>
          <Menu.Button>
            <span className="btn-primary">Services</span>
          </Menu.Button>

          <Menu.Items>
            <Menu.Item>
              <MyLink href="https://panel.salafihosting.com/index.php?rp=/store/website-hosting">Web hosting</MyLink>
            </Menu.Item>
            <Menu.Item>
              <MyLink href="https://panel.salafihosting.com/index.php?rp=/store/discord-bot-hosting">Discord Bot hosting</MyLink>
            </Menu.Item>
            <Menu.Item>
              <MyLink href="https://panel.salafihosting.com/index.php?rp=/store/minecraft-hosting">Minecraft hosting</MyLink>
            </Menu.Item>
          </Menu.Items>
        </Menu>


        <Link href="/about">
          <a className="btn-primary">About</a>
        </Link>
        <Link href="https://discord.gg/eWsYZZz9Nz">
          <a className="btn-primary">Discord</a>
        </Link>
      </nav>
      <Link href="https://panel.salafihosting.com/index.php?rp=/login">
        <a className="btn-primary bg-salafi-blue-light text-white hover:bg-salafi-blue   rounded-1 py-2 px-8">
          Login
        </a>
      </Link>
    </header>
  );
};

export default Header;
