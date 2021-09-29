import React, { useState } from 'react';
import { getThemeMode, saveThemeMode } from '../services/themeService';
import { createTheme, ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import themeModeEnum from '../enums/themeModeEnum';

function ThemeProvider({ children }) {
  const [themeMode, setThemeMode] = useState(getThemeMode() || themeModeEnum.DARK);

  const toggleTheme = () => {
    setThemeMode((prevThemeMode) => {
      const newThemeMode = prevThemeMode === themeModeEnum.LIGHT ? themeModeEnum.DARK : themeModeEnum.LIGHT;
      saveThemeMode(newThemeMode);
      return newThemeMode;
    })
  }

  const theme = createTheme({
    palette: {
      mode: themeMode,
    },
  });

  return <MUIThemeProvider theme={{...theme, toggleTheme}}>{children}</MUIThemeProvider>
}

export default ThemeProvider;