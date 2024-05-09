import React, { useEffect, useState } from "react";
import Heading from "./Heading";
import Text from "./Text";
import InputBox from "./InputBox";
import errorImage from "../assets/errorImage.png";
import Logo from "./Logo";
import { useNavigate } from "react-router-dom";

const FormField = () => {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [btnColor, setBtnColor] = useState("bg-gradient2");
  const [isValidEmail, setIsValidEmail] = useState(false);
  const navigate = useNavigate()

  useEffect(() => {
    if (name && email) {
      setBtnColor("bg-gradient1");
    } else {
      setBtnColor("bg-gradient2");
    }
  }, [name, email]);
  const clickHandler = () => {
    const isValid = /\S+@\S+\.\S+/.test(email);
    if (isValid) {
      navigate("/success");
    } else {
      console.log("Enter a valid email address");
      setIsValidEmail(!isValid);
    }
  };
  return (
      <>
      <Logo/>
    <div className="flex flex-col justify-center items-center w-full mt-20">
      <div
        className=" absolute top-6 right-16 w-10 h-10 cursor-pointer bg-white border flex justify-center items-center rounded-full border-gray-300 color-black"
        onClick={() => (window.location.href = "/")}
      >
        <div className="pb-1 text-xl">x</div>
      </div>
      <Heading heading="Registation Form" />
      <Text className="w-2/5" text="Start your success Journey here!" />
      <div className="mt-7 w-full text-center ">
        <InputBox
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <InputBox
          placeholder="Enter your email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {isValidEmail && (
          <div
            className=" w-full flex justify-center items-center mb-5"
            style={{
              color: "rgba(255, 8, 8, 1)",
            }}
          >
            <img className=" w-6 mx-2 " src={errorImage} alt="" />
            <h1 className="text-left font-bold tracking-wider w-1/4">
              Enter a valid email address
            </h1>
          </div>
        )}

        <button
          className={`${btnColor} text-white mt-5 rounded-full m-2 p-4 w-1/4 border border-gray-100`}
          onClick={() => clickHandler()}
          disabled={btnColor === "bg-gradient2"}
        >
          Submit
        </button>
      </div>
    </div>
      </>
  );
};

export default FormField;
