import { Fragment } from "react";
import Image from "next/image";

const Card = (props) => {
  return (
    <Fragment>
      <div className="mx-auto">
        <div className="w-[16.5rem] sm:w-[17rem] px-4 pt-6 pb-4 mx-auto m-5 md:m-8 md:mt-12 2xl:m-10 flex flex-col justify-center items-center rounded-xl shadow-xl  bg-mezo-dark  hover:scale-105 duration-500 transform transition">
          <a href={props.website} target="_blank" rel="noreferrer">
            <Image
              alt={props.description}
              src={props.image}
              width="100%"
              height="100%"
              className="cursor-pointer"
            />
          </a>
          <div className="text-center w-full">
            <h3 className="font-medium tracking-widest mb-2">{props.name}</h3>
            <hr className="w-[3.125rem] h-[3px] rounded-none bg-dark m-auto" />
            <p className="w-full text-base  md:p-[0.3rem] mt-2">
              {props.description}
            </p>
          </div>
          <a
            className="h-10 mt-6 px-8 rounded-lg text-mezo-white border border-mezo-white hover:bg-mezo-dark hover:text-mezo-white  hover:-translate-y-1 ease-in duration-200 active:translate-y-0 font-medium flex justify-center items-center"
            href={props.website}
            target="_blank"
            rel="noreferrer"
          >
            {props.for}
          </a>
        </div>
      </div>
    </Fragment>
  );
};

export default Card;
