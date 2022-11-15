import { NeumorphismPannel, NeumorphismStyleParams } from 'neumorphism-pannel';

export interface PreviewProps extends NeumorphismStyleParams {
  boxSize?: number
}
export default function Preview(props: PreviewProps) {
  return <NeumorphismPannel
    {...props}
    style={{
      margin: '0 auto'
    }}
  />;
}