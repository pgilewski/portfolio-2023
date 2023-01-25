import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './components/Contact';
import Projects from './components/Projects';
import 'notyf/notyf.min.css';
import Player from './components/Player';
import { GradientPicker } from './components/GradientPicker';
import { BackgroundChangeIcon } from './components/BackgroundChangeIcon';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Calculator } from './components/Calculator';

const App: React.FC = () => {
  const [modal, setModal] = useState(false);

  const handleClick = () => {
    if (modal) {
      setModal(false);
    }
  };
  const [colorOptionsShown, setColorOptionsShown] = useState<boolean>(false);

  const toggleColorOptions = () => {
    console.log(colorOptionsShown);
    setColorOptionsShown(!colorOptionsShown);
  };

  return (
    <div
      onClick={handleClick}
      className="w-full pt-4 pb-6 px-4 md:px-8 font-mono text-md text-white"
    >
      <div
        className="w-full h-full"
        onClick={() => setColorOptionsShown(false)}
      >
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route index element={<AboutMe />} />
            <Route
              path="projects"
              element={<Projects modal={modal} setModal={setModal} />}
            />
            <Route path="contact" element={<Contact />} />
            <Route path="calculator" element={<Calculator />} />
          </Routes>
        </BrowserRouter>
      </div>

      <div className="fixed bottom-10 right-10 z-10">
        <GradientPicker display={colorOptionsShown} />
        <div onClick={toggleColorOptions}>
          <BackgroundChangeIcon />
        </div>
      </div>
    </div>
  );
};

export default App;
