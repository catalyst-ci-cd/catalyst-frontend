import aboutus from "../../assets/about-us.png";

const About = () => {
  return (
    <div>
      <div className="container text-white flex justify-between items-center flex-col gap-8 lg:flex-row py-8">
        <div className="flex-1 flex flex-col justify-center items-center gap-4 text-center lg:text-start lg:items-start">
          <h2>Who Are We?</h2>
          <p>
            Welcome to our world of innovation, where we specialize in
            streamlining software development processes with our cutting-edge
            CI/CD tool. At Catalyst, we're dedicated to helping you elevate your
            software development to new heights. Our state-of-the-art CI/CD tool
            empowers you to automate, test, and deploy your applications
            seamlessly, paving the way for quicker, more efficient, and
            higher-quality software releases. With a commitment to excellence,
            we're here to support your development journey, ensuring that you
            stay at the forefront of the rapidly evolving tech landscape. Join
            us, and together we can revolutionize your software development
            process.
          </p>
        </div>
        <div className="flex-1 flex justify-end items-center">
          <img src={aboutus} alt="about-us" />
        </div>
      </div>
    </div>
  );
};

export default About;
