import { Theme } from '@mui/material/styles';
import { getNeumorphismStyle } from 'neumorphism-style-builder';

export default function Button() {
  return {
    MuiButton: {
      styleOverrides: {
        root: ({ theme }: { theme: Theme }) => {
          const neuObj = getNeumorphismStyle({ color: '#27282b' });
          return {
            ...neuObj.flat,
            '&:hover': {
              ...neuObj.pressed
            }
          };
        }
      }
    }
  };
}
