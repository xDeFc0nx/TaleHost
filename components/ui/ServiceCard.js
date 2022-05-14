import { ArrowRightIcon } from "@heroicons/react/solid";

import Link from "next/link";

const ServiceCard = ({ id, title, link, description }) => {
  return (
    <div className="flex flex-col sm:w-[20rem] sm:h-[11rem] px-8 py-5 group transition-all ease-linear dark:bg-salafi-light-black  bg-white hover:bg-salafi-blue dark:hover:bg-salafi-blue rounded-3xl shadow-lg relative">
      <h1 className="font-bold group-hover:text-white ">{title}</h1>
      <p className="text-[#808080] mt-1 group-hover:text-white">
        {description}
      </p>
      <Link href={`${link}`}>
        <a>
          <ArrowRightIcon className="mt-2 sm:absolute sm:bottom-3 w-10 h-10 p-2 rounded-lg shadow-sm  bg-[#8D70FE] group-hover:bg-white  text-white group-hover:text-[#8D70FE]" />
        </a>
      </Link>
    </div>
  );
};

export default ServiceCard;

