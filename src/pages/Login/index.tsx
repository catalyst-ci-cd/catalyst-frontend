import { Link, useNavigate } from 'react-router-dom';
import { Divider } from '@mui/material';
import TextField from '@/components/forms/TextField';
import StyledGoogleLogin from '@/components/forms/GoogleLogin';
import StyledGithubLogin from '@/components/forms/GithubLogin';
import React, { useCallback, useEffect, useState } from 'react';
import { LoginHandler } from '@/services/AccountApi';
import { useAuthContext } from '@/contexts/AuthContext';
import { toast } from 'react-toastify';

export interface ILoginFormInput {
  email: string;
  password: string;
}
const Login = () => {
  const { token, setToken } = useAuthContext();
  const navigate = useNavigate();
  const [formInput, setFormInput] = useState<ILoginFormInput>({
    email: '',
    password: '',
  });
  const handleChange = (value: string, name: keyof ILoginFormInput) => {
    setFormInput(prevData => ({ ...prevData, [name]: value }));
  };
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = useCallback(
    async event => {
      event.preventDefault();

      // check empty fields
      const emptyFields = Object.entries(formInput).filter(
        ([, value]) => value.trim() === '',
      );

      if (emptyFields.length > 0) {
        toast.error('Please fill all fields');
        return;
      }

      const response = await LoginHandler(formInput);

      if (response.status === 'success') {
        toast.success('Logged in successfully');
        setToken(response.data.token);
        navigate('/workflows');
      } else {
        toast.error(response.error.message);
      }
    },
    [formInput, navigate, setToken],
  );
  useEffect(() => {
    if (token !== null) {
      navigate('/workflows');
    }
  }, [navigate, token]);
  return (
    <div className="min-h-screen flex items-center bg-gradient-to-tr from-primary py-4 to-secondary font-roboto text-white">
      <div className="container">
        <form
          className="container py-5 md:w-1/2 flex flex-col justify-center rounded-lg bg-[#ffffff18] shadow-xl"
          onSubmit={handleSubmit}
        >
          <h2 className="text-xl md:text-3xl text-center font-semibold my-4">
            Welcome back!
          </h2>
          <TextField
            type="email"
            placeholder="Email"
            required={true}
            value={formInput.email}
            setValue={(value: string) => handleChange(value, 'email')}
          />
          <TextField
            type="password"
            placeholder="Password"
            required={true}
            value={formInput.password}
            setValue={(value: string) => handleChange(value, 'password')}
          />

          <button
            className="bg-accent w-full rounded-full p-3 my-3 font-medium text-white transition-all duration-300 hover:shadow-lg"
            type="submit"
          >
            Log in
          </button>
          <Divider className="text-white before:border before:border-white after:border after:border-white">
            OR
          </Divider>
          <StyledGoogleLogin />
          <StyledGithubLogin />
          <div className=" flex flex-col items-center md:flex-row  md:gap-2 justify-center">
            <p className="text-center">Don't have an account?</p>
            <Link
              to="/signup"
              className="underline underline-offset-2 text-accent"
            >
              Sign up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
