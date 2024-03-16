import { Link, useNavigate } from 'react-router-dom';
import { Divider } from '@mui/material';
import TextField from '@/components/forms/TextField';
import StyledGoogleLogin from '@/components/forms/GoogleLogin';
import { useCallback, useEffect, useState } from 'react';
import { SignUpHandler } from '@/services/AccountApi';
import { useAuthContext } from '@/contexts/AuthContext';
import { toast } from 'react-toastify';

export interface ISignUpFormInput {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Signup = () => {
  const { token } = useAuthContext();
  const [formInput, setFormInput] = useState<ISignUpFormInput>({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const navigate = useNavigate();
  const handleChange = (value: string, name: keyof ISignUpFormInput) => {
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

      // check password match
      if (formInput.password !== formInput.confirmPassword) {
        toast.error('Password does not match');
        return;
      }

      const response = await SignUpHandler(formInput);
      if (response.status === 'success') {
        toast.success('Account created successfully');
        navigate('/login');
      } else {
        toast.error(response.error.message);
      }
    },
    [formInput, navigate],
  );
  useEffect(() => {
    if (token !== null) {
      navigate('/workflows');
    }
  }, [navigate, token]);
  return (
    <div className="min-h-screen flex items-center bg-gradient-to-tr from-primary to-secondary font-roboto text-white py-4">
      <div className=" container">
        <form
          className="container py-5 md:w-1/2 flex flex-col justify-center rounded-lg bg-[#ffffff18] shadow-xl"
          onSubmit={handleSubmit}
        >
          <h2 className="text-xl md:text-3xl text-center font-semibold my-2">
            Create an Account
          </h2>
          <div className="flex flex-col sm:flex-row sm:gap-4">
            <TextField
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formInput.firstName}
              setValue={value => handleChange(value, 'firstName')}
              required={true}
            />
            <TextField
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formInput.lastName}
              setValue={value => handleChange(value, 'lastName')}
              required={true}
            />
          </div>
          <TextField
            type="text"
            name="username"
            placeholder="Username"
            value={formInput.username}
            setValue={value => handleChange(value, 'username')}
            required={true}
          />
          <TextField
            type="email"
            name="email"
            placeholder="Email"
            value={formInput.email}
            setValue={value => handleChange(value, 'email')}
            required={true}
          />
          <TextField
            type="password"
            name="password"
            placeholder="Password"
            value={formInput.password}
            setValue={value => handleChange(value, 'password')}
            required={true}
          />
          <TextField
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formInput.confirmPassword}
            setValue={value => handleChange(value, 'confirmPassword')}
            required={true}
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
          <div className=" flex flex-col items-center md:flex-row  md:gap-2 justify-center">
            <p className="text-center">Already have an Account? </p>
            <Link
              to="/login"
              className="underline underline-offset-2 text-accent"
            >
              Log in
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
