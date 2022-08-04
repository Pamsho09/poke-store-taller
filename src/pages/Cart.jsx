import React from "react";
import ButtonComponent from "../components/ButtonComponent";
import useCartStore from "../store/cartStore";

function Cart() {
  const { cart ,removeFromCart} = useCartStore((state) => state);
  return (
    <div className="w-full h-screen grid place-items-center">
      <div className="w-3/4 flex flex-col  gap-12 justify-start items-center">
        <div className=" w-full grid  h-2  p-2  gap-3 ">
          <div className="w-full p-2 rounded-md shadow-xl flex justify-between items-center">
            <span>Image</span>

            <span>Name pokemon</span>

            <span>price</span>
            <span></span>
          </div>
        </div>
        <div className=" w-full grid max-h-96 h-auto p-2  gap-3 overflow-y-scroll">
          {cart.map((item, index) => {
            return (
              <div
                key={index}
                className="w-full p-2 rounded-md shadow-xl flex justify-between items-center"
              >
                <img src={item.sprites.front_default} alt="" />

                <span>{item.name}</span>

                <span>{item.base_experience}</span>
                <ButtonComponent label="deleted" action={() => removeFromCart(item)} />
              </div>
            );
          })}
        </div>

        <div className="w-full flex justify-end items-center">
            <h1 className="font-bold text-2xl">Total :</h1>
            <span className=" text-2xl">
                 ${
                    cart.reduce((total,item)=>{
                        return total+item.base_experience
                    },0)
                }
            </span>
        </div>
      </div>
    </div>
  );
}

export default Cart;
