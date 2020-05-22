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
  const HandleHideSideBar = () => setVisible(false);
  
  return (
    <Fragment>
      <Menu Open={HandleOpenSideBar} />
      <SidebarComponent visible={visible} hide={HandleHideSideBar} >
       <Welcome id='name' />
      </SidebarComponent>
      <SidebarComponent visible={visible} hide={HandleHideSideBar} ><Projects id='projects' /></SidebarComponent>
      <SidebarComponent visible={visible} hide={HandleHideSideBar} >
        <Fragment>
        <AboutMe id='aboutMe' />
        <ContactMe id='contactMe' />
        </Fragment>
        </SidebarComponent>
    </Fragment>
  );
};

export default App;
