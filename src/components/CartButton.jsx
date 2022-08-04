import React from "react";
import { useNavigate } from "react-router-dom";
import iconCart from "../assets/Cart.svg";
import useCartStore from "../store/cartStore";

function CartButton() {
  const navigate = useNavigate();
  const {cart}=useCartStore((state)=>state);
  return (
    <div
      className="fixed text-[11px] text-center justify-center items-center w-14 h-14 p-3 flex flex-col bg-purple-600 rounded-md bottom-7 left-7 cursor-pointer text-white"
      onClick={() => {
        navigate("/cart");
      }}
    >
      {
        cart.length
      }
      <img className="w-4 h-4" src={iconCart} alt="carticon" />
    </div>
  );
}

export default CartButton;
