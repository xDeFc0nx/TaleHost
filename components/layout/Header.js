import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Menu, Transition } from "@headlessui/react";
// import { Popover, Transition } from "@headlessui/react";
// import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Fragment, useState } from "react";
import logo from "../../images/salafi-logo-resize.png";
const Header = (props) => {
  const [services, setServices] = useState("");
  const serviceFormHandler = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setServices(e.target.value);
  };
  return (
    <header className="m-2 sm:px-10 md:m-4 2xl:mt-6 text-salafi-heading  flex justify-between items-center">
      <div className="relative w-12 h-12 2xl:w-16 2xl:h-16">
        <Image src={logo} alt="logo>" layout="fill" />
      </div>

      <nav className="inline-flex space-x-2 2xl:space-x-4 lg:text-xs xl:text-sm 2xl:text-lg mr-2">
        <Menu>
          <Menu.Button>Services</Menu.Button>

          <Menu.Items>
            {/* Integrating with Next.js
The Next.js Link component does not forward unknown props to the
 underlying a element, so it won't close the menu on click when used inside a Menu.Item.
To use a Next.js Link inside a Menu.Item, create your own component
  that wraps Link and forwards unknown props to the child a element. */}
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`${active && "bg-salafi-blue-light"}`}
                  href="/account-settings"
                >
                  Web hosting
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`${active && "bg-salafi-blue-light"}`}
                  href="/account-settings"
                >
                  Discord bot hosting
                </a>
              )}
            </Menu.Item>
          </Menu.Items>
        </Menu>
        <Link href="/about">
          <a className="btn-primary">About</a>
        </Link>
        <Link href="/contact">
          <a className="btn-primary">Contact</a>
        </Link>
        <Link href="/Discord">
          <a className="btn-primary">Discord</a>
        </Link>
      </nav>
    </header>

    ///////////////////////////////////////////////////////
    // New Code for bufer button and also I keep old code

    // <Popover className=" relative  mt-2 md:mt-4 2xl:mt-6 ">
    //   <div className="max-w-7xl mx-auto px-4 sm:px-6">
    //     <div className="flex justify-between items-center  md:space-x-10">
    //       <div className="flex justify-start lg:w-0 lg:flex-1">
    //         <div className="relative w-12 h-12 2xl:w-16 2xl:h-16">
    //           <Image
    //             src="/images/mezo-logo-resize.png"
    //             alt="Mezo Logo>"
    //             layout="fill"
    //           />
    //         </div>
    //       </div>

    //       <div className="md:hidden">
    //         <Popover.Button className=" rounded-md p-2 inline-flex items-center justify-center bg-mezo-dark text-mezo-white hover:text-mezo-dark hover:bg-mezo-white focus:outline-none">
    //           <span className="sr-only">Open menu</span>
    //           <MenuIcon className="h-6 w-6" aria-hidden="true" />
    //         </Popover.Button>
    //       </div>
    //       <Popover.Group
    //         as="nav"
    //         className="hidden md:flex md:flex-row md:items-center space-x-4"
    //       >
    //         <nav className="inline-flex space-x-2 2xl:space-x-4 lg:text-xs xl:text-sm 2xl:text-lg text-mezo-white">
    //           <Link href="/">
    //             <a className="lg:hover:text-black lg:hover:bg-gray-100 lg:px-3 lg:py-2 lg:rounded-md  font-medium">
    //               Home
    //             </a>
    //           </Link>
    //           <Link href="/partners">
    //             <a className="lg:hover:text-black lg:hover:bg-gray-100 lg:px-3 lg:py-2 lg:rounded-md  font-medium">
    //               Partners
    //             </a>
    //           </Link>
    //           <Link href="/discord">
    //             <a
    //               className="lg:hover:text-black lg:hover:bg-gray-100 lg:px-3 lg:py-2 lg:rounded-md  font-medium"
    //               target="_blank"
    //               rel="noreferrer"
    //             >
    //               Discord
    //             </a>
    //           </Link>
    //         </nav>
    //       </Popover.Group>
    //     </div>
    //   </div>

    //   <Transition
    //     as={Fragment}
    //     enter="duration-200 ease-out"
    //     enterFrom="opacity-0 scale-95"
    //     enterTo="opacity-100 scale-100"
    //     leave="duration-100 ease-in"
    //     leaveFrom="opacity-100 scale-100"
    //     leaveTo="opacity-0 scale-95"
    //   >
    //     <Popover.Panel
    //       focus
    //       className="  absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
    //     >
    //       <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-mezo-white ">
    //         <div className="pt-5 pb-6 px-5">
    //           <div className="flex items-center justify-between">
    //             <div className="relative w-12 h-12 2xl:w-16 2xl:h-16">
    //               <Image
    //                 src="/images/mezo-logo-resize-orange.png"
    //                 alt="Mezo Logo>"
    //                 layout="fill"
    //               />
    //             </div>
    //             <div className="-mr-2">
    //               <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-mezo-dark focus:outline-none ">
    //                 <span className="sr-only">Close menu</span>
    //                 <XIcon className="h-4 w-4" aria-hidden="true" />
    //               </Popover.Button>
    //             </div>
    //           </div>
    //           <div className="mt-4">
    //             <nav className="flex flex-col content-center mx-auto text-center sm:w-1/2  gap-y-3">
    //               <Link href="/">
    //                 <a className="lg:hover:text-black lg:hover:bg-gray-100 lg:px-3 lg:py-2 lg:rounded-md  font-medium">
    //                   Home
    //                 </a>
    //               </Link>
    //               <Link href="/partners">
    //                 <a className="lg:hover:text-black lg:hover:bg-gray-100 lg:px-3 lg:py-2 lg:rounded-md  font-medium">
    //                   Partners
    //                 </a>
    //               </Link>
    //               <Link href="/discord">
    //                 <a
    //                   className="lg:hover:text-black lg:hover:bg-gray-100 lg:px-3 lg:py-2 lg:rounded-md  font-medium"
    //                   target="_blank"
    //                   rel="noreferrer"
    //                 >
    //                   Discord
    //                 </a>
    //               </Link>
    //             </nav>
    //           </div>
    //         </div>
    //       </div>
    //     </Popover.Panel>
    //   </Transition>
    // </Popover>
  );
};

export default Header;
