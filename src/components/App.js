import React, { Fragment } from 'react';
import '../assets/css/App.css';
import { Welcome } from './Welcome';
import {Projects} from './Projects';

const App = () => {
  return (
    <Fragment>
      <Welcome />
      <Projects />
    </Fragment>
  );
};

export default App;
