import{ useEffect, useState } from "react";
import Tick from "../assets/Tick.png";
import Heading from "./Heading";
import Text from "./Text";
import { useNavigate } from "react-router-dom";
import Logo from "./Logo";


const Success = () => {
  const navigate = useNavigate();
    const [count, setCount] = useState(5);
    useEffect(() => {
        if(count === 0) navigate("/");
      const timer = setTimeout(() => {
        setCount(count - 1);
      }, 1000);
      return () => clearTimeout(timer);
    })


  return (
    <>
      <Logo/>
    <div className="mt-24">
      <div className="flex flex-col justify-center items-center my-5">
        <div className="my-5">
          <img className=" w-20 h-20" src={Tick} alt="" />
        </div>
        <div className="w-full">
          <Heading heading="Success Submitted" />
          <Text text="Congratulations"/>
          <h1
            className="text-center mt-8 w-1/2 m-auto text-3xl text-gray-400"
          >
            Your request has been successfully submitted to us. We will validate
            your information and reach out to your shortly with updates
          </h1>
        </div>
      </div>
      <div>
        <h1
          className="text-center mt-28 mb-6 w-full h-8 text-gray-400"
        >Redirecting you to Homepage in <span className=" text-black font-bold">{count} Seconds</span> </h1>
      </div>
    </div>
    </>
  );
};

export default Success;
