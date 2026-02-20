import Container from "@/components/ui/Container";
import Image from "next/image";
import axios from "axios";
import ButtonOne from "@/components/ui/ButtonOne";
import { FiHeart } from "react-icons/fi";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: {
    id: number;
    name: string;
    slug: string;
    image: string;
  };
  images: string[];
};

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

const ProductDetail = async ({ params }: PageProps) => {
  const { id } = await params;
  const productId = Number(id ?? "");

  if (isNaN(productId)) {
    return <p className="text-center mt-8 text-xl">Invalid product ID.</p>;
  }

  let product: Product | null = null;

  try {
    const res = await axios.get<Product>(
      `https://api.escuelajs.co/api/v1/products/${productId}`,
    );
    product = res.data;
  } catch (err) {
    product = null;
  }

  if (!product) {
    return <p className="text-center mt-8 text-xl">Product not found.</p>;
  }

  return (
    <section className="mt-8">
      <Container>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1 rounded-xl">
            <div className="grid grid-cols-2 gap-4">
              {product.images.map((img, idx) => (
                <div
                  key={idx}
                  className="rounded-xl overflow-hidden border-2 border-transparent"
                >
                  <Image
                    src={img}
                    alt={`${product.title} ${idx + 1}`}
                    width={430}
                    height={510}
                    className="object-cover w-full h-full"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 flex flex-col gap-4">
            <button className="bg-[#4A69E2] rounded-xl py-3 px-4 text-white font-semibold text-sm w-fit">
              New Releases
            </button>
            <h1 className="mt-2 uppercase font-semibold text-[32px] text-[#232321] line-clamp-2">
              {product.title}
            </h1>
            <p className="text-[#4A69E2] font-semibold text-2xl">
              $ {product.price}
            </p>

            <h1 className="font-semibold text-[16px] text-[#232321] uppercase">
              Color
            </h1>
            <div className="flex justify-between gap-4 w-fit">
              <div className="h-8 w-8 rounded-full bg-[#253043] outline-3 outline-offset-5"></div>
              <div className="h-8 w-8 rounded-full bg-[#707E6E]"></div>
            </div>

            <div className="flex justify-between uppercase font-semibold text-[16px] mt-8">
              <h1 className="text-[16px]">Size</h1>
              <h1 className="font-medium">Size Chart</h1>
            </div>
            <div className="flex justify-between w-fit gap-1">
              <button className="rounded-lg text-white px-4 py-3 bg-[#232321] font-semibold">
                38
              </button>
              <button className="rounded-lg text-[#8F8C91] px-4 py-3 bg-[#D2D1D3] font-semibold disabled">
                39
              </button>
              <button className="rounded-lg text-[#8F8C91] px-4 py-3 bg-[#D2D1D3] font-semibold disabled">
                40
              </button>
              <button className="rounded-lg text-[#232321] px-4 py-3 bg-white font-semibold">
                41
              </button>
              <button className="rounded-lg text-[#232321] px-4 py-3 bg-white font-semibold">
                42
              </button>
              <button className="rounded-lg text-[#232321] px-4 py-3 bg-white font-semibold">
                43
              </button>
              <button className="rounded-lg text-[#232321] px-4 py-3 bg-white font-semibold">
                44
              </button>
              <button className="rounded-lg text-[#232321] px-4 py-3 bg-white font-semibold">
                45
              </button>
            </div>
            <div className="flex justify-start gap-2 mt-8">
              <button className="bg-[#232321] rounded-lg text-white font-medium uppercase py-4 text-sm w-full">
                Add to Cart
              </button>
              <button className="bg-[#232321] rounded-lg px-4 py-4 text-white">
                <FiHeart size={18} />
              </button>
            </div>
            <ButtonOne>Buy it Now</ButtonOne>

            <div className="mt-8">
              <h1 className="uppercase font-semibold text-[16px]">
                About the product
              </h1>
              <p className="font-open-sans font-normal mt-4 text-[#232321]">
                {product.description}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProductDetail;