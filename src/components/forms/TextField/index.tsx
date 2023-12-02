import { IconButton, Tooltip } from "@mui/material";
import React, { FC, useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

interface TextFieldProps {
  type: React.HTMLInputTypeAttribute;
  placeholder?: string;
  name?: string;
  required?: boolean;
  value: string;
  setValue: (value: string) => void;
}
const TextField: FC<TextFieldProps> = ({
  type,
  placeholder,
  name,
  value,
  setValue,
  required = false,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return type === "password" ? (
    <div className="flex w-full bg-transparent my-2 border border-solid rounded-md text-white [&:focus-within]:border-accent">
      <input
        type={showPassword ? "text" : "password"}
        name={name}
        className="p-3 placeholder:text-[#ccc] outline-none border-none bg-transparent w-full"
        placeholder={placeholder}
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
        required={required}
      />

      <Tooltip title={showPassword ? "Hide Password" : "Show Password"}>
        <IconButton onClick={() => setShowPassword((prevShow) => !prevShow)}>
          {showPassword ? (
            <AiFillEyeInvisible className="text-white" />
          ) : (
            <AiFillEye className="text-white" />
          )}
        </IconButton>
      </Tooltip>
    </div>
  ) : (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className="block w-full bg-transparent my-2 p-3 border border-solid border-white rounded-md text-white placeholder:text-[#ccc] outline-none focus:border-accent"
      value={value}
      onChange={(event) => {
        setValue(event.target.value);
      }}
      required={required}
    />
  );
};

export default TextField;
