import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div
        className="container flex flex-col justify-center items-center gap-8 min-h-screen max-w-5xl text-center"
        id="header"
      >
        <h1>
          Streamline Your Software Development with Our Cutting-Edge{' '}
          <span className="text-accent">CI/CD Tool</span>
        </h1>
        <p>
          Elevate your software development with our cutting-edge CI/CD tool.
          Automate, test, and deploy seamlessly for quicker, quality releases.
        </p>
        <div className="flex gap-4 items-center justify-between">
          <button className="primary-btn">
            <Link to="/login">Get Started</Link>
          </button>
          <button className="secondary-btn">Learn More</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
