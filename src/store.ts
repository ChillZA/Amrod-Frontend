import { create } from 'zustand';

export interface Customer { id: string; name: string; email: string; }
export interface Product { sku: string; name: string; price: number; }
export interface Order { id: string; customerId: string; totalAmount: number; rowVersion: string; }

interface AppState {
  customers: Customer[];
  products: Product[];
  orders: Order[];
  bannerError: string | null;
  setCustomers: (customers: Customer[]) => void;
  setProducts: (products: Product[]) => void;
  setOrders: (orders: Order[]) => void;
  addOrder: (order: Order) => void;
  setBannerError: (error: string | null) => void;
}

export const useStore = create<AppState>((set) => ({
  customers: [],
  products: [],
  orders: [],
  bannerError: null,
  setCustomers: (customers) => set({ customers }),
  setProducts: (products) => set({ products }),
  setOrders: (orders) => set({ orders }),
  addOrder: (newOrder) => set((state) => ({ orders: [newOrder, ...state.orders] })),
  setBannerError: (bannerError) => set({ bannerError }),
}));