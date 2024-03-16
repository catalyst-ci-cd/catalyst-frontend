import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center flex-col gap-4 min-h-screen bg-primary text-white">
      <h1 className="text-4xl">404 Not Found</h1>
      <p className="text-lg mt-4 cursor-pointer">
        Go back to{' '}
        <Link
          to="/workflows"
          className="underline underline-offset-2 text-accent hover:text-accent-dark transition-colors"
        >
          Home
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
