import React, { Fragment } from 'react';
import '../assets/css/App.css';
import { Welcome } from './Welcome';
import { Projects } from './Projects';
import { AboutMe } from './AboutMe';

const App = () => {
  return (
    <Fragment>
      <Welcome />
      <Projects />
      <AboutMe />
    </Fragment>
  );
};

export default App;
