import { isValidColor, colorLuminance } from './utils';

export enum NeumorphismShapeType {
  flat = 0,
  pressed = 1,
  concave = 2,
  convex = 3
}
// It seams the angle of shadow
export enum NeumorphismActiveLightSourceType {
  topLeft = 1,
  topRight = 2,
  bottomRight = 3,
  bottomLeft = 4
}
export const NEUMORPHISM_SHAPE = NeumorphismShapeType.flat;
export const ACTIVE_LIGHT_SOURCE = NeumorphismActiveLightSourceType.topLeft;
export const SHADOW_DISTANCE = 10;
export const BORDER_RADIUS = 50;
export const BORDER_RADIUS_MAX = 150;
export const COLOR_DIFFERENCE = 0.5;

function getActiveLightSource(activeLightSource: NeumorphismActiveLightSourceType, distance: number) {
  switch (activeLightSource) {
    case NeumorphismActiveLightSourceType.topLeft:
      return {
        positionX: distance,
        positionY: distance,
        angle: 145
      };
    case NeumorphismActiveLightSourceType.topRight:
      return {
        positionX: distance * -1,
        positionY: distance,
        angle: 225
      };
    case NeumorphismActiveLightSourceType.bottomRight:
      return {
        positionX: distance * -1,
        positionY: distance * -1,
        angle: 315
      };
    case 4:
      return {
        positionX: distance,
        positionY: distance * -1,
        angle: 45
      };
    default: // NeumorphismActiveLightSourceType.topLeft
      return {
        positionX: distance,
        positionY: distance,
        angle: 145
      };
  }
}

export interface NeumorphismCssStyle {
  ['border-radius']: string
  background: string
  ['box-shadow']: string
}
export interface NeumorphismReactStyle {
  borderRadius: string
  background: string
  boxShadow: string
}

export enum StyleCodeType {
  css = 1,
  reactStyle = 2
}
export interface NeumorphismStyleParams {
  styleCodeType?: StyleCodeType
  color: string // must hexadecimal (means like #FFFFFF)
  neumorphismShape?: NeumorphismShapeType
  activeLightSource?: NeumorphismActiveLightSourceType
  shadowDistance?: number;
  shadowBlur?: number; // default: shadowDistance * 2. If you would like to get pretty style, do not set this value.
  borderRadius?: number;
  borderRadiusMax?: number;
  colorDifference?: number;
}
export function getNeumorphismStyle({
  styleCodeType = StyleCodeType.reactStyle,
  color,
  neumorphismShape = NEUMORPHISM_SHAPE,
  activeLightSource = ACTIVE_LIGHT_SOURCE,
  shadowDistance = SHADOW_DISTANCE,
  shadowBlur,
  borderRadius = BORDER_RADIUS,
  borderRadiusMax = BORDER_RADIUS_MAX,
  colorDifference = COLOR_DIFFERENCE }: NeumorphismStyleParams): NeumorphismCssStyle | NeumorphismReactStyle {
  // const
  // const maxRadius = 150;
  // const colorDifference = 0.15;

  // var
  const shape = parseInt(neumorphismShape as any, 10);
  let gradient = false;
  if (shape === 2 || shape === 3) {
    gradient = true;
  }
  const distance = shadowDistance;
  const { positionX, positionY, angle } = getActiveLightSource(parseInt(activeLightSource as any, 10), distance);
  const firstGradientColor = gradient && shape !== 1 ? colorLuminance(color, shape === 3 ? 0.07 : -0.1) : color;
  const secondGradientColor = gradient && shape !== 1 ? colorLuminance(color, shape === 2 ? 0.07 : -0.1) : color;
  const blur = !shadowBlur ? shadowDistance * 2 : shadowBlur;
  const darkColor = colorLuminance(color, colorDifference * -1);
  const lightColor = colorLuminance(color, colorDifference);
  // key code
  const borderRadiusVal = borderRadius >= borderRadiusMax ? '50%' : borderRadius + 'px';
  const background = gradient && shape !== 1
    ? `linear-gradient(${angle}deg, ${firstGradientColor}, ${secondGradientColor})`
    : `${color}`;
  const boxShadowPosition = shape === 1 ? 'inset' : '';
  const firstBoxShadow = `${boxShadowPosition} ${positionX}px ${positionY}px ${blur}px ${darkColor}`;
  const secondBoxShadow = `${boxShadowPosition} ${positionX * -1}px ${positionY * -1}px ${blur}px ${lightColor}`;

  let styleObj: any = {};
  switch (styleCodeType) {
    case StyleCodeType.css:
      styleObj = {
        'border-radius': borderRadiusVal,
        background: background,
        'box-shadow': `${firstBoxShadow},${secondBoxShadow}`
      };
      break;
    default: // StyleCodeType.reactStyle
      styleObj = {
        borderRadius: borderRadiusVal,
        background: background,
        boxShadow: `${firstBoxShadow},${secondBoxShadow}`
      };
      break;
  }

  return styleObj;
}

export default function neumorphismBuild(params: Omit<NeumorphismStyleParams, 'neumorphismShape'>) {
  let result = {};
  if (!isValidColor(params.color)) {
    result = {
      flat: {},
      pressed: {},
      convex: {},
      concave: {}
    };
  }
  const flat = getNeumorphismStyle({ ...params, neumorphismShape: NeumorphismShapeType.flat });
  const pressed = getNeumorphismStyle({ ...params, neumorphismShape: NeumorphismShapeType.pressed });
  const convex = getNeumorphismStyle({ ...params, neumorphismShape: NeumorphismShapeType.convex });
  const concave = getNeumorphismStyle({ ...params, neumorphismShape: NeumorphismShapeType.concave });
  result = {
    flat,
    pressed,
    convex,
    concave
  };
  return result;
}