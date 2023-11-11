import cellBg from "../../assets/cell.png";

const Header = () => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to bottom, #2C3333 7%, rgba(0, 0, 0, 0) 46%, rgba(0, 0, 0, 0) 96%, #2C3333), url(${cellBg})`,
        backgroundPosition: "center",
        backgroundSize: "auto, 45px",
      }}
    >
      <div className="container flex flex-col justify-center items-center gap-8 min-h-screen max-w-5xl text-center">
        <h1>
          Streamline Your Software Development with Our Cutting-Edge{" "}
          <span className="text-accent">CI/CD Tool</span>
        </h1>
        <p>
          Elevate your software development with our cutting-edge CI/CD tool.
          Automate, test, and deploy seamlessly for quicker, quality releases.
        </p>
        <div className="flex gap-4 items-center justify-between">
          <button className="primary-btn">Get Started</button>
          <button className="secondary-btn">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
