import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import './stylesheets/main.sass';
import Home from './components/_home.jsx';
import Workpage from './components/Workpage/_workpage';
import WorkpageClient from './components/WorkpageClient/_workpageClient';
import ContactPage from './components/Contactpage/_contactpage';
import ClientPage from './components/Clientpage/_clientpage';
import { useLayoutEffect } from 'react'
import Projectpage from './components/Projectpage/_projectpage';
import SearchPage from './components/SearchPage/_SearchPage';
import SearchPage2 from './components/SearchPage2/_SearchPage2'; 
import "./stylesheets/bulma/grid/columns.sass"

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
          <Route exact path="/projets/:nbr" element={<Workpage />} />
          <Route exact path="/clients" element={<WorkpageClient />} />
          <Route exact path="/contact" element={<ContactPage />} />
          <Route exact path="/client/:id" element={<ClientPage />} />
          <Route exact path="/projet/:id" element={<Projectpage />} />
          <Route exact path="/search/:info" element={<SearchPage />} />
          <Route exact path="/searchcat/:info/:name" element={<SearchPage2 />} />
        </Routes>
      </Wrapper>
    </BrowserRouter>
    </>
  );
};

export default Main; 


