import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export interface User {
  image?: string | null ;
  name: string;
  email: string;
}

interface AuthStoreState {
  token?: string;
  user?: User;
  setAuth: (token?: string, user?: User) => void;
  disconnect: () => void;
}

const useAuthStore = create<AuthStoreState>()(
  persist(
    (set, get) => ({
      setAuth: (token, user) => {
        const prevState = get();
        set({ token: token ?? prevState.token, user: user ?? prevState.user });
      },
      disconnect: () => set({ token: undefined, user: undefined }),
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);

export default useAuthStore;
