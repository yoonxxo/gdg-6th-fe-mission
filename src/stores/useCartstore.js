import { create } from "zustand";

export const useCartStore = create((set) => ({
  cartItems: [],

  addToCart: (cartItem) =>
    set((state) => ({
      cartItems: [...state.cartItems, cartItem],
    })),

  clearCart: () =>
    set(() => ({
      cartItems: [],
    })),
}));
