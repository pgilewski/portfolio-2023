import React from 'react';
import { Notyf } from 'notyf';

export default React.createContext(
  new Notyf({
    duration: 4000,
    position: { x: 'center', y: 'bottom' },
    types: [
      {
        type: 'warning',
        background: 'orange',
        icon: {
          className: 'material-icons',
          tagName: 'i',
          text: 'warning',
        },
      },
      {
        type: 'error',
        background: 'indianred',
        duration: 4000,
        dismissible: true,
      },
    ],
  })
);
