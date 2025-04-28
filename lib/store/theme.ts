import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface ThemeStoreState {
  scheme: "light" | "dark" | "system";
  setScheme: (scheme: "light" | "dark" | "system") => void;
  reset: () => void;
}

const useThemeStore = create<ThemeStoreState>()(
  persist(
    (set) => ({
      scheme: "light",
      setScheme: (scheme) => set({ scheme }),
      reset: () => set({ scheme: "light" }),
    }),
    {
      name: "theme-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);

export default useThemeStore;
