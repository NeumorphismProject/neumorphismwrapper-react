import { ReactNode, CSSProperties } from 'react';
import { getNeumorphismStyle, NeumorphismStyleParams } from 'neumorphism-style-builder';

export const BOX_SIZE = 300;
export interface INeumorphismPannelProps extends NeumorphismStyleParams {
  boxWidth?: number
  boxHeight?: number
  children?: ReactNode
  className?: string
  style?: CSSProperties
}
export default function NeumorphismPannel({
  boxWidth = BOX_SIZE,
  boxHeight = BOX_SIZE,
  children,
  className,
  style,
  ...props
}: INeumorphismPannelProps) {
  const neumorphismStyle = getNeumorphismStyle(props);
  const combinStyle = Object.assign(neumorphismStyle, { width: `${boxWidth}px`, height: `${boxHeight}px` }, style || {});
  return (
    <div className={className} style={combinStyle}>
      {children}
    </div>
  );
}
