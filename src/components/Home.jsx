import React from "react";
import Heading from "./Heading";
import Text from "./Text";
import girlImage from "../assets/girlImage.png";
import sparkle from "../assets/sparkle.png";
import rocketIcon from "../assets/rocketIcon.png";
import arrow from "../assets/arrow.png";
import backgroundImage from "../assets/backgroundImage.png";
import Detail from "./Detail";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import Logo from "./Logo";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
    <div className=" text-center border-2 rounded-full m-3 border-gray-200">
    <Logo/>
    </div>
    <div className="w-full mt-16">
      <div className="flex flex-col justify-center items-center w-full">
        <Heading heading="Success stories" />
        <Text
          className=" w-1/3 "
          text="Every success journey we’ve encountered."
        />
      </div>
      <div className="flex justify-between items-center ml-44 gap-20 my-10">
        <div className="relative">
          <img className=" w-96 h-96 rounded-3xl" src={girlImage} alt="" />
          <div
            className=" absolute flex flex-col justify-start items-start top-16 -left-20 w-48 h-48 p-5 rounded-xl"
            style={{
              boxShadow: "0px 22.59px 36.14px 0px rgba(30, 30, 30, 0.09)",
              background: "rgba(255, 255, 255, 1)",
            }}
          >
            <img
              className="absolute -top-5 -left-3 w-20 h-20"
              src={sparkle}
              alt=""
            />
            <div
              className=" relative font-mono py-2 text-5xl font-semibold"
              style={{ color: "rgba(28, 28, 28, 1)" }}
            >
              40%
            </div>
            <div
              className="text-sm my-2"
              style={{ color: "rgba(130, 130, 130, 1)" }}
            >
              Achieved reduction in project execution time by optimising team
              availability
            </div>
          </div>
          <div
            className="absolute flex items-center bottom-8 -left-10 w-48 h-16 rounded-3xl  "
            style={{
              boxShadow: "0px 15.21px 35.49px 0px rgba(0, 0, 0, 0.09)",
              background: "rgba(255, 255, 255, 1)",
            }}
          >
            <div
              className="ml-4 p-1 rounded-full"
              style={{ background: "rgba(221, 239, 224, 1)" }}
            >
              <img className="w-4 h-4 " src={rocketIcon} alt="" />
            </div>
            <div className="flex flex-col justify-center items-left m-3">
              <div className="text-xl font-bold">10 DAYS</div>
              <div
                className="text-sm"
                style={{ color: "rgba(130, 130, 130, 1)" }}
              >
                Staff Deployment
              </div>
            </div>
          </div>
          <div
            className="absolute -bottom-12 w-52 h-40 bg-black -right-12 rounded-3xl p-4"
            style={{
              background: "rgba(0, 46, 24, 1)",
              border: "1.18px solid",
              borderImageSource:
                "linear-gradient(159.14deg, #3D3D3D 6.08%, rgba(61, 61, 61, 0) 85.58%)",
              boxShadow: " 0px 23.63px 37.81px 0px rgba(30, 30, 30, 0.09)",
            }}
          >
            <div
              className="flex justify-start items-baseline m-2"
              style={{ color: "rgba(255, 255, 255, 1)" }}
            >
              <div className="text-3xl font-bold m-1">$0.5</div>
              <div style={{ color: "rgba(166, 163, 160, 1)" }}>MILLION</div>
            </div>
            <div
              className="text-sm"
              style={{ color: "rgba(204, 204, 204, 1)" }}
            >
              Reduced client expenses by saving on hiring and employee costs.
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center my-12">
          <div
            className="text-3xl font-bold w-2/5 px-5"
            style={{ color: "rgba(28, 28, 28, 1)" }}
          >
            Enhance fortune 50 company’s insights teams research capabilities{" "}
          </div>
          <div className="flex gap-2 w-2/6 m-9">
            <div
              className="w-1 h-1 rounded-full"
              style={{ background: "rgba(45, 169, 80, 1)" }}
            ></div>
            <div
              className="w-1 h-1 rounded-full"
              style={{ background: "rgba(228, 227, 227, 1)" }}
            ></div>
            <div
              className="w-1 h-1 rounded-full"
              style={{ background: "rgba(228, 227, 227, 1)" }}
            ></div>
          </div>
          <div className="w-2/6 my-12">
            <div className="bg-black flex gap-4 w-4/6 rounded-full py-1 px-4 ">
              <button className="text-white">Explore More</button>
              <img className="w-4 h-4 my-4" src={arrow} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full ">
        <div
          className="flex flex-row m-4 pt-16 rounded-3xl "
          style={{ background: "rgba(232, 238, 231, 1)" }}
        >
          <div className="flex flex-col">
            <h1
              className="text-2xl font-medium ml-16 font-custom"
              style={{ color: "rgba(158, 157, 157, 1)" }}
            >
              What’s on your mind
            </h1>
            <h1 className=" text-4xl ml-16 font-bold my-2">Ask Questions</h1>
            <img className="w-96 h-96 mt-20" src={backgroundImage} alt="" />
          </div>
          <div className="w-2/5 mx-auto pt-12">
            <Detail question="Do you offer freelancers?" />
            <Detail
              question="What’s the guarantee that I will be satisfied with the hired talent?"
            />
            <Detail question="Can I hire multiple talents at once?" />
            <Detail question="Why should I not go to an agency directly?" />
            <Detail
              question="Who can help me pick a right skillset and duration for me?"
            />
          </div>
        </div>
      </div>
      <div className="absolute top-4 right-10">
        <button className="py-3 px-8 rounded-full m-4" onClick={() => navigate("/form")} style={{border: "1.31px solid rgba(234, 234, 234, 1)"}}>Get Projects</button>
        <button className="text-white py-3 px-8 rounded-full" style={{background: "linear-gradient(97.55deg, #1C1C1C 2.63%, #454444 105.2%),linear-gradient(0deg, #1C1C1C, #1C1C1C)"
}}>Onboard Talent</button>
      </div>

      <Footer/>
    </div>
    </>
    
  );
};

export default Home;
