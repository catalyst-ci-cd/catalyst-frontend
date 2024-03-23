import { useAuthContext } from '@/contexts/AuthContext';
import { ContinueWithGoogleHandler } from '@/services/AccountApi';
import { useGoogleLogin } from '@react-oauth/google';
import { AiOutlineGoogle } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const GoogleLogin = () => {
  const { setToken } = useAuthContext();
  const navigate = useNavigate();

  const googleLoginHook = useGoogleLogin({
    onSuccess: async credentials => {
      const response = await ContinueWithGoogleHandler(credentials);
      if (response.status === 'success') {
        toast.success('Logged in successfully');
        setToken(response.data.token);
        navigate('/workflows');
      } else {
        toast.error(response.error.message);
      }
    },
    onError: error => {
      console.log(error);
    },
    scope:
      'https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email',
    state: 'authState',
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
