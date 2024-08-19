import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { products, ProductType } from '@/app/productsData/productsData';
import toast from 'react-hot-toast';

interface ItemsState {
  productId: number;
  quantity: number;
}

interface CartState {
  items: ItemsState[];
  totalPrice: number;
  discount: number;  // Added to track discount
  appliedCoupon: string | null;  // Track applied coupon
}

const initialState: CartState = {
  items: [],
  totalPrice: 0,
  discount: 0,  // Initialize discount to 0
  appliedCoupon: null,  // Initialize coupon to null
};

const validCoupons:validCouponsType = {
  DIWALI5: 5, // 5% discount
  SIGNUP7: 7, // 7% discount
};
interface validCouponsType {
  [key: string]: number; // Allow any string as a key
  DIWALI5: number;
  SIGNUP7: number;
}
export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<number>) => {
      const product: ProductType | undefined = products.find((product) => product.productId === action.payload);

      if (!product) {
        console.log("Product not found");
        return;
      }

      const existingItem = state.items.find(item => item.productId === action.payload);

      if (existingItem) {
        existingItem.quantity++;
        toast.success(`Item Already Quantity Increased`);
      } else {
        state.items.push({
          productId: action.payload,
          quantity: 1,
        });
      }

      state.totalPrice = state.items.reduce((total, item) => {
        const product = products.find(p => p.productId === item.productId);
        return total + (product ? product.reducedPrice * item.quantity : 0);
      }, 0);
      
      // Recalculate totalPrice after applying discount
      if (state.appliedCoupon) {
        const discountPercentage = validCoupons[state.appliedCoupon];
        state.discount = (state.totalPrice * discountPercentage) / 100;
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      const existingItem = state.items.find(item => item.productId === action.payload);

      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity--;
          toast.success(`Item's Quantity Decreased`);
        } else {
          state.items = state.items.filter(item => item.productId !== action.payload);
        }
      }

      state.totalPrice = state.items.reduce((total, item) => {
        const product = products.find(p => p.productId === item.productId);
        return total + (product ? product.reducedPrice * item.quantity : 0);
      }, 0);
      
      // Recalculate totalPrice after applying discount
      if (state.appliedCoupon) {
        const discountPercentage = validCoupons[state.appliedCoupon];
        state.discount = (state.totalPrice * discountPercentage) / 100;
      }
    },
    applyCoupon: (state, action: PayloadAction<string>) => {
      const couponCode = action.payload.toUpperCase();
      const discountPercentage = validCoupons[couponCode];

      if (discountPercentage) {
        state.appliedCoupon = couponCode;
        state.discount = (state.totalPrice * discountPercentage) / 100;
        toast.success(`Coupon applied: ${couponCode}`);
      } else {
        toast.error("Invalid coupon code");
      }
    },
  },
});

export const { add, remove, applyCoupon } = cartSlice.actions;

export default cartSlice.reducer;
