import React from 'react';
import { Carousel } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

interface Vehicle {
    images: string[];
    name: string;
    description: string;
    price: string;
    features: string[];
}

const vehicle: Vehicle = {
    images: [
        'https://media.istockphoto.com/id/157502966/photo/yellow-oldsmobile-442-muscle-car.jpg?s=612x612&w=0&k=20&c=KBPvL38D0l-vFq-GBxPW50B_CVi741XQNprVuJO9MmU=',
        'https://media.istockphoto.com/id/1409311236/photo/1969-oldsmobile-442-holiday-coupe.jpg?s=612x612&w=0&k=20&c=-uI8NDLzi32JfukRodaHD6gbC5WWQTUDTIpiOV_iXJA=',
        'https://media.istockphoto.com/id/1454546320/photo/1972-oldsmobile-cutlass-442-hardtop-coupe.jpg?s=612x612&w=0&k=20&c=uMBSY8gxnC4R_2nuWxLMfzuwv_dY4KTn0JYSmeVy5yI=',
    ],
    name: 'Oldsmobile 442',
    description: 'The Oldsmobile 442 is a classic American muscle car known for its powerful V8 engine and sporty design. It offers a thrilling driving experience with its sleek styling and impressive performance.',
    price: '$30,000',
    features: [
        'Powerful V8 engine',
        'Classic muscle car design',
        'Excellent performance',
        'Well-maintained interior',
    ],
};

const customArrow = (direction: 'left' | 'right') => (
    <div
        className={`absolute top-1/2 transform -translate-y-1/2 ${
            direction === 'left' ? 'left-4' : 'right-4'
        } z-10 cursor-pointer bg-white rounded-full p-2 shadow-lg`}
    >
        {direction === 'left' ? <LeftOutlined className="text-black" /> : <RightOutlined className="text-black" />}
    </div>
);

const VehicleDescription: React.FC = () => {
    return (
        <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 h-[500px] relative">
                <Carousel
                    dots={false}
                    arrows
                    prevArrow={customArrow('left')}
                    nextArrow={customArrow('right')}
                    className="overflow-hidden h-full"
                >
                    {vehicle.images.map((image, index) => (
                        <div key={index} className="flex justify-center items-center h-full">
                            <img
                                src={image}
                                alt={`car-${index}`}
                                className="w-full h-full object-cover"
                                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                            />
                        </div>
                    ))}
                </Carousel>
            </div>
            <div className="w-full md:w-1/2 p-8">
                <h1 className="text-3xl font-bold mb-4">{vehicle.name}</h1>
                <p className="text-lg mb-4">{vehicle.description}</p>
                <p className="text-xl font-bold mb-4">{vehicle.price}</p>
                <h2 className="text-xl font-semibold mb-2">Features:</h2>
                <ul className="list-disc pl-5">
                    {vehicle.features.map((feature, index) => (
                        <li key={index} className="text-lg mb-1">{feature}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default VehicleDescription;
