import { Link } from "react-router-dom";

const VesakZone = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen pt-[140px] pb-[115px] dark:bg-gradient-to-r dark:from-[#080808] dark:to-[#161616]">
      <h1 className="text-5xl font-semibold dark:text-white text-center leading-[70px]">
        <a className="underline decoration-[#fdac20] underline-offset-[1.0rem]">
          Enter
        </a>
        &nbsp;Vesak Zone
      </h1>

      <div className="w-30">
        <Link to="/" className="w-1/8">
          <p
            style={{
              fontWeight: "50",
              fontSize: "18px",
              textAlign: "center",
            }}
            className="w-30 px-20 py-5 mt-20 text-sm text-[22px] text-white bg-[#8600a5] rounded-full hover:bg-[#8600a5] dark:bg-[#161616] dark:border-solid dark:border-[0.5px] dark:border-[#ffffff75] dark:hover:border-[#fdac20] dark:hover:text-[#fdac20] hover:bg-[#fdac20]"
          >
            Interactive Vesak Zone
          </p>
        </Link>

        <Link to="/" className="w-30">
          <p
            style={{
              fontWeight: "50",
              fontSize: "18px",
              textAlign: "center",
            }}
            className="w-30 px-20 py-5 mt-5 text-sm text-[22px] text-white bg-[#8600a5] rounded-full hover:bg-[#8600a5] dark:bg-[#161616] dark:border-solid dark:border-[0.5px] dark:border-[#ffffff75] dark:hover:border-[#fdac20] dark:hover:text-[#fdac20] hover:bg-[#fdac20]"
          >
            Watch Digital Thorana
          </p>
        </Link>

        <Link to="/" className="w-30">
          <p
            style={{
              fontWeight: "50",
              fontSize: "18px",
              textAlign: "center",
            }}
            className="w-30 px-20 py-5 mt-5 text-sm text-[22px] text-white bg-[#8600a5] rounded-full hover:bg-[#8600a5] dark:bg-[#161616] dark:border-solid dark:border-[0.5px] dark:border-[#ffffff75] dark:hover:border-[#fdac20] dark:hover:text-[#fdac20] hover:bg-[#fdac20]"
          >
            Digital Vesak Zone
          </p>
        </Link>

      </div>
    </div>
  );
};

export default VesakZone;
