import React from 'react';
import { useThemeContext } from '@/components/common/CustomThemeProvider';

const useDarkTheme = () => {
  const { theme, toggleTheme } = useThemeContext();
  const isDark = React.useMemo(() => theme === 'dark', [theme]);

  return { isDark, toggleTheme };
};

export default useDarkTheme;
