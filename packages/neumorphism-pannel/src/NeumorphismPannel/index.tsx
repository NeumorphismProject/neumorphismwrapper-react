import { ReactNode, CSSProperties } from 'react';
import { getNeumorphismStyle, NeumorphismStyleParams } from '../neumorphism/styleBuilder';

export interface INeumorphismPannelProps extends NeumorphismStyleParams {
  children?: ReactNode;
  style?: CSSProperties
}
export default function NeumorphismPannel({
  children,
  style,
  ...props
}: INeumorphismPannelProps) {
  const neumorphismStyle = getNeumorphismStyle(props);
  const combinStyle = Object.assign(neumorphismStyle, style || {});
  return (
    <div style={combinStyle}>
      {children}
    </div>
  );
}
