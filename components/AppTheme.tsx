import {
    DarkTheme as NavigationDarkTheme,
    DefaultTheme as NavigationDefaultTheme,
    ThemeProvider
} from '@react-navigation/native';

import { useAppColorScheme } from '@/hooks/useColorScheme';
import Themes from '@/lib/theme';
import { StatusBar } from 'expo-status-bar';
import { ReactNode } from 'react';
import {
    adaptNavigationTheme,
    MD3DarkTheme,
    MD3LightTheme,
    PaperProvider,
} from 'react-native-paper';

export default function AppTheme({ children }: Readonly<{ children: ReactNode }>) {
    const colorScheme = useAppColorScheme();
    const { LightTheme, DarkTheme } = adaptNavigationTheme({
        reactNavigationLight: NavigationDefaultTheme,
        reactNavigationDark: NavigationDarkTheme,
        materialDark: MD3DarkTheme,
        materialLight: MD3LightTheme,
    });
    const theme = Themes[
        colorScheme ?? 'dark'
    ]["green"]
    return <ThemeProvider value={(colorScheme === 'dark' ? { ...DarkTheme, fonts: NavigationDarkTheme.fonts } : { ...LightTheme, fonts: NavigationDefaultTheme.fonts })}>
        <PaperProvider theme={theme}>
            {children}
            <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
        </PaperProvider>
    </ThemeProvider>
}