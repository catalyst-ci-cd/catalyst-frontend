const Header = () => {
  return (
    <header>
      <div
        className="container flex flex-col justify-center items-center gap-8 min-h-screen max-w-5xl text-center"
        id="header"
      >
        <h1 className="leading-normal">
          Streamline Your Software Development with Our Cutting-Edge{' '}
          <span className="text-accent">CI/CD Tool</span>
        </h1>
        <p className="max-w-lg">
          Elevate your software development with our cutting-edge CI/CD tool.
          Automate, test, and deploy seamlessly for quicker, quality releases.
        </p>
      </div>
    </header>
  );
};

export default Header;
