import React from 'react'
import { Icon, Menu, Segment, Sidebar } from 'semantic-ui-react'

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
        <div className='SideOptions' >
        <Menu.Item as='a'>
          <Icon name='home' />
          Home
        </Menu.Item>
        <Menu.Item as='a'>
          <Icon name='gamepad' />
          Games
        </Menu.Item>
        <Menu.Item as='a'>
          <Icon name='camera' />
          Channels
        </Menu.Item>
        </div>
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