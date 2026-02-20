import React from "react";
import Container from "../ui/Container";
import ButtonOne from "../ui/ButtonOne";
import ReviewCard from "../ui/ReviewCard";

const Reviews = () => {
  return (
    <section className="mt-4 sm:mt-32">
      <Container>
        <div className="flex justify-between items-end">
          <h1 className="font-semibold text-3xl sm:text-6xl uppercase">
            Reviews
          </h1>
          <ButtonOne>See All</ButtonOne>
        </div>
        <div className="mt-4 sm:mt-12 flex flex-col sm:flex-row justify-between gap-4">
          <ReviewCard userImg="/reviewUser1.png" />
          <ReviewCard userImg="/reviewUser2.png" />
          <ReviewCard userImg="/reviewUser3.png" />
        </div>
      </Container>
    </section>
  );
};

export default Reviews;