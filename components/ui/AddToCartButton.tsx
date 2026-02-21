"use client";

import { useCart } from "@/context/CartContext";
import toast from "react-hot-toast";

type Props = {
  id: number;
  title: string;
  price: number;
  image: string;
};

export default function AddToCartButton({ id, title, price, image }: Props) {
  const { addToCart, cart } = useCart();

  const alreadyInCart = cart.some((item) => item.id === id);

  const handleAdd = () => {
    addToCart({ id, title, price, image });
    toast.success("Added to cart");
  };

  return (
    <button
      onClick={handleAdd}
      disabled={alreadyInCart}
      className={`
          flex-1 py-4 px-6 rounded-xl font-semibold uppercase text-sm
          ${
            alreadyInCart
              ? "bg-gray-400 text-gray-700 cursor-not-allowed"
              : "bg-[#232321] text-white hover:bg-black"
          }
        `}
    >
      {alreadyInCart ? "In Cart" : "Add to Cart"}
    </button>
  );
}