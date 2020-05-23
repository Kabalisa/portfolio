import React from 'react'
import { Icon, Menu, Segment, Sidebar } from 'semantic-ui-react'
import { Link } from "react-scroll";

const SidebarComponent = ({ children, visible, hide }) => {
  return (
    <Sidebar.Pushable as={Segment}>
      <Sidebar
        as={Menu}
        animation='overlay'
        direction='right'
        icon='labeled'
        inverted
        onHide={hide}
        vertical
        visible={visible}
        width='thin'
      >
        <Link
          to='projects'
          smooth={true}
          spy={true}
          offset={-77}
          duration={1000}
        >
        <Menu.Item as='a'>
          <Icon name='code' />
          Projects
        </Menu.Item>
        </Link>
        <Link
         to='aboutMe'
         smooth={true}
         spy={true}
         offset={-77}
         duration={1000}
        >
        <Menu.Item as='a'>
          <Icon name='smile' />
          About Me
        </Menu.Item>
        </Link>
        <Link
          to='contactMe'
          smooth={true}
          spy={true}
          offset={-77}
          duration={1000}
          >
        <Menu.Item as='a'>
          <Icon name='text telephone' />
          Contact Me
        </Menu.Item>
        </Link>
      </Sidebar>

      <Sidebar.Pusher dimmed={visible}>
        <Segment basic>
          {children}
        </Segment>
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  )
}

export { SidebarComponent }