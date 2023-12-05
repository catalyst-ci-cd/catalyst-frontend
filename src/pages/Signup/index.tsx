import { Link, useNavigate } from "react-router-dom";
import { Divider } from "@mui/material";
import CheckBoxField from "@/components/forms/CheckBoxField";
import TextField from "@/components/forms/TextField";
import StyledGoogleLogin from "@/components/forms/GoogleLogin";
import StyledGithubLogin from "@/components/forms/GithubLogin";
import { useCallback, useState } from "react";
import { SignUpHandler } from "@/services/AccountApi";

export interface ISignUpFormInput {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Signup = () => {
  const [formInput, setFormInput] = useState<ISignUpFormInput>({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();
  const handleChange = (value: string, name: keyof ISignUpFormInput) => {
    setFormInput((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = useCallback(
    async (event) => {
      event.preventDefault();
      const response = await SignUpHandler(formInput);
      if (response.status === "success") {
        navigate("/login");
      } else {
        console.log(response.error);
      }
    },
    [formInput]
  );

  return (
    <div className="sm:grid sm:place-content-center min-h-screen bg-gradient-to-tr from-primary to-secondary font-roboto text-white">
      <form
        className="container min-h-screen sm:min-h-0 py-5 flex flex-col justify-center border border-solid border-white rounded-lg bg-[#ffffff18] shadow-2xl"
        onSubmit={handleSubmit}
      >
        <h2 className="text-3xl text-center font-semibold my-2">
          Create your Account!
        </h2>
        <p className="text-[#aaa] text-center my-2">
          Please fill in the Details below.
        </p>
        <div className="flex flex-col sm:flex-row sm:gap-4">
          <TextField
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formInput.firstName}
            setValue={(value) => handleChange(value, "firstName")}
            required={true}
          />
          <TextField
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formInput.lastName}
            setValue={(value) => handleChange(value, "lastName")}
            required={true}
          />
        </div>
        <TextField
          type="text"
          name="username"
          placeholder="Username"
          value={formInput.username}
          setValue={(value) => handleChange(value, "username")}
          required={true}
        />
        <TextField
          type="email"
          name="email"
          placeholder="Email"
          value={formInput.email}
          setValue={(value) => handleChange(value, "email")}
          required={true}
        />
        <TextField
          type="password"
          name="password"
          placeholder="Password"
          value={formInput.password}
          setValue={(value) => handleChange(value, "password")}
          required={true}
        />
        <TextField
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formInput.confirmPassword}
          setValue={(value) => handleChange(value, "confirmPassword")}
          required={true}
        />
        <CheckBoxField
          label={
            <p className="text-sm sm:text-base">
              I have read and accept the{" "}
              <Link to="#" className="underline underline-offset-2 text-accent">
                Term & Conditions
              </Link>
              .
            </p>
          }
        />
        <button
          className="bg-accent w-full rounded-full p-3 my-3 font-medium text-white transition-all duration-300 hover:shadow-lg"
          type="submit"
        >
          Create Account
        </button>
        <Divider className="text-white before:border before:border-white after:border after:border-white">
          OR
        </Divider>
        <StyledGoogleLogin />
        <StyledGithubLogin />
        <p className="text-center my-6">
          Already have an Account?{" "}
          <Link
            to="/login"
            className="underline underline-offset-2 text-accent"
          >
            Log in
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
