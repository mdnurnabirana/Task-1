import React from "react";
import Container from "../ui/Container";
import ButtonOne from "../ui/ButtonOne";
import FeaturedProductCard from "../ui/FeaturedProductCard";
import axios from "axios";

type Product = {
  id: number;
  title: string;
  price: number;
  images: string[];
};

const FeaturedProducts = async () => {
  const res = await axios.get<Product[]>(
    "https://api.escuelajs.co/api/v1/products?offset=0&limit=8",
  );

  const products = res.data;

  return (
    <section className="mt-6 sm:mt-22">
      <Container>
        <div className="flex justify-between items-center sm:items-end">
          <h1 className="font-semibold text-2xl sm:text-7xl uppercase max-w-150">
            Don’t miss out new drops
          </h1>
          <ButtonOne>Shop New Drops</ButtonOne>
        </div>

        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-5">
          {products.map((product) => (
            <FeaturedProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              image={product.images[0]}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FeaturedProducts;
