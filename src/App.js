import React, { Fragment } from 'react';
import './App.css';
import { Navigation, Banner, Menucard, Footer } from "./components/Components"

function App() {
  return (
    <Fragment>
      <Navigation />
      <Banner />
      <Menucard />
      <Footer />
    </Fragment>
  )
}

export default App;
