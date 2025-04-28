import AppTheme from '@/components/AppTheme';
import { JetBrainsMono_400Regular } from '@expo-google-fonts/jetbrains-mono';
import { NotoSans_400Regular } from '@expo-google-fonts/noto-sans';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';

import AppApolloProvider from '@/components/AppApolloProvider';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import "../global.css";


SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    NotoSans_400Regular,
    JetBrainsMono_400Regular,
    ...MaterialCommunityIcons.font,
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }
  console.log(process.env)

  return (
    <AppApolloProvider>
      <AppTheme>
        <Stack screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name="index" />
          <Stack.Screen name="(private)/(tabs)" />
          <Stack.Screen name="+not-found" />
        </Stack>
      </AppTheme>
    </AppApolloProvider>
  );
}
