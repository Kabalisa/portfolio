import React, { Fragment } from 'react';
import '../assets/css/App.css';
import { Menu } from './Menu';
import { Welcome } from './Welcome';
import { Projects } from './Projects';
import { AboutMe } from './AboutMe';
import { ContactMe } from './ContactMe';

const App = () => {
  return (
    <Fragment>
      <Menu />
      <Welcome />
      <Projects />
      <AboutMe />
      <ContactMe />
    </Fragment>
  );
};

export default App;
