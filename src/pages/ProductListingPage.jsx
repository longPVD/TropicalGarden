// import React from 'react';
import Header from "../components/Header";
import PlantCard from "../components/PlantCard";

const plants = [
  {
    id: 1,
    name: "Fiddle Leaf Fig",
    price: 30,
    image: "/images/plant1.png",
    description: "Good for health",
  },
  {
    id: 2,
    name: "Money Tree",
    price: 25,
    image: "/images/plant2.jpg",
    description: "Make fresh atmosphere",
  },
  {
    id: 3,
    name: "Banana Tree",
    price: 20,
    image: "/images/plant3.jpg",
    description: "Filter dust",
  },
  {
    id: 4,
    name: "Palm Tree",
    price: 40,
    image: "/images/plant4.png",
    description: "Keep plants alive",
  },
  {
    id: 5,
    name: "Pothos",
    price: 35,
    image: "/images/plant5.jpg",
    description: "Keep plants alive",
  },
  {
    id: 6,
    name: "Aloe Vera",
    price: 15,
    image: "/images/plant6.jpg",
    description: "Keep plants alive",
  },
];

const ProductListingPage = () => (
  <>
    {" "}
    <Header />{" "}
    <div className="mt-14 grid grid-cols-3 gap-4 p-8">
      {" "}
      {plants.map((plant) => (
        <PlantCard key={plant.id} plant={plant} />
      ))}{" "}
    </div>{" "}
  </>
);

export default ProductListingPage;
