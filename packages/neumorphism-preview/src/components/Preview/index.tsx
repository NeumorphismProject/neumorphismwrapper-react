import { useContext, useEffect, useMemo } from 'react';
import { NeumorphismMuiThemeContext } from 'neumorphism-materialui-theme';
import { NeumorphismPannel, INeumorphismPannelProps, NeumorphismStyleParams } from 'neumorphism-pannel';
import MuiButton from './muiChips/MuiButton';
import { PreviewComponentType } from '@/components/UiSelector/menu';
import { MuiComponentType } from '@/components/UiSelector/muiMenu';

export interface PannelProps extends Pick<INeumorphismPannelProps, 'boxWidth' | 'boxHeight'>, NeumorphismStyleParams {}
export interface PreviewProps {
  previewType?: PreviewComponentType | MuiComponentType
  pannelProps: PannelProps
}
export default function Preview(props: PreviewProps) {
  const { previewType = 'NormalBox', pannelProps } = props;

  const { toggleNeumorphismProps } = useContext(NeumorphismMuiThemeContext);
  useEffect(() => {
    toggleNeumorphismProps(pannelProps);
  }, [pannelProps]);

  switch (previewType) {
    case MuiComponentType.MuiButton:
      return <MuiButton
        sx={{
          margin: '0 auto'
        }}
      />;
    default:
      return <NeumorphismPannel
        {...pannelProps}
        style={{
          margin: '0 auto'
        }}
      />;
  }
}