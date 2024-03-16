import aboutus from '../../assets/about-us.png';

const About = () => {
  return (
    <div>
      <div
        className="container text-white flex justify-between items-center flex-col gap-8 lg:flex-row py-8"
        id="about"
      >
        <div className="flex-1 flex flex-col justify-center items-center gap-8 text-center lg:text-start lg:items-start">
          <h2>Who Are We?</h2>
          <p>
            At Catalyst, we're dedicated to helping you elevate your software
            development to new heights. Our state-of-the-art CI/CD tool empowers
            you to automate, test, and deploy your applications seamlessly,
            paving the way for quicker, more efficient, and higher-quality
            software releases. Join us, and together we can revolutionize your
            software development process.
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
