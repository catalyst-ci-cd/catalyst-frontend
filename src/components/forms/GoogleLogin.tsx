import { useGoogleLogin } from '@react-oauth/google';
import { AiOutlineGoogle } from 'react-icons/ai';

const GoogleLogin = () => {
  const googleLoginHook = useGoogleLogin({
    onSuccess: ({ access_token }) => {
      console.log(access_token);
    },
    onError: error => {
      console.log(error);
    },
  });
  return (
    <button
      type="button"
      className="flex items-center justify-center gap-3 w-full font-medium border-2 border-solid border-accent p-3 my-3 text-accent rounded-full transition-all duration-200 hover:bg-accent hover:shadow-lg hover:text-white"
      onClick={() => googleLoginHook()}
    >
      <AiOutlineGoogle className="text-2xl" />
      <span>Log in with Google</span>
    </button>
  );
};

export default GoogleLogin;
