import React, { Fragment, useState } from 'react';
import '../assets/css/App.css';
import { Menu } from './Menu';
import { Welcome } from './Welcome';
import { Projects } from './Projects';
import { AboutMe } from './AboutMe';
import { ContactMe } from './ContactMe';
import { SidebarComponent } from './Sidebar';
//an indication of which page is active is needed.
const App = () => {
  const [visible, setVisible] = useState(false);
  
  const HandleOpenSideBar = () => setVisible(true);
  const HandleHideSideBae = () => setVisible(false);
  
  return (
    <Fragment>
      <Menu Open={HandleOpenSideBar} />
      <SidebarComponent visible={visible} hide={HandleHideSideBae} >
       <Welcome />
      </SidebarComponent>
      <SidebarComponent visible={visible} hide={HandleHideSideBae} ><Projects /></SidebarComponent>
      <SidebarComponent visible={visible} hide={HandleHideSideBae} >
        <Fragment>
        <AboutMe />
        <ContactMe />
        </Fragment>
        </SidebarComponent>
    </Fragment>
  );
};

export default App;
