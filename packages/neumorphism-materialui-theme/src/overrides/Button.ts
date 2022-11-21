import { Theme, Components } from '@mui/material/styles';
import { NeumorphismStyleParams, NeumorphismActiveLightSourceType, NeumorphismReactStyle, StyleCodeType, NeumorphismShapeType, getNeumorphismStyle } from 'neumorphism-style-builder';
import { NeumorphismStyles, MuiComponentDefaultSize } from './types';

export const muiButtonDefaultSize: MuiComponentDefaultSize = {
  boxWidth: 286,
  boxHeight: 50,
  frontColor: '#FFFFFF'
};

export const muiButtonPrettyConfiguration: NeumorphismStyleParams = {
  // boxWidth: 286,
  // boxHeight: 50,
  color: '#27282b',
  // neumorphismShape: NeumorphismShapeType.flat,
  // activeLightSource: NeumorphismActiveLightSourceType.topLeft,
  shadowDistance: 3,
  shadowBlur: 6,
  borderRadius: 18,
  colorDifference: 0.5
};

export const prettyMuiButtonNeumorphismStyles: NeumorphismStyles = {
  flat: getNeumorphismStyle({ ...muiButtonPrettyConfiguration, styleCodeType: StyleCodeType.reactStyle, neumorphismShape: NeumorphismShapeType.flat }) as NeumorphismReactStyle,
  pressed: getNeumorphismStyle({ ...muiButtonPrettyConfiguration, styleCodeType: StyleCodeType.reactStyle, neumorphismShape: NeumorphismShapeType.pressed }) as NeumorphismReactStyle,
  concave: getNeumorphismStyle({ ...muiButtonPrettyConfiguration, styleCodeType: StyleCodeType.reactStyle, neumorphismShape: NeumorphismShapeType.concave }) as NeumorphismReactStyle,
  convex: getNeumorphismStyle({ ...muiButtonPrettyConfiguration, styleCodeType: StyleCodeType.reactStyle, neumorphismShape: NeumorphismShapeType.convex }) as NeumorphismReactStyle
};

export default function Button(neuStyles?: NeumorphismStyles): Components<Omit<Theme, 'components'>> {
  const neuStylesVal = (neuStyles || prettyMuiButtonNeumorphismStyles) as any;
  const { boxWidth, boxHeight, frontColor } = neuStylesVal;
  return {
    MuiButton: {
      styleOverrides: {
        root: ({ theme }: { theme: Theme }) => {
          return {
            width: boxWidth,
            height: boxHeight,
            color: frontColor,
            ...neuStylesVal.flat,
            '&:hover': {
              ...neuStylesVal.pressed
            }
          };
        }
      }
    }
  };
}
