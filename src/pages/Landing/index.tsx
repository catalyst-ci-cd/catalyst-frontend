import Navbar from '@/components/Navbar';
import Header from '@/pages/Landing/Header';
import About from '@/pages/Landing/About';
import Features from '@/pages/Landing/Features';
import Footer from '@/components/Footer';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '@/contexts/AuthContext';
import { useEffect } from 'react';

const Landing = () => {
  const navigate = useNavigate();
  const { token } = useAuthContext();
  useEffect(() => {
    if (token !== null) {
      navigate('/dashboard/workflows/');
    }
  }, [navigate, token]);
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
