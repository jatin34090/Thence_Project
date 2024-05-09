import React, { useState } from "react";
import plusSign from "../assets/plusSign.png";
import minusSign from "../assets/minusSign.png";

const Detail = (props) => {
    const [answer, setAnswer] = useState(false);
const clickHandler = () => {
    setAnswer(!answer);
}
    const {question} = props
  return (
    <div>
      <div
        className="pb-3 mb-9"
        style={{ borderBottom: " 1px solid rgba(215, 215, 215, 1)" }}
      >
        <div className="flex w-full relative pb-3 ">
          <h1 className="font-bold">{question}</h1>
          <button
            onClick={clickHandler}
            className=" ml-40 w-4 h-4 text-end absolute right-3 "
          >
            {<img className={`${answer ? "w-4" : "w-4 h-4"} `} src={answer ? minusSign : plusSign} alt="" />}
          </button>
        </div>
        {answer && <div
          className="text-sm pr-5"
          style={{ color: "rgba(97, 114, 117, 1)" }}
        >
          If unhappy with a project, communicate with the freelancer, allow for
          revisions, and refer to the agreement. Escalate to platform support if
          needed, considering mediation. Review policies, seek collaborative
          solutions for resolution.
        </div>}
      </div>
    </div>
  );
};

export default Detail;
