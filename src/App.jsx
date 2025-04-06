import { Suspense, useState, useEffect } from "react";
import { Modal } from "./components";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
// Remove this line
// import Experience from "./components/Experience";
import Tech from "./components/Tech";
import Works from "./components/Works";
import Contact from "./components/Contact";
import { StarsCanvas } from "./components/canvas";
import HireMe from "./components/HireMe";
import ErrorBoundary from "./components/ErrorBoundary";

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalProps, setModalProps] = useState({
    title: "",
    message: "",
    buttonText: "OK",
    isError: false
  });

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center min-h-screen">
        <Navbar />
        <ErrorBoundary fallback={<div>Something went wrong</div>}>
          <Suspense fallback={
            <div className="w-full h-screen flex items-center justify-center">
              <div className="text-white text-xl">Loading 3D Elements...</div>
            </div>
          }>
            {isLoaded && <Hero key="hero-component" />}
          </Suspense>
        </ErrorBoundary>
      </div>
      <About />
      <Tech />
      <Works />
      <div className="relative z-0">
        <Contact />
        <ErrorBoundary>
          <Suspense fallback={<div className="text-white text-center py-10">Loading...</div>}>
            {isLoaded && (
              <div className="w-full h-auto absolute inset-0 z-[-1]">
                <StarsCanvas key="stars-canvas" />
              </div>
            )}
          </Suspense>
        </ErrorBoundary>
      </div>
      <div onClick={(e) => {
        e.preventDefault();
        setModalProps({
          title: "Let's Connect!",
          message: "My friend, contact me directly! I'm always excited to discuss new opportunities and collaborate on interesting projects. You can reach me through the contact form above or connect with me on social media.",
          buttonText: "Got it!",
          isError: false
        });
        setIsModalVisible(true);
      }}>
        <HireMe />
      </div>
      {isModalVisible && (
        <Modal {...modalProps} setIsModalVisible={() => setIsModalVisible(false)} />
      )}
    </div>
  );
};

export default App;
