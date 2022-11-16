import { NeumorphismPannel, NeumorphismStyleParams } from 'neumorphism-pannel';
import MuiButton from './muiChips/MuiButton';
import { PreviewComponentType } from '@/components/UiSelector/menu';
import { MuiComponentType } from '@/components/UiSelector/muiMenu';

export interface PreviewProps extends NeumorphismStyleParams {
  previewType?: PreviewComponentType | MuiComponentType
  boxSize?: number
}
export default function Preview(props: PreviewProps) {
  const { previewType = 'NormalBox' } = props;
  const pannelProps = { ...props };
  delete pannelProps.previewType;
  switch (previewType) {
    case MuiComponentType.MuiButton:
      return <MuiButton />;
    default:
      return <NeumorphismPannel
        {...pannelProps}
        style={{
          margin: '0 auto'
        }}
      />;
  }
}