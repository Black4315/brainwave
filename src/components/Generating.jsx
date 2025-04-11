import { loading } from "../assets";

const Generating = ({ className }) => {
  return (
    <div
      className={`flex items-center bg-n-8/80 rounded-[1.75rem] px-6 h-[3.5rem]
        ${className || ""} text-base`}
    >
      <img className="w-5 h-5 mr-4 animate-slowSpin" src={loading} alt="Loading" />
      AI is generating
    </div>
  );
};

export default Generating;