import React, { FC } from "react";

interface TextFieldProps {
  type: React.HTMLInputTypeAttribute;
  placeholder?: string;
}
const TextField: FC<TextFieldProps> = ({ type, placeholder }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="block w-full bg-transparent my-5 p-3 border border-solid border-white rounded-xl text-white placeholder:text-[#ccc] outline-none focus:border-accent"
    />
  );
};

export default TextField;
