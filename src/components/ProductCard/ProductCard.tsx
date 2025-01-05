import React from 'react';

interface ProductCardProps {
  image: string;
  price: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, price }) => {
  return (
    <div className="border border-gray-300 rounded-lg shadow-md overflow-hidden p-4 ">
      <img src={image} alt="Product" className="w-full h-36 object-cover" />
      <div className="p-4">
        <p className="text-lg font-semibold text-gray-800">{price}</p>
        <button className="mt-4 w-full bg-blue-500 text-white py-1 rounded hover:bg-blue-600 transition duration-300">
          Buy
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
