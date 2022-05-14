import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "@headlessui/react";
import logo from "../../images/salafi-logo-resize.png";
import { useState, Fragment } from "react";
import SideDrawer from "../navigation/SideDrawer";

const Header = (props) => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const openDrawerHandler = () => {
    setDrawerIsOpen(true);
    console.log(drawerIsOpen);
  };
  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
    console.log(drawerIsOpen);
  };

  const toggleDarkMode = () => {
    let htmlClasses = document.querySelector("html").classList;
    console.log(localStorage.theme);
    if (localStorage.theme === "dark") {
      htmlClasses.remove("dark");
      localStorage.removeItem("theme");
    } else {
      htmlClasses.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setIsDarkMode((state) => !state);
    console.log(isDarkMode);
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
      <header className="  flex justify-between  sm:flex-row sm:justify-between sm:items-center  sm:space-y-0 p-5 sm:px-20 sm:py-2  text-salafi-heading   ">
        <div className="relative w-12 h-12 2xl:w-16 2xl:h-16">
          <Link href="/">
            <a>
              <Image src={logo} alt="logo>" layout="fill" />
            </a>
          </Link>
        </div>

        <nav className="hidden md:inline-flex  flex-col sm:flex-row  space-x-4 2xl:space-x-4 lg:text-xs xl:text-sm 2xl:text-2xl mr-2">
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
              <Menu.Items className="sm:absolute sm:top-12 sm:bg-salafi-primary-btn  rounded-md py-4 px-2 lg:px-0 w-[12rem] text-left space-y-2">
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
        <div className="hidden md:flex flex-row justify-center items-center">
          {isDarkMode && (
            <div className="mr-10" onClick={toggleDarkMode}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          )}
          {!isDarkMode && (
            <div className="mr-10" onClick={toggleDarkMode}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            </div>
          )}

          <Link href="https://billing.salafihosting.com/index.php?rp=/login">
            <a className="btn-primary bg-salafi-blue-light text-white hover:bg-salafi-blue   rounded-1 py-2 px-8">
              Login
            </a>
          </Link>
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
      </header>
    </Fragment>
  );
};

export default Header;
////////////////
/////  snippet

// import { Fragment } from "react";
// import { Disclosure, Menu, Transition } from "@headlessui/react";
// import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

// export default function Example() {
//   function MyLink(props) {
//     let { href, children, ...rest } = props;
//     return (
//       <div className=" flex-col">
//         <Link href={href}>
//           <a
//             {...rest}
//             className="btn-primary sm:text-white hover:text-salafi-black "
//           >
//             {children}
//           </a>
//         </Link>
//       </div>
//     );
//   }
//   return (
//     <div className="min-h-full">
//       <Disclosure as="nav" className="">
//         {({ open }) => (
//           <>
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//               <div className="flex items-center justify-between h-16">
//                 <div className="relative w-12 h-12 2xl:w-16 2xl:h-16">
//                   <Link href="/">
//                     <a>
//                       <Image src={logo} alt="logo>" layout="fill" />
//                     </a>
//                   </Link>
//                 </div>
//                 <div className="hidden sm:block">
//                   <div className="ml-10 flex items-baseline space-x-4">
//                     <header className="  flex flex-col  sm:flex-row sm:justify-between sm:items-center space-y-2 sm:space-y-0 p-10 sm:px-20 sm:py-2 text-salafi-heading   ">
//                       <nav className="inline-flex flex-col sm:flex-row space-x-2 2xl:space-x-4 lg:text-xs xl:text-sm 2xl:text-lg mr-2">
//                         <Menu>
//                           <Menu.Button className="sm:relative">
//                             <span className="btn-primary group ">
//                               Services
//                               <svg
//                                 className=" inline-block ml-1  fill-[#8D70FE] group-hover:fill-white	"
//                                 width="18"
//                                 height="11"
//                                 viewBox="0 0 18 11"
//                                 fill="none"
//                                 xmlns="http://www.w3.org/2000/svg"
//                               >
//                                 <path d="M8.99997 10.414L0.292969 1.70697L1.70697 0.292969L8.99997 7.58597L16.293 0.292969L17.707 1.70697L8.99997 10.414Z" />
//                               </svg>
//                             </span>
//                             <Menu.Items className="sm:absolute sm:top-12 sm:bg-salafi-primary-btn  rounded-md py-4 w-[12rem] text-left space-y-2">
//                               <Menu.Item>
//                                 <MyLink href="/web-hosting">Web hosting</MyLink>
//                               </Menu.Item>
//                               <Menu.Item>
//                                 <MyLink href="/discord-bot-hosting">
//                                   Discord Bot hosting
//                                 </MyLink>
//                               </Menu.Item>
//                               <Menu.Item>
//                                 <MyLink href="/minecraft-hosting">
//                                   Minecraft hosting
//                                 </MyLink>
//                               </Menu.Item>
//                             </Menu.Items>
//                           </Menu.Button>
//                         </Menu>

//                         <Link href="https://discord.gg/eWsYZZz9Nz">
//                           <a className="btn-primary">Discord</a>
//                         </Link>
//                         <Link href="/contact">
//                           <a className="btn-primary">Contact</a>
//                         </Link>
//                         <Link href="/about">
//                           <a className="btn-primary">About</a>
//                         </Link>
//                       </nav>
//                     </header>
//                   </div>
//                 </div>
//                 <div className="hidden sm:block">
//                   <Link href="https://billing.salafihosting.com/index.php?rp=/login">
//                     <a className="btn-primary bg-salafi-blue-light text-white hover:bg-salafi-blue   rounded-1 py-2 px-8">
//                       Login
//                     </a>
//                   </Link>
//                 </div>
//                 <div className="-mr-2 flex sm:hidden">
//                   {/* Mobile menu button */}
//                   <Disclosure.Button className="bg-salafi-primary-btn inline-flex items-center justify-center p-2 rounded-md text-white hover:text-black hover:bg-salafi-blue-light">
//                     <span className="sr-only">Open main menu</span>
//                     {open ? (
//                       <XIcon className="block h-6 w-6" aria-hidden="true" />
//                     ) : (
//                       <MenuIcon className="block h-6 w-6 " aria-hidden="true" />
//                     )}
//                   </Disclosure.Button>
//                 </div>
//               </div>
//             </div>

//             <Disclosure.Panel className="md:hidden">
//               <div className="flex flex-row justify-center">
//                 <nav className="flex flex-col  justify-center">
//                   <Link href="/web-hosting">
//                     <a className="btn-primary ">Web hosting</a>
//                   </Link>
//                   <Link href="/discord-bot-hosting">
//                     <a className="btn-primary">Discord Bot hosting</a>
//                   </Link>
//                   <Link href="/minecraft-hosting">
//                     <a className="btn-primary">Minecraft hosting</a>
//                   </Link>
//                   <Link href="https://discord.gg/eWsYZZz9Nz">
//                     <a className="btn-primary">Discord</a>
//                   </Link>
//                   <Link href="/contact">
//                     <a className="btn-primary">Contact</a>
//                   </Link>
//                   <Link href="/about">
//                     <a className="btn-primary">About</a>
//                   </Link>
//                   <Link href="https://billing.salafihosting.com/index.php?rp=/login">
//                     <a className="btn-primary bg-salafi-blue-light text-center my-2 mb-4 text-white hover:bg-salafi-blue   rounded-1 py-2 px-8">
//                       Login
//                     </a>
//                   </Link>
//                 </nav>
//               </div>
//             </Disclosure.Panel>
//           </>
//         )}
//       </Disclosure>
//     </div>
//   );
// }
