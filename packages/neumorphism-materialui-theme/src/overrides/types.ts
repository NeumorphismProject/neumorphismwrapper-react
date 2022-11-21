import { NeumorphismStyleParams, NeumorphismActiveLightSourceType, NeumorphismReactStyle, StyleCodeType, NeumorphismShapeType, getNeumorphismStyle } from 'neumorphism-style-builder';

export interface NeumorphismStyles {
  boxWidth?: number
  boxHeight?: number
  frontColor?: string
  flat: NeumorphismReactStyle
  pressed: NeumorphismReactStyle
  concave: NeumorphismReactStyle
  convex: NeumorphismReactStyle
}

export interface MuiComponentDefaultSize {
  boxWidth?: number
  boxHeight?: number
  frontColor?: string
}