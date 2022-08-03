import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "@headlessui/react";
import logo from "../../images/Talehost-Logo.svg";
import { useState, Fragment, useEffect } from "react";
import SideDrawer from "../navigation/SideDrawer";
import { MoonIcon, SunIcon } from "@heroicons/react/solid";

const Header = (props) => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  // Maintain state for theme
  useEffect(() => {
    let htmlClasses = document.querySelector("html").classList;
    if (localStorage.theme === "dark") {
      htmlClasses.add("dark");
    }
  }, []);

  const openDrawerHandler = () => {
    setDrawerIsOpen(true);
  };
  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  };

  const toggleDarkMode = () => {
    let htmlClasses = document.querySelector("html").classList;

    if (localStorage.theme === "dark") {
      htmlClasses.remove("dark");
      localStorage.removeItem("theme");
    } else {
      htmlClasses.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };
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
    <Fragment>
      {/* Mobile Screen*/}
      <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
        <div className="p-5 bg-salafi-grey-white sm:px-20 sm:py-2">
          <div className="flex justify-between ">
            <div className="relative w-12 h-12 2xl:w-16 2xl:h-16">
              <Link href="/">
                <a>
                  <Image src={logo} alt="logo>" layout="fill" />
                </a>
              </Link>
            </div>
            <div className="block md:hidden group">
              <button
                className="w-[2.5rem] h-[2.6rem] bg-transparent   flex flex-col justify-around cursor-pointer"
                onClick={openDrawerHandler}
              >
                <span className="block w-[2.5rem] h-[2px] bg-salafi-primary-btn rotate-45   origin-top-left"></span>
                <span className="block w-[2.5rem] h-[2px] bg-salafi-primary-btn opacity-0"></span>
                <span className="block w-[2.5rem] h-[2px] bg-salafi-primary-btn -rotate-45   origin-top-left"></span>
              </button>
            </div>
          </div>
          <nav className="flex flex-col items-center ">
            <Link href="/web-hosting">
              <a className="btn-primary">Web Hosting</a>
            </Link>
            <Link href="/discord-bot-hosting">
              <a className="btn-primary">Discord Bot Hosting</a>
            </Link>
            <Link href="/minecraft-hosting">
              <a className="btn-primary">Minecraft Hosting</a>
            </Link>
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
        </div>
      </SideDrawer>
      {/* Laptop Screen */}

      <header className=" dark:bg-salafi-light-black dark:sm:text-white flex justify-between  md:flex-row sm:justify-around sm:items-center  sm:space-y-0 p-5 sm:px-20 sm:py-1  text-salafi-heading   ">
        <div className="relative w-12 h-12 2xl:w-16 2xl:h-16">
          <Link href="/">
            <a>
              <Image src={logo} alt="logo>" layout="fill" />
            </a>
          </Link>
        </div>

        <nav className="hidden md:inline-flex  flex-col sm:flex-row  space-x-4 2xl:space-x-4 lg:text-sm xl:text-sm 2xl:text-2xl mr-2">
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
              <Menu.Items className="sm:absolute sm:top-12 sm:bg-salafi-primary-btn  rounded-md py-4 px-2 lg:px-2 w-[12rem] 2xl:w-[16rem] text-left space-y-2">
                <Menu.Item>
                  <MyLink href="/web-hosting">Web hosting</MyLink>
                </Menu.Item>
                <Menu.Item>
                  <MyLink href="/discord-bot-hosting">
                    Discord Bot hosting
                  </MyLink>
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
        {/* Laptop Screen */}
        <div className="hidden md:flex flex-row justify-center items-center relative -right-[5rem]">
          <div className="mr-10 dark:hidden" onClick={toggleDarkMode}>
            <MoonIcon className="h-10 w-10 cursor-pointer" />
          </div>
          <div className="mr-10 hidden dark:inline" onClick={toggleDarkMode}>
            <SunIcon className="h-10 w-10 cursor-pointer" />
          </div>
          <Link href="https://billing.talehost.com/index.php?rp=/login">
            <a className="btn-primary bg-salafi-blue-light text-white hover:bg-salafi-blue   rounded-1 py-2 px-8">
              Login
            </a>
          </Link>
        </div>

        {/* Mobile Screen */}

        <div className="flex justify-center items-center">
          <div className="flex flex-row justify-center md:hidden items-center">
            <div className="mr-10 dark:hidden" onClick={toggleDarkMode}>
              <MoonIcon className="h-10 w-10 cursor-pointer" />
            </div>
            <div className="mr-10 hidden dark:inline" onClick={toggleDarkMode}>
              <SunIcon className="h-10 w-10 cursor-pointer text-white" />
            </div>
          </div>

          <div className="block md:hidden group">
            <button
              className="w-[2.5rem] h-[2.6rem] bg-transparent   flex flex-col justify-around cursor-pointer"
              onClick={openDrawerHandler}
            >
              <span className="block w-[2.5rem] h-[2px] bg-salafi-primary-btn  group-active:rotate-45 transition-transform origin-top-left"></span>
              <span className="block w-[2.5rem] h-[2px] bg-salafi-primary-btn group-hover:translate-x-2 transition-transform group-active:opacity-0"></span>
              <span className="block w-[2.5rem] h-[2px] bg-salafi-primary-btn  group-active:-rotate-45 transition-transform origin-top-left"></span>
            </button>
          </div>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
