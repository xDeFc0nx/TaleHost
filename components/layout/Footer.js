import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Footer = (props) => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="w-full text-center bg-mezo-dark text-mezo-white p-2 pin-b">
      <span className="lg:text-xl">
        Made with 💘 by Mezo Management {year} &copy;
      </span>
    </footer>
  );
};

export default Footer;
