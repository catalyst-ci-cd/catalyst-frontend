import { AiFillGithub } from "react-icons/ai";

const OAUTH_GITHUB_URL = `https://github.com/login/oauth/authorize?client_id=${
  import.meta.env.VITE_GITHUB_CLIENT_ID
  }`;

const GithubLogin = () => {
  return (
    <a
      className="flex items-center justify-center gap-3 w-full font-medium border-2 border-solid border-accent p-3 my-3 text-accent rounded-full transition-all duration-200 hover:bg-accent hover:shadow-lg hover:text-white"
      href={OAUTH_GITHUB_URL}
    >
      <AiFillGithub className="text-2xl" />
      <span>Continue with Github</span>
    </a>
  );
};

export default GithubLogin;
