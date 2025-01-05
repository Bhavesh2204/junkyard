import React from 'react';
import { Carousel, Button, Typography } from 'antd';

const { Title } = Typography;



const carouselContent = [
    {
        image: 'https://lifehacker.com/imagery/articles/01HF2HB7Q9QE83AZJEHJGF5P16/hero-image.fill.size_1248x702.v1699834794.jpg',
        text: 'Sell Your Junk Car Easily',
        description: 'We offer reliable and trustworthy services for all your junkyard needs',
    },
    {
        image: 'https://howtostartanllc.com/images/business-ideas/business-idea-images/junkyard.jpg',
        text: 'Top Prices For Your Vehicle',
        description: 'Experience a quick and hassle-free process with our efficient services.',
    },
    {
        image: 'https://www.motortrend.com/uploads/sites/21/2020/11/010-colorado-junkyard-mustang-row.jpg',
        text: 'Quick And Hassle-Free Process',
        description: 'Get the best value for your unwanted vehicles with our competitive offers.',
    },
    {
        image: 'https://upullrparts.com/wp-content/uploads/2021/09/upullrparts_home_junk_salvage_background-2.jpg',
        text: 'Trustworthy Junkyard Services',
        description: 'Experience a quick and hassle-free process with our efficient services.',
    },
];

const CarouselComponent: React.FC = () => (
    <Carousel autoplay dots={false} className="overflow-hidden shadow-lg w-full">
        {carouselContent.map((item, index) => (
            <div key={index} className="relative w-full">
                <img src={item.image} alt={`carousel-${index}`} className="w-full h-[606px] object-cover" />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
                    <Title style={{marginBottom: '0px'}}level={1} className="carousel-text">
                        {item.text}
                    </Title>
                    <p className="carousel-description">
                        {item.description || 'Default description text here'}
                    </p>
                    <Button type="primary" className="carousel-button mt-2">
                        Read More
                    </Button>
                </div>
            </div>
        ))}
    </Carousel>
);

export default CarouselComponent;
