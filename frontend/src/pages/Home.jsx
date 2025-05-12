import React from "react";
import Hero from "../components/Layout/Hero";
import GenderCollectionSection from "../components/Products/GenderCollectionSection";
import NewArrivals from "../components/Products/NewArrivals";
import ProductDetails from "../components/Products/ProductDetails";
import ProductGrid from "../components/Products/ProductGrid";
import FeaturedCollection from "../components/Products/FeaturedCollection";

const Home = () => {
  const placeholderProducts = [
    {
      _id: 2,
      name: "product 2",
      price: 100,
      images: [{ url: "https://picsum.photos/500/500?random=2" }],
    },
    {
      _id: 3,
      name: "product 3",
      price: 100,
      images: [{ url: "https://picsum.photos/500/500?random=2" }],
    },
    {
      _id: 4,
      name: "product 4",
      price: 100,
      images: [{ url: "https://picsum.photos/500/500?random=2" }],
    },
    {
      _id: 1,
      name: "product 1",
      price: 100,
      images: [{ url: "https://picsum.photos/500/500?random=2" }],
    },
    {
      _id: 5,
      name: "product 1",
      price: 100,
      images: [{ url: "https://picsum.photos/500/500?random=2" }],
    },
    {
      _id: 6,
      name: "product 2",
      price: 100,
      images: [{ url: "https://picsum.photos/500/500?random=2" }],
    },
    {
      _id: 7,
      name: "product 3",
      price: 100,
      images: [{ url: "https://picsum.photos/500/500?random=2" }],
    },
    {
      _id: 8,
      name: "product 4",
      price: 100,
      images: [{ url: "https://picsum.photos/500/500?random=2" }],
    },
  ];

  return (
    <>
      <Hero />
      <GenderCollectionSection />
      <NewArrivals />

      {/* Best Seller */}
      <ProductDetails />

      <div className="container mx-auto  ">
        <h2 className="text-3xl text-center font-bold mb-4 ">
          Top Shoes for Women
        </h2>
        <ProductGrid products={placeholderProducts} />
      </div>

      <FeaturedCollection />
    </>  );
};

export default Home;
