import RecommendedProduct from "@/components/layouts/RecommendedProduct";
import Container from "@/components/ui/Container";
import CartItems from "@/components/ui/CartItems";

const Cart = () => {
  return (
    <section className="mt-6 sm:mt-8 text-[#232321]">
      <Container>
        <h1 className="font-semibold text-2xl sm:text-[32px] px-0 sm:px-10">
          Saving to celebrate
        </h1>
        <p className="mt-2 text-xs sm:text-sm font-open-sans w-full px-0 sm:px-10">
          Enjoy up to 60% off thousands of styles during the End of Year sale -
          while suppiles last. No code needed.
        </p>

        <p className="mt-2 text-xs sm:text-sm font-open-sans w-full px-0 sm:px-10">
          <span className="underline">Join us</span> or{" "}
          <span className="underline">Sing in</span>
        </p>

        <CartItems />
      </Container>

      <RecommendedProduct />
    </section>
  );
};

export default Cart;