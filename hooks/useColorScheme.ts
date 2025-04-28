import useThemeStore from "@/lib/store/theme";
import { useColorScheme } from "react-native";
export { useColorScheme } from "react-native";
export const useAppColorScheme = () => {
  const { scheme } = useThemeStore();
  const defaultScheme = useColorScheme();
  return scheme === "system" ? defaultScheme ?? "dark" : scheme;
};
