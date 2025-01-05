import React, { useState, useEffect } from 'react';
import CarouselComponent from '../../HomeCarousel/CarouselComponent.tsx';
import FormComponent from '../../../forms/ContactUsForm/FormComponent.tsx';
import HowItWorksComponent from '../../HomeHowItWorks/HowItWorksComponent.tsx';
import CardsComponent from '../../HomeCards/CardsComponent.tsx';
import NewCarouselComponent from '../../OurProjects/ProjectCarousel.tsx';
import WhatClientsSay from '../../WhatClientSays/whatclientsays.tsx';
import CounterComponent from '../../Counter/counter.tsx';

import { FloatButton } from 'antd';
import { ArrowUpOutlined } from '@ant-design/icons';

const HomePageDemo: React.FC = () => {
    const [showFloatButton, setShowFloatButton] = useState<boolean>(false);

    // Function to scroll to the top of the page
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Effect to show/hide the float button based on scroll position
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setShowFloatButton(true);
            } else {
                setShowFloatButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="dark:bg-gray-900 dark:text-white bg-white text-black min-h-screen">
            <CarouselComponent />
            <FormComponent />
            <HowItWorksComponent />
            <NewCarouselComponent />
            <CardsComponent />
            <WhatClientsSay/>
            <CounterComponent/>
            {showFloatButton && (
                <FloatButton
                    icon={<ArrowUpOutlined />}
                    onClick={scrollToTop}
                    tooltip="Back to Top"
                    style={{ right: 20, bottom: 20, transition: 'opacity 0.5s' }} // Smooth transition for fading
                />
            )}
            <style>
                {`  
                    @keyframes fadeIn {
                        from {
                            opacity: 0;
                            transform: translateY(20px);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }

                    @keyframes fadeOut {
                        from {
                            opacity: 1;
                            transform: translateY(0);
                        }
                        to {
                            opacity: 0;
                            transform: translateY(20px);
                        }
                    }

                    .fade-in {
                        animation: fadeIn 1s ease-out forwards;
                    }

                    .fade-out {
                        animation: fadeOut 1s ease-out forwards;
                    }

                    .fade-in-left {
                        animation: fadeInLeft 1s ease-out forwards;
                    }

                    .fade-out-left {
                        animation: fadeOutLeft 1s ease-out forwards;
                    }

                    .fade-in-right {
                        animation: fadeInRight 1s ease-out forwards;
                    }

                    .fade-out-right {
                        animation: fadeOutRight 1s ease-out forwards;
                    }

                    .carousel-text {
                    color: white !important; /* Ensure the text color is white */
                    font-weight: bold; /* Make text bolder */
                    text-transform: uppercase; /* Make text capitalized */
                    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8); /* Optional: Add a shadow for better contrast */
                    
                }

                    .carousel-description {
                    
                        color: white; /* Ensure description text is white */
                        font-size: 16px; /* Adjust this value as needed */
                        max-width: 80%; /* Adjust the width as needed */
                        margin-bottom: 0px ; /* Remove or adjust margin-bottom */
                    }

                    .carousel-button {
                        font-size: 16px; /* Adjust this value as needed */
                        height: 35px;
                        border-radius: 5px;
                    }


                    

                    .heading {
                        font-weight: bold;
                    }

                    .cards-container {
                        background: black;
                        gap: 25px;
                        padding: 95px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        margin-bottom: -33px;
                    }

                    .float-button {
                        opacity: 1;
                        transition: opacity 0.5s ease;
                    }
                `}
            </style>
        </div>
    );
};

export default HomePageDemo;
