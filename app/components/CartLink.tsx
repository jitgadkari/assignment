'use client'
import Link from 'next/link'
import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { useAppSelector } from '../lib/hooks'
import { RootState } from '../lib/store'

export default function CartLink() {
    const items = useAppSelector((state: RootState) => state.cart.items);
  return (
    <Link href={"/cart"} className=" flex justify-end items-center ">
    <div className=" flex justify-end items-center gap-2">
      <div className=" flex items-center text-white">
        <FaShoppingCart />
        <p className="font-extrabold text-yellow-500 ">+{items.length}</p>
      </div>
      <h1 className=" font-semibold text-white">cart  </h1>
    </div>
    </Link>
  )
}
