import React from 'react';
import { Carousel, Typography, Button } from 'antd';

const { Title } = Typography;

const newCarouselContent = [
    {
        image: 'https://autocare.dexignlab.com/xhtml/images/project/pic1.jpg',
        text: 'Online Vehicle Valuation Tool',
        description: 'Develop an online tool that allows users to enter their vehicle details (make, model, year, condition) to receive an estimated value. This could use algorithms or market data to provide accurate valuations.',
    },
    {
        image: 'https://autocare.dexignlab.com/xhtml/images/project/pic2.jpg',
        text: 'Interactive Vehicle Inventory',
        description: 'Create an interactive inventory system where users can browse available vehicles in the junkyard. Implement search, filter, and sorting options.',
    },
    {
        image: 'https://autocare.dexignlab.com/xhtml/images/our-services/pic1.jpg',
        text: 'Customer Reviews and Ratings',
        description: 'Implement a review and rating system for the junkyard’s services.',
    },
];

const NewCarouselComponent: React.FC = () => {
    return (
        <div className="carousel-wrapper">
            <div className="vertical-text-box">
                <div className="vertical-text"># OUR PROJECTS</div>
            </div>
            <div className="new-carousel-container">
                <Carousel autoplay dots={false} className="new-carousel">
                    {newCarouselContent.map((item, index) => (
                        <div key={index} className="relative w-full">
                            <img
                                src={item.image}
                                alt={`new-carousel-${index}`}
                                className="w-full h-[673.85px] object-cover"
                            />
                            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
                                <Title level={1} style={{ color: 'white', margin: '0' }} className="carousel-text">
                                    {item.text}
                                </Title>
                                <p className="carousel-description text-center">
                                    {item.description || 'Default description text here'}
                                </p>
                                <Button type="primary" className="carousel-button">
                                    Learn More
                                </Button>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>
            <style>
                {`
                    .carousel-wrapper {
                        margin-top:2px;
                        display: flex;
                        align-items: center;
                        height: 740px;
                        border-top: 40px solid rgb(15 23 42); /* Add black line above the carousel */
                        ; 
                    }
                    
                    .vertical-text-box {
                        width: 150px;
                        height: 677px;
                        background-color: rgb(15 23 42);
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        margin-right: 0px;
                        margin-top:-60px;
                    }

                    .vertical-text {
                        color: white;
                        font-size: 60px;
                        font-weight: 900;
                        writing-mode: vertical-rl;
                        text-align: center;
                        transform: rotate(180deg);
                    }
                    
                    .new-carousel-container {
                        width: 1347.7px;
                        flex: 1;
                        margin-top:-57px;
                    }

                    .carousel-text {
                        color: white;
                        font-weight: bold;
                        text-transform: uppercase;
                        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
                    }

                    .carousel-description {
                        color: white;
                        font-size: 16px;
                        max-width: 80%;
                        margin-bottom: 0;
                    }

                    .carousel-button {
                        margin-top: 20px;
                    }
                `}
            </style>
        </div>
    );
};

export default NewCarouselComponent;
