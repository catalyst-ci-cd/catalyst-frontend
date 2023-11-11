import Navbar from "@/components/Navbar";
import Header from "@/pages/Landing/Header";
import About from "@/pages/Landing/About";
import Features from "@/pages/Landing/Features";
import Footer from "@/components/Footer";

const Landing = () => {
  return (
    <div className="bg-primary min-h-screen">
      <Navbar />
      <Header />
      <About />
      <Features />
      <Footer />
    </div>
  );
};

export default Landing;
