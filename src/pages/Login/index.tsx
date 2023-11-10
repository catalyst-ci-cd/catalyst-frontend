import { Link } from "react-router-dom";
import { Divider } from "@mui/material";
import CheckBoxField from "@/components/forms/CheckBoxField";
import TextField from "@/components/forms/TextField";
import GoogleLogin from "@/components/forms/GoogleLogin";
import GithubLogin from "@/components/forms/GithubLogin";

const Login = () => {
  return (
    <div className="grid place-content-center min-h-screen bg-gradient-to-tr from-primary to-secondary font-roboto text-white">
      <form className="p-10 border border-solid border-white rounded-lg bg-[#ffffff18] shadow-2xl">
        <h2 className="text-3xl font-semibold my-4">Welcome back!</h2>
        <p className="text-[#aaa] my-4">
          Please fill in your Email and Password to Log in.
        </p>
        <TextField type="text" placeholder="example@youremail.com" />
        <TextField type="password" placeholder="● ● ● ● ● ● ●" />
        <div className="flex justify-between">
          <CheckBoxField label={<p>Remember Me</p>} />
          <Link to="#" className="underline text-accent">
            Forget Password?
          </Link>
        </div>
        <button
          className="bg-accent w-full rounded-full p-3 my-3 font-medium text-white font-semibold transition-all duration-300 hover:shadow-lg"
          type="submit"
        >
          Create Account
        </button>
        <Divider className="text-white before:border before:border-white after:border after:border-white">
          OR
        </Divider>
        <GoogleLogin />
        <GithubLogin />
        <p className="text-center my-6">
          Don't have an Account yet?{" "}
          <Link
            to="/signup"
            className="underline underline-offset-2 text-accent"
          >
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
