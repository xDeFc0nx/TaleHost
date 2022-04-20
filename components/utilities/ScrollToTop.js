import Link from "next/link";

const ScrollToTop = () => {
  return (
    <div>
      <Link href="/" scroll={true}>
        <a>
          <svg
            className="ml-auto antialiased animate-bounce invisible md:visible"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            width="5em"
            height="5em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
          >
            <path
              d="M13 5.586l-4.707 4.707a.999.999 0 1 0 1.414 1.414L12 9.414V17a1 1 0 1 0 2 0V9.414l2.293 2.293a.997.997 0 0 0 1.414 0a.999.999 0 0 0 0-1.414L13 5.586z"
              fill="#3a3335"
            />
          </svg>
        </a>
      </Link>
    </div>
  );
};

export default ScrollToTop;
