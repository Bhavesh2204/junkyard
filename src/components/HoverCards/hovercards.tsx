import React from 'react';

interface HoverCardProps {
    image: string;
    text: string;
    onClick?: () => void; // Optional click handler
}

const HoverCard: React.FC<HoverCardProps> = ({ image, text, onClick }) => (
    <div
        className="w-64 h-40 bg-gray-200 rounded-lg flex items-center justify-center cursor-pointer"
        onClick={onClick}
    >
        <img src={image} alt={text} className="w-full h-full object-cover rounded-lg" />
        <div className="absolute text-white font-bold text-lg">{text}</div>
    </div>
);

export default HoverCard;
