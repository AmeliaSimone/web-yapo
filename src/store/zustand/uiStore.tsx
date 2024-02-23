import { StateCreator, create } from "zustand";
import { persist } from "zustand/middleware";

type uiState = {
  navBar: boolean;
  email: string;
  isValidEmail: boolean;
  clipboard: boolean;

  setNavBar: () => void;
  setEmail: (email: string) => void;
  setIsValidEmail: (isValid: boolean) => void;
  setClipboard: () => void;
};

const store: StateCreator<uiState> = (set) => ({
  navBar: false,
  email: "",
  isValidEmail: true,
  clipboard: false,

  setEmail: (email: string) => {
    set((state) => ({ ...state, email }));
  },

  setNavBar: async () => {
    set((state) => ({ ...state, navBar: !state.navBar }));
  },

  setIsValidEmail: async (isValid: boolean) => {
    set((state) => ({ ...state, isValidEmail: isValid }));
  },

  setClipboard: async () => {
    set((state) => ({ ...state, clipboard: true }));
    setTimeout(() => {
      set((state) => ({ ...state, clipboard: false }));
    }, 2000);
  },
});

export const uiStore = create<uiState>()(
  persist(store, { name: "ui-PF-term" })
);