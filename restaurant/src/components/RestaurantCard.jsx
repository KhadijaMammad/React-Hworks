import { Star } from "lucide-react";

const RestaurantCard = ({ name, imageUrl, rating, cuisine }) => {
  return (
    <div className="bg-white rounded-2xl text-center shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 w-72 overflow-hidden cursor-pointer p-6">
      <img src={imageUrl} alt={name} className="h-44 w-full object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800 mb-1 hover:text-yellow-500 transition-all duration-700">{name}</h2>
        <p className="text-sm text-gray-500 mb-3">{cuisine}</p>
        <div className="flex gap-1 text-yellow-500 items-center justify-center">
          <Star size={19} fill="currentColor" stroke="none" />
          <span className="text-gray-800 font-semibold ">{rating}</span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
