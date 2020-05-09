import React, { Fragment } from 'react';
import Data from "./information/AboutMain.json";
import Header from "./components/Header/Index";
import About from "./components/About/Index";
import Footer from './components/Footer/Index';
import People from './components/People/Index';

function App() {
  return (
      <Fragment>
          <Header name={Data.name} tagline={Data.tagline}/>
          <About about={Data.about} />
          <People org={Data.org}/>
          <Footer name={Data.name} tagline={Data.tagline} />
      </Fragment>
  );
}

export default App;
