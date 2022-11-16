import { useState, useMemo, createContext } from 'react';
// material
import { CssBaseline } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import {
  ThemeProvider as MUIThemeProvider,
  createTheme,
  StyledEngineProvider
} from '@mui/material/styles';
// components overrides
import componentsOverride from './overrides';

export type ThemeMode = 'dark' | 'light';

export const ColorModeContext = createContext({ toggleColorMode: () => { } });

export function ThemeProvider({ children }: any) {
  // get system theme type
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode, setMode] = useState<ThemeMode>(prefersDarkMode ? 'dark' : 'light');
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      }
    }),
    []
  );

  const theme: any = useMemo(
    () => createTheme({
      components: componentsOverride()
    } as any),
    [mode]
  );

  return (
    <StyledEngineProvider injectFirst>
      <ColorModeContext.Provider value={colorMode}>
        <MUIThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </MUIThemeProvider>
      </ColorModeContext.Provider>
    </StyledEngineProvider>
  );
}
