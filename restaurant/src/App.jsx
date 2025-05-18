import { useState } from "react";
import RestaurantCard from "./components/RestaurantCard";

const App = () => {
  const [restaurants] = useState([
    {
      name: "Xan Restoranı",
      imageUrl: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
      rating: 4.7,
      cuisine: "Azərbaycan mətbəxi",
    },
    {
      name: "Pizza Palace",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt69VdP5o8YBDMPIgyU48n9gLnndfcpwe62g&s",
      rating: 4.3,
      cuisine: "İtalyan mətbəxi",
    },
    {
      name: "Sushi World",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUyqK1T2rbcaYPeNjNcfINwtTZ276i83YOJQ&s",
      rating: 4.8,
      cuisine: "Yapon mətbəxi",
    },
    {
      name: "Burger House",
      imageUrl: "https://images.unsplash.com/photo-1550547660-d9450f859349",
      rating: 4.1,
      cuisine: "Amerika mətbəxi",
    },
    {
      name: "Lezzet Evi",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAZzVpQxLumkICu-9Hx5FG-BaevJte51dNFXrhWE4IbOI86kVqRa8kzlFEKka3_I2YlU8&usqp=CAU",
      rating: 4.6,
      cuisine: "Türk mətbəxi",
    },
    {
      name: "Green Garden",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNce861laTMRkuhhQS8b8zBdX0c3QS_azuvg&s",
      rating: 4.9,
      cuisine: "Vegetarian",
    },
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-lime-100 py-10 px-4">
      <h1 className="text-4xl font-bold text-center text-green-800 mb-10">Seçilmiş Restoranlar</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {restaurants.map((rest, idx) => (
          <RestaurantCard key={idx} {...rest} />
        ))}
      </div>
    </div>
  );
};

export default App;
