import React from 'react';
import ProductCard from '../ProductCard/ProductCard'; // Adjust path if necessary


const FilterBar: React.FC = () => {
  const products = [
    { image: 'https://media.istockphoto.com/id/181802246/photo/discarded-old-car.jpg?s=612x612&w=0&k=20&c=Y9ESJZydcbzmTmzoNY4XnVYo1epOje7tSQfRv9y80FY=', price: '$100' },
    { image: 'https://media.istockphoto.com/id/475788084/photo/part-of-scrap-cars.jpg?s=612x612&w=0&k=20&c=ihed_bR_Vt1JiaZBnoTAM3C_i6CMrnPkImt92n5HlmE=', price: '$200' },
    { image: 'https://media.istockphoto.com/id/960107900/photo/old-car-parked-for-long-time.jpg?s=612x612&w=0&k=20&c=BbYV4rWPz8Ckh6KbvlW3Lnrmxavf8vrQNuj9__bzjEU=', price: '$300' },
    { image: 'https://media.istockphoto.com/id/157437836/photo/truckload-of-scrap-metal.jpg?s=612x612&w=0&k=20&c=pb7XZ48UjjctbckGFwD1Oa7bkZi8EGAtAZBfWnnkfd4=', price: '$400' },
    { image: 'https://media.istockphoto.com/id/509628587/photo/abandoned-pick-up-truck.jpg?s=612x612&w=0&k=20&c=xTXc7rUvFFe1j5EQ9PR3_TgfVWZEhgrWH3U1uL5We8g=', price: '$500' },
    { image: 'https://media.istockphoto.com/id/855295344/photo/rusted-metallic-car-parts.jpg?s=612x612&w=0&k=20&c=JyhMMckkndoxm5uwNSn7GPQ6_ulDrVhNTe1ikqzhhSw=', price: '$600' },
    { image: 'https://media.istockphoto.com/id/96920794/photo/used-car.jpg?s=612x612&w=0&k=20&c=FdsC-gM3_PfJEJhlAmQk_DlgE8Qva_d--seGVfVOeB0=', price: '$700' },
    { image: 'https://media.istockphoto.com/id/519503850/photo/car-tires-pile.jpg?s=612x612&w=0&k=20&c=oAKkRfFZXiqCqa4noJYJ-69IkrBBNaHvzxhp84bEg70=', price: '$800' },
    { image: 'https://media.istockphoto.com/id/1198393727/photo/chrysler-spirit.jpg?s=612x612&w=0&k=20&c=BlHYmr7I_EtGnhmeH9D4W1fLgDuB_Ec55zGrxP_4cS8=', price: '$900' },
  ];

  

  return (
    <>
   
      

    <div className="p-12 bg-white">
      <div className="grid grid-cols-3 gap-8">
        {products.map((product, index) => (
          <ProductCard key={index} image={product.image} price={product.price} />
        ))}
      </div>
    </div>
    </>
  );
};

export default FilterBar;
