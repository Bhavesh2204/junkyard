import React, { useEffect, useRef } from 'react';
import { Row, Col, Card, Typography } from 'antd';


const { Title, Link } = Typography;

const cardData = [
    {
        image: 'https://stage-drupal.car.co.uk/s3fs-public/styles/original_size/public/2020-05/the-process-car-recycling.jpg?Pv9LUqTHMqbGNjjl4u_MdA_0mtmF68RP&itok=QtD266z9',
        title: 'Vehicle Recycling',
        description: 'Service to dismantle vehicles and recycle usable parts, reducing waste and providing affordable parts for other customers.',
        link: 'https://example.com/project1'
    },
    {   
        image: 'https://www.scrapware.com/wp-content/uploads/2020/08/Get-to-Know-the-Many-Uses-of-Recycled-Scrap-Metal-1024x804.jpg',
        title: 'Scrap Metal Recycling',
        description: 'Collecting and recycling scrap metal from vehicles, which can then be sold to metal processing companies.',
        link: 'https://example.com/project2'
    },
    {
        image: 'https://images.squarespace-cdn.com/content/v1/600722b6cfe68356eeb8e9d2/ed45a8af-c9d9-493c-bf0e-37409a62dfef/free+junk+car+removal+service.jpg',
        title: 'Vehicle Disposal',
        description: 'Safe and environmentally friendly disposal of end-of-life vehicles.',
        link: 'https://example.com/project3'
    },
    {
        image: 'https://www.mach1services.com/wp-content/uploads/2022/01/websites-to-buy-auto-parts-online.jpg',
        title: 'Parts Sales',
        description: 'Selling salvaged parts from junked vehicles to customers looking for affordable replacement parts.',
        link: 'https://example.com/project4'
    },
    {
        image: 'https://blog.bullseyelocations.com/hs-fs/hubfs/thestandingdesk-pn6tf73O2As-unsplash.jpg?width=880&length=880&name=thestandingdesk-pn6tf73O2As-unsplash.jpg',
        title: 'Online Parts Locator',
        description: 'A tool or service that helps customers locate specific parts available in the junkyard inventory.',
        link: 'https://example.com/project5'
    },
    {
        image: 'https://keshavtowingservice.in/wp-content/uploads/2023/06/Keshav-Towing-Services-india.webp',
        title: 'Towing Service',
        description: 'Offering towing services to bring junk vehicles from a customer’s location to the junkyard.',
        link: 'https://example.com/project6'
    }
];

const CardsComponent: React.FC = () => {
    const cardsRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (cardsRef.current) {
                const cards = cardsRef.current.querySelectorAll('.card');
                const windowHeight = window.innerHeight;

                cards.forEach(card => {
                    const cardTop = card.getBoundingClientRect().top;

                    if (cardTop < windowHeight * 0.8) { // Trigger fade-in when 80% of the card is visible
                        card.classList.add('visible');
                    }
                });
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Run on initial load

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="cards-wrapper">
            <div className="horizontal-text-box">
                
                <div className="horizontal-text">// OUR SERVICES //</div>
            </div>
            <div className="cards-container" ref={cardsRef}>
                <Row gutter={[16, 16]}>
                    {cardData.map((item, index) => (
                        <Col key={index} xs={24} sm={12} md={8}>
                            <Card
                                hoverable
                                cover={<img alt={`card-${index}`} src={item.image} style={{ height: '100px', borderRadius: '0px', objectFit: 'cover' }} />}
                                style={{ width: '380px', height: '275px', borderRadius: '10px' }}
                                className="card"
                            >
                                <Title level={5} className="card-title">{item.title}</Title>
                                <p className="card-description">{item.description}</p>
                                <Link href={item.link} target="_blank" className="card-link">
                                    Learn More
                                </Link>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
            <style>
                {`
                .cards-wrapper {
                    margin-top: -40px;
                }

                .horizontal-text-box {
                    width: 100%;
                    height: 130px;
                    background-color: rgb(15 23 42);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-bottom: 2px;
                    position: relative;
                }

                .icon {
                    color: white;
                    font-size: 60px;
                    position: absolute;
                    left: 490px;
                }

                .horizontal-text {
                    color: white;
                    font-size: 60px;
                    font-weight: 900;
                    margin-left: 60px; /* Space for the icon */
                }

                .cards-container {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 16px;
                    background: rgb(15 23 42) !important; /* Card container background color */
                }

                .card {
                    opacity: 0; /* Start as invisible */
                    transition: opacity 0.6s ease-in-out; /* Smooth fade-in */
                }

                .card.visible {
                    opacity: 1; /* Fully visible */
                }

                .card-title {
                    color: white;
                    font-size: 14px; /* Smaller font size for title */
                    font-weight: bold;
                }

                .card-description {
                    color: black;
                    font-size: 12px; /* Smaller font size for description */
                    margin: 8px 0; /* Reduced margin */
                }

                .card-link {
                    color: #1890ff; /* Ant Design primary link color */
                    font-weight: bold;
                }

                .ant-card {
                    box-shadow: 0 4px 9px rgba(0, 0, 0, 0.2); /* Add box shadow to cards */
                }
                `}
            </style>
        </div>
    );
};

export default CardsComponent;
