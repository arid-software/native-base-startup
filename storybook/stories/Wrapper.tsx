import React, { useEffect } from 'react';
import { NativeBaseProvider, extendTheme, theme as nbTheme } from 'native-base';
import Config from '../../nativebase.config';
import { Platform } from 'react-native';

export default ({ children, theme }: any) => {
  const customTheme = extendTheme({
    config: {
      initialColorMode: 'light',
    },
    colors: {
      primary: nbTheme.colors.violet,
      customGray: '#2F3948',
    },
    sizes: {
      container: '1016px',
    },
  });

  // Move this to index.html later
  useEffect(() => {
    if (Platform.OS === 'web') {
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100%';
    }
  }, []);

  return (
    <NativeBaseProvider theme={theme || customTheme} config={Config}>
      {children}
    </NativeBaseProvider>
  );
};
