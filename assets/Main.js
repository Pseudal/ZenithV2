import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import './stylesheets/main.sass';
import Home from './components/_home.jsx';
import Workpage from './components/Workpage/_workpage';
import ContactPage from './components/Contactpage/_contactpage';
import ClientPage from './components/Clientpage/_clientpage';
import { useLayoutEffect } from 'react'

const Main = () => {

  const Wrapper = ({children}) => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children
  }; 

  return (
    <>
    <BrowserRouter>
      <Wrapper>
        <Routes>
        
          <Route exact path="/" element={<Home />} />
          <Route exact path="/projets" element={<Workpage />} />
          <Route exact path="/contact" element={<ContactPage />} />
<<<<<<< Updated upstream
          <Route exact path="/client" element={<ClientPage />} />
=======
          <Route exact path="/client/:id" element={<ClientPage />} />
          <Route exact path="/projet/:id" element={<Projectpage />} />
>>>>>>> Stashed changes

        </Routes>
      </Wrapper>
    </BrowserRouter>
    </>
  );
};

export default Main; 


