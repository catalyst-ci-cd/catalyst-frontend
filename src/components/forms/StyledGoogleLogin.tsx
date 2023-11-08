import GoogleLogin from "react-google-login";
import { AiOutlineGoogle } from "react-icons/ai";

const StyledGoogleLogin = () => {
  return (
    <GoogleLogin
      clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}
      render={({ onClick }) => (
        <button
          type="button"
          className="flex items-center justify-center gap-3 w-full font-medium border-2 border-solid border-accent p-3 my-3 text-accent rounded-full transition-all duration-200 hover:bg-accent hover:shadow-lg hover:text-white"
          onClick={onClick}
        >
          <AiOutlineGoogle className="text-2xl" />
          <span>Log in with Google</span>
        </button>
      )}
      onSuccess={() => {}}
      onFailure={() => {}}
    />
  );
};

export default StyledGoogleLogin;
