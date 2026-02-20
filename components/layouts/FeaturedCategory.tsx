import Container from "../ui/Container";
import axios from "axios";
import FeaturedCategorySlider from "../ui/FeaturedCategorySlider";

type Category = {
  id: number;
  name: string;
  image: string;
};

const FeaturedCategory = async () => {
  const res = await axios.get<Category[]>(
    "https://api.escuelajs.co/api/v1/categories",
  );

  const categories = res.data.slice(1, 4);

  return (
    <section className="bg-[#232321] mt-4 sm:mt-32 pt-12 sm:pt-24">
      <Container>
        <FeaturedCategorySlider categories={categories} />
      </Container>
    </section>
  );
};

export default FeaturedCategory;