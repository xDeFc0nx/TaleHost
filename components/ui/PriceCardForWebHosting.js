import { Fragment } from "react";

const ListFeature = (props) => {
  return (
    <li className="flex flex-row items-center">
      <svg
        className="mr-4"
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

const Card = (props) => {
  const {
    title,
    website,
    subDomains,
    storage,
    securityFeature,
    emailAccount,
    databases,
    price,
    link,
  } = props;
  return (
    <Fragment>
      <div className="w-[16.5rem] sm:w-[18rem] pt-6 sm:pt-2 pb-4 sm:pb-2 m-3 md:m-4 md:mt-12 2xl:m-10 flex flex-col justify-center items-center rounded-xl border-[1px] dark:border-salafi-light-black dark:hover:border-[#8D70FE]  hover:border-[#8D70FE] hover:scale-105 duration-400 transform transition">
        {/* heading */}
        <h1 className="font-bold text-lg mt-4 mb-4 sm:mt-10 sm:mb-6">
          {title}
        </h1>

        {/* list */}
        <div className="flex justify-center sm:mt-2">
          <ul className="font-medium text-[#808080]">
            {[website, storage, securityFeature, databases, emailAccount].map(
              (list) => (
                <ListFeature key={list}>{list}</ListFeature>
              )
            )}
          </ul>
        </div>
        {/* Price and CTA */}
        <div className="mt-10 mb-6 sm:mb-10 sm:mt-16 text-center">
          <h6 className=" font-bold text-2xl ">
            {price}
            <span className=" font-light"> &#47; mo</span>
          </h6>
          <a href={link}>
            <button className=" text-[#8D70FE]  font-extrabold border-2 rounded-3xl  px-10 py-2 border-[#8D70FE] mt-2 hover:bg-[#8D70FE] hover:text-white duration-300 transform transition ease-in">
              Buy Now
            </button>
          </a>
        </div>
      </div>
    </Fragment>
  );
};

export default Card;
