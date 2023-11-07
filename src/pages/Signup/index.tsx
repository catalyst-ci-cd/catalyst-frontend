import { Link } from "react-router-dom";
import { Divider } from "@mui/material";
import { AiFillGithub, AiOutlineGoogle } from "react-icons/ai";
import CheckBoxField from "@/components/forms/CheckBoxField";
import TextField from "@/components/forms/TextField";
const Signup = () => {
  return (
    <div className="grid place-content-center min-h-screen bg-gradient-to-tr from-primary to-secondary font-roboto text-white">
      <form className="p-6 border border-solid border-white rounded-lg bg-[#ffffff18] shadow-2xl">
        <h2 className="text-3xl font-semibold my-4">Create your Account !</h2>
        <p className="text-[#aaa] my-4">Please fill in the Details below.</p>
        <TextField type="text" placeholder="Khaled Hegazy" />
        <TextField type="text" placeholder="example@youremail.com" />
        <TextField type="password" placeholder="● ● ● ● ● ● ●" />
        <CheckBoxField
          label={
            <p>
              I have read and accept the{" "}
              <Link to="#" className="underline underline-offset-2 text-accent">
                Term & Conditions
              </Link>
              .
            </p>
          }
        />
        <button
          className="bg-accent w-full rounded-full p-3 my-3 font-medium text-white font-semibold transition-all duration-300 hover:shadow-lg"
          type="submit"
        >
          Create Account
        </button>
        <Divider className="text-white before:border before:border-white after:border after:border-white">
          OR
        </Divider>
        <button
          type="button"
          className="flex items-center justify-center gap-3 w-full font-medium border-2 border-solid border-accent p-3 my-3 text-accent rounded-full transition-all duration-200 hover:bg-accent hover:shadow-lg hover:text-white"
        >
          <AiOutlineGoogle className="text-2xl" />
          <span>Sign up with Google</span>
        </button>{" "}
        <button
          type="button"
          className="flex items-center justify-center gap-3 w-full font-medium border-2 border-solid border-accent p-3 my-3 text-accent rounded-full transition-all duration-200 hover:bg-accent hover:shadow-lg hover:text-white"
        >
          <AiFillGithub className="text-2xl" />
          <span>Sign up with Github</span>
        </button>
        <p className="text-center my-6">
          Already have an Account?{" "}
          <Link to="#" className="underline underline-offset-2 text-accent">
            Log in
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
