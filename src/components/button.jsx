import React from 'react';
import { Button, Icon } from 'semantic-ui-react';

const BUtton = ({ value, openModal, iconName, animation }) => {
  return (
    <Button onClick={openModal} animated={animation} className='welcomeButton' >
      <Button.Content visible>{value}</Button.Content>
      <Button.Content hidden className='hiddenButton' >
        <Icon name={iconName} />
      </Button.Content>
    </Button>
  );
};

export { BUtton };
