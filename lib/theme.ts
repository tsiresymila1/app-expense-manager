/**
 * Themes
 */

import {
  MD3DarkTheme,
  MD3LightTheme,
  configureFonts,
} from "react-native-paper";
import Colors from "./color";

const fonts = configureFonts({ config: { fontFamily: "NotoSans_400Regular" } });

const BaseLightTheme = {
  ...MD3LightTheme,
  fonts,
};

const BaseDarkTheme = {
  ...MD3DarkTheme,
  fonts,
};

const Themes = {
  light: {
    default: BaseLightTheme,
    green: {
      ...BaseLightTheme,
      roundness: 2,
      colors: {
        ...BaseLightTheme.colors,
        ...Colors.light.green,
      },
    },
  },
  dark: {
    default: BaseDarkTheme,
    green: {
      ...BaseDarkTheme,
      roundness: 2,
      colors: {
        ...BaseDarkTheme.colors,
        ...Colors.dark.green,
      },
    },
  },
};

export default Themes;
