import React from 'react';
import { Button } from 'semantic-ui-react';

const BUtton = ({ value, openModal }) => {
  return (
    <Button onClick={openModal} >
      {value}
    </Button>
  );
};

export { BUtton };
