import { FaShoppingCart } from "react-icons/fa";
import { FaSearchPlus } from "react-icons/fa";
import logo from "../../public/images/one.png"
import Image from "next/image";
import Link from "next/link";
import CartLink from "./CartLink";
export default function Navbar() {
  return (
    <div className="w-full h-10 md:h-14 grid grid-cols-4 gap-4 px-4 py-2 bg-blue-500 shadow-xl">
        <Link href={'/'} className="flex justify-start items-center">
      <div className="flex justify-start items-center text-white">
      <Image src={logo} alt="logo" className="w-6 h-5"/>
      <h1>ForAll</h1>
      </div>
        </Link>
      <div className="hidden  bg-white w-full px-2 rounded-md md:flex justify-between items-center">
        <input type="text" placeholder="search" className=""/>
        <FaSearchPlus />
      </div>
     <CartLink/>
      <div className="justify-end flex  items-center text-white">
        <button>Login</button>
      </div>
    </div>
  )
}
