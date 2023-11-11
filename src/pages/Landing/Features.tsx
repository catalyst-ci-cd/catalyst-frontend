import featureOne from "../../assets/1.png";
import featureTwo from "../../assets/2.png";
import featureThree from "../../assets/3.png";

const Features = () => {
  return (
    <div>
      <div className="container flex gap-16 flex-col items-center justify-center py-8">
        <h2>
          Gain Valuable Insights into{" "}
          <span className="text-accent">Your Code</span>
        </h2>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
          <div className="flex flex-col justify-center items-center gap-4 p-8 text-center rounded-lg border border-t-2 border-secondary">
            <img className="w-40" src={featureOne} alt="feature-one" />
            <h3>Automated Deployment</h3>
            <p>
              Automate software deployment for hassle-free, error-free releases.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-4 p-8 text-center rounded-lg border border-t-2 border-secondary">
            <img className="w-40" src={featureTwo} alt="feature-two" />
            <h3>Comprehensive Testing</h3>
            <p>
              Catch and fix issues early with a wide range of testing types.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-4 p-8 text-center rounded-lg border border-t-2 border-secondary">
            <img className="w-40" src={featureThree} alt="feature-three" />
            <h3>Real-Time Monitoring</h3>
            <p>
              Gain real-time performance visibility and proactive issue alerts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
