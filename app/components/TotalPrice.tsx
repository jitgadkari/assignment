'use client';

import React, { useState } from 'react';
import { useAppSelector, useAppDispatch } from "../lib/hooks";
import { applyCoupon } from '../lib/features/cart/cartSlice';

export default function TotalPrice() {
    const items = useAppSelector((state) => state.cart.items);
    const totalPrice = useAppSelector((state) => state.cart.totalPrice);
    const discount = useAppSelector((state) => state.cart.discount);
    const finalPrice = totalPrice - discount;

    const [couponCode, setCouponCode] = useState('');
    const dispatch = useAppDispatch();

    const handleApplyCoupon = () => {
        dispatch(applyCoupon(couponCode));
    };
    if (items.length === 0) {
        return (
            <div className="w-full p-4 bg-white rounded-md shadow-lg">
                <h1 className="text-2xl font-semibold text-gray-800 mb-4">Your Cart is Empty</h1>
                <p className="text-gray-600">Add some products to your cart to see the order summary and apply discounts.</p>
            </div>
        );
    }
    return (
        <div className="w-full p-4 bg-white rounded-md shadow-lg">
            <h1 className="text-2xl font-semibold text-gray-800 mb-4">Order Summary</h1>
            <div className="flex justify-between items-center">
                <span className="text-lg font-medium text-gray-700">Actual Price:</span>
                <span className="text-xl font-bold text-black-600">{`₹${totalPrice.toFixed(2)}`}</span>
            </div>
            {discount > 0 && (
                <div className="flex justify-between items-center mt-2">
                    <span className="text-lg font-medium text-gray-500">Discount:</span>
                    <span className="text-xl font-bold text-red-600">-₹ {discount.toFixed(2)}</span>
                </div>
            )}
            {discount > 0 && (
                <div className="flex justify-between items-center mt-2">
                    <span className="text-lg font-medium text-gray-500">Final Price:</span>
                    <span className="text-xl font-bold text-green-600">-₹ {finalPrice.toFixed(2)}</span>
                </div>
            )}
            <div className="mt-4">
                <h3 className="text-lg font-semibold text-gray-700">Apply Discounts</h3>
                <p className="text-gray-600 mb-2">Available coupons:</p>
                <div className="text-gray-600">
                    <p>Sign up and get 7% off: use coupon code <strong>SIGNUP7</strong></p>
                </div>
                <div className="mt-4">
                    <input
                        type="text"
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                        className="w-full p-2 border rounded-md"
                        placeholder="Enter coupon code"
                    />
                    <button
                        onClick={handleApplyCoupon}
                        className="w-full mt-2 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
                    >
                        Apply Coupon
                    </button>
                </div>
            </div>
            <button className="w-full mt-6 bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition duration-200">
                Place Order
            </button>
        </div>
    );
}
