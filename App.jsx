import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom'
import './stylesheets/main.sass';
import Home from './components/_home.jsx';
import Workpage from './components/Workpage/_workpage';
import ContactPage from './components/Contactpage/_contactpage';
import ClientPage from './components/Clientpage/_clientpage';
import { useLayoutEffect } from 'react'

function App() {

  const Wrapper = ({children}) => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children
  }; 

  return (
  <>
      <Wrapper>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/projets" element={<Workpage />} />
          <Route exact path="/contact" element={<ContactPage />} />
          <Route exact path="/client" element={<ClientPage />} />
        </Routes>
      </Wrapper>
  </>
  );
  }
  export default App;