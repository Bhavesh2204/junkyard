import React from 'react';
import HoverCard from '../HoverCards/hovercards';

const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
};

const CardContainer: React.FC = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen bg-gray-800 mt-[-100px]">
            <h1 className="text-white text-3xl mb-8 font-black">SEARCH BY</h1>
            <div className="relative flex items-center gap-8">
                <HoverCard
                    image="https://cdn.jdpower.com/how%20to%20sell%20a%20car%20to%20a%20junkyard.jpg"
                    text="Car"
                    onClick={() => scrollToSection('car-section')}
                />
                <div className="flex flex-col items-center">
                    <div className="w-px h-20 bg-white"></div>
                    <span className="text-white my-2">OR</span>
                    <div className="w-px h-20 bg-white"></div>
                </div>
                <HoverCard
                    image="https://www.ace-autoparts.com/Portals/0/SunBlogNuke/128/50234644_s.jpg"
                    text="Spare Parts"
                    onClick={() => scrollToSection('spare-parts-section')} // Ensure this ID is correct
                />
            </div>
            <button onClick={() => scrollToSection('inventory')}
            className="mt-10 px-3 py-1 bg-blue-500 text-white  hover:bg-blue-600 transition duration-300">
                SEE INVENTORY
            </button>
        </div>
    );
};

export default CardContainer;
