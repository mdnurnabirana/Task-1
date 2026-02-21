import Container from "../ui/Container";
import axios from "axios";
import RecommendedProductSlider from "../ui/RecommendedProductSlider";

type Product = {
  id: number;
  title: string;
  price: number;
  images: string[];
};

const RecommendedProduct = async () => {
  const res = await axios.get<Product[]>(
    "https://api.escuelajs.co/api/v1/products?offset=0&limit=8",
  );

  const products = res.data;

  return (
    <section className="mt-8 sm:mt-32">
      <Container>
        <RecommendedProductSlider products={products} />
      </Container>
    </section>
  );
};

export default RecommendedProduct;