import { useState, useMemo, createContext, ReactNode } from 'react';
// material
import { CssBaseline } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import {
  Theme,
  ThemeProvider as MUIThemeProvider,
  createTheme,
  StyledEngineProvider,
  ThemeOptions
} from '@mui/material/styles';
import { NeumorphismStyleParams, NeumorphismReactStyle, StyleCodeType, NeumorphismShapeType, getNeumorphismStyle } from 'neumorphism-style-builder';
// components overrides
import componentsOverride, { NeumorphismStyles } from './overrides';
import { MuiComponentType, getPrettyConfiguration } from './utils';

export * from './overrides';
export * from './utils';

export type ThemeMode = 'dark' | 'light';
export interface MuiThemeNeumorphismProps extends Omit<NeumorphismStyleParams, 'styleCodeType' | 'neumorphismShape'> {
  boxWidth?: number
  boxHeight?: number
  frontColor?: string
}

export const NeumorphismMuiThemeContext = createContext({
  toggleColorMode: () => { },
  toggleNeumorphismProps: (neuProps?: MuiThemeNeumorphismProps) => { }
});

export interface ThemeProviderProps {
  children?: ReactNode
}
export function ThemeProvider({ children }: ThemeProviderProps) {
  // get system theme type
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode, setMode] = useState<ThemeMode>(prefersDarkMode ? 'dark' : 'light');
  const [neuProps, setNeuProps] = useState<MuiThemeNeumorphismProps | undefined>();
  const themeValue = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
      toggleNeumorphismProps: (neuProps?: MuiThemeNeumorphismProps) => {
        setNeuProps(neuProps);
      }
    }),
    []
  );

  const neuStyles = useMemo((): NeumorphismStyles | undefined => {
    if (neuProps) {
      return {
        boxWidth: neuProps.boxWidth,
        boxHeight: neuProps.boxHeight,
        frontColor: neuProps.frontColor,
        flat: getNeumorphismStyle({ ...neuProps, styleCodeType: StyleCodeType.reactStyle, neumorphismShape: NeumorphismShapeType.flat }) as NeumorphismReactStyle,
        pressed: getNeumorphismStyle({ ...neuProps, styleCodeType: StyleCodeType.reactStyle, neumorphismShape: NeumorphismShapeType.pressed }) as NeumorphismReactStyle,
        concave: getNeumorphismStyle({ ...neuProps, styleCodeType: StyleCodeType.reactStyle, neumorphismShape: NeumorphismShapeType.concave }) as NeumorphismReactStyle,
        convex: getNeumorphismStyle({ ...neuProps, styleCodeType: StyleCodeType.reactStyle, neumorphismShape: NeumorphismShapeType.convex }) as NeumorphismReactStyle
      };
    }
    return undefined;
  }, [neuProps]);

  const theme: Partial<Theme> = useMemo(
    () => createTheme({
      components: componentsOverride(neuStyles)
    } as ThemeOptions),
    [mode, neuStyles]
  );

  return (
    <StyledEngineProvider injectFirst>
      <NeumorphismMuiThemeContext.Provider value={themeValue}>
        <MUIThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </MUIThemeProvider>
      </NeumorphismMuiThemeContext.Provider>
    </StyledEngineProvider>
  );
}
