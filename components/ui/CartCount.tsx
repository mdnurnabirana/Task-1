"use client";

import { useEffect, useState } from "react";

export default function CartCount() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const update = () => {
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");
      const total = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
      setCount(total);
    };

    update();

    window.addEventListener("storage", update);
    window.addEventListener("cart-updated", update);

    return () => {
      window.removeEventListener("storage", update);
      window.removeEventListener("cart-updated", update);
    };
  }, []);

  return (
    <div className="bg-[#FFA52F] h-8 w-8 rounded-full flex items-center justify-center font-semibold text-sm text-black">
      {count}
    </div>
  );
}