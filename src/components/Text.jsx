import React from "react";

const Text = (props) => {
  const { text, className="" } = props;
  return (

      <h1 className={`my-2 text-center tracking-tighter text-5xl font-bold ${className}`}>
        {text}
      </h1>
  );
};

export default Text;
 