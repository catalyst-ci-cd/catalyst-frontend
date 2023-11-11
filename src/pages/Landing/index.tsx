import Navbar from "@/components/Navbar";
import Header from "@/pages/Landing/Header";
import About from "@/pages/Landing/About";

const Landing = () => {
  return (
    <div className="bg-primary min-h-screen">
      <Navbar />
      <Header />
      <About />
    </div>
  );
};

export default Landing;
