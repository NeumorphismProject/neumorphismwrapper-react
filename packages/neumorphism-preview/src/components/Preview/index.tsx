import { useContext, useEffect, useMemo } from 'react';
import { styled } from '@mui/material/styles';
import { MuiComponentType, NeumorphismMuiThemeContext } from 'neumorphism-materialui-theme';
import { NeumorphismPannel, INeumorphismPannelProps, NeumorphismStyleParams } from 'neumorphism-pannel';
import MuiButton from './muiChips/MuiButton';
import { PreviewComponentType } from '@/components/UiSelector/menu';

const DemoTextWrapper = styled('div')(() => ({
  width: '100%',
  height: '100%',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center'
}));

export interface PannelProps extends Pick<INeumorphismPannelProps, 'boxWidth' | 'boxHeight'>, NeumorphismStyleParams {
  frontColor: string
}
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
      return (
        <NeumorphismPannel
          {...pannelProps}
          style={{
            margin: '0 auto'
          }}
        >
          <DemoTextWrapper>
            <span style={{ color: pannelProps.frontColor }}>Demo</span>
          </DemoTextWrapper>
        </NeumorphismPannel>
      );
  }
}