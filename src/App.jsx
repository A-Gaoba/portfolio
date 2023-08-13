import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/about/AboutMe";
import Contact from "./components/Contact";
import Projects from "./components/work/Projects";
import { SpinnerInfinity } from 'spinners-react';
import { Analytics } from '@vercel/analytics/react';



function App() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(loadingTimeout);
  }, []);

  if (isLoading) {
    return (
      <div className="loading-container">
        <SpinnerInfinity className="loading-spinner" size={120} />
      </div>
    );
  }

  const handleMouseMove = (event) => {
    setCursorPosition({ x: event.pageX, y: event.pageY });
  };

  return (
    <div
      className="font-mono cursor-circle h-screen bg-[#242735] "
      onMouseMove={handleMouseMove}
    >
      <div
        className="cursor"
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
        }}
      ></div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Analytics />
      </BrowserRouter>
    </div>
  );
}

export default App;
