import { Theme, Components } from '@mui/material/styles';
import { NeumorphismStyles } from './types';

export default function Button(neuStyles: NeumorphismStyles): Components<Omit<Theme, 'components'>> {
  const { boxWidth, boxHeight } = neuStyles;
  return {
    MuiButton: {
      styleOverrides: {
        root: ({ theme }: { theme: Theme }) => {
          return {
            width: boxWidth,
            height: boxHeight,
            ...neuStyles.flat,
            '&:hover': {
              ...neuStyles.pressed
            }
          };
        }
      }
    }
  };
}
