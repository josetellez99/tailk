import { create } from 'zustand'

interface MyState {
  open: boolean;
  toggle: () => void;
}

export const useOpenSideMenu = create<MyState>((set) => ({
  open: false,
  toggle: () => set((state) => ({ open : !state.open })),
}))