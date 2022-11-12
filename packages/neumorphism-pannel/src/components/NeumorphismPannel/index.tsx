import { ReactNode, CSSProperties } from 'react';
import { getNeumorphismStyle, NeumorphismStyleParams } from '../../neumorphism/styleBuilder';

export interface INeumorphismPannelProps extends NeumorphismStyleParams {
  children?: ReactNode
  className?: string
  style?: CSSProperties
}
export default function NeumorphismPannel({
  children,
  className,
  style,
  ...props
}: INeumorphismPannelProps) {
  const neumorphismStyle = getNeumorphismStyle(props);
  const combinStyle = Object.assign(neumorphismStyle, style || {});
  return (
    <div className={className} style={combinStyle}>
      {children}
    </div>
  );
}
