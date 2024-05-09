import React from "react";

const Heading = (props) => {
    const {heading} = props
  return (

      <h1 className="font-custom text-5xl font-bold text-center tracking-wider text-green-600">
        {heading}
      </h1>

  );
};

export default Heading;
