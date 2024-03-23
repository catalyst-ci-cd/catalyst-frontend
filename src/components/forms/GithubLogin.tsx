import { useAuthContext } from '@/contexts/AuthContext';
import { ContinueWithGithubHandler } from '@/services/AccountApi';
import { useEffect, useState } from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const OAUTH_GITHUB_URL = `https://github.com/login/oauth/authorize?client_id=${
  import.meta.env.VITE_GITHUB_CLIENT_ID
}&redirect_uri=http://localhost:3000/login&allow_signup=true`;

const GithubLogin = () => {
  const { setToken } = useAuthContext();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [githubRedirecting, setGithubRedirecting] = useState(false);
  useEffect(() => {
    (async () => {
      const code = searchParams.get('code');
      if (code !== null) {
        setGithubRedirecting(true);
        const response = await ContinueWithGithubHandler(code);
        if (response.status === 'success') {
          toast.success('Logged in successfully');
          setToken(response.data.token);
          navigate('/workflows');
        } else {
          toast.error(response.error.message);
        }
      }
    })();
  }, [navigate, searchParams, setToken]);
  return (
    <a
      className="flex items-center justify-center gap-3 w-full font-medium border-2 border-solid border-accent p-3 my-3 text-accent rounded-full transition-all duration-200 hover:bg-accent hover:shadow-lg hover:text-white"
      href={OAUTH_GITHUB_URL}
    >
      {githubRedirecting ? (
        <>Loading...</>
      ) : (
        <>
          <AiFillGithub className="text-2xl" />
          <span>Continue with Github</span>
        </>
      )}
    </a>
  );
};

export default GithubLogin;
