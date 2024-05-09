import React from "react";

const InputBox = (props) => {
    const {placeholder , type="text", value, onChange} = props
  return (
    <div>
      <input
        type={type}
        className=" bg-customGray rounded-full m-2 p-4 w-1/4 border outline-blue-400"
        placeholder={placeholder}
        value={value}
        onChange={onChange}

      />
    </div>
  );
};

export default InputBox;
