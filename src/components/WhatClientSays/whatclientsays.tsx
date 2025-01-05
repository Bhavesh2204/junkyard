import React from 'react';
import { Carousel } from 'antd';
import { Row, Col, Typography } from 'antd';

const { Title, Paragraph } = Typography;

const testimonials = [
    {
        text: "Excellent service and very professional team. Highly recommend!",
        author: "Jane Doe",
        image: "https://trainingindustry.com/content/uploads/2018/07/Strategic-Sales-Conversations-8.6.18.jpg", // Placeholder image URL
        rating: 5
    },
    {
        text: "Great experience, quick and reliable service.",
        author: "John Smith",
        image: "https://img.freepik.com/free-photo/customer-talking-with-mechanic-workshop_329181-11854.jpg",
        rating: 4
    },
    {
        text: "Very satisfied with the quality of service and customer support.",
        author: "Emily Johnson",
        image: "https://images.fineartamerica.com/images/artworkimages/medium/3/1-mechanic-showing-customer-the-problem-with-car-at-the-repair-gar-anek-suwannaphoom.jpg",
        rating: 5
    },
    {
        text: "The team was very helpful and the process was seamless.",
        author: "Michael Brown",
        image: "https://cfx-wp-images.imgix.net/2020/06/Apparaise.jpg?auto=compress%2Cformat&ixlib=php-3.3.1&s=43a13115faadb8f39158763ed5f799ea",
        rating: 4
    }
];

const WhatClientsSay: React.FC = () => {
    return (
        <div className="what-clients-say">
            <Title level={2} className="section-heading"> 
                <span style={{ color: 'black' }}>WHAT </span>
                <span style={{ color: 'orange' }}>CLIENT SAYS</span>
            </Title>
            <Paragraph className="section-description">
                Hear from our satisfied customers about their experiences with our services. We take pride in delivering exceptional service and ensuring every client leaves happy.
            </Paragraph>
            
            <Carousel 
                autoplay
                dots={false}
                style={{ width: '100%', height: '250px', marginTop: '30px', background:'rgb(15 23 42)' , borderRadius:'15px', }}
                autoplaySpeed={3000}
            >
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="carousel-slide">
                        <Row gutter={[16, 16]} align="middle" justify="center">
                            <Col span={12}>
                                <img
                                    src={testimonial.image}
                                    alt={`testimonial-${index}`}
                                    style={{ width: '800px', height: '250px',  objectFit: 'cover',borderTopLeftRadius: '15px',
                                        borderBottomLeftRadius: '15px', }}
                                />
                            </Col>
                            <Col span={12}>
                                <div className="testimonial-content">
                                    <Paragraph className="testimonial-text">{testimonial.text}</Paragraph>
                                    <Title level={5} className="testimonial-author">{testimonial.author}</Title>
                                    <div className="testimonial-rating">
                                        {'★'.repeat(testimonial.rating)}{'☆'.repeat(5 - testimonial.rating)}
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                ))}
            </Carousel>
            
            {/*2nd carousel*/}
            <Carousel 
    autoplay
    dots={false}
    style={{ width: '100%', height: '250px', marginTop: '30px', background:'rgb(15 23 42)', borderRadius: '15px' }}
    autoplaySpeed={3000}
>
    {testimonials.map((testimonial, index) => (
        <div key={index} className="carousel-slide">
            <Row gutter={[16, 16]} align="middle" justify="center">
                <Col span={12}>
                    <div className="testimonial-content">
                        <Paragraph className="testimonial-text">{testimonial.text}</Paragraph>
                        <Title level={5} className="testimonial-author">{testimonial.author}</Title>
                        <div className="testimonial-rating">
                            {'★'.repeat(testimonial.rating)}{'☆'.repeat(5 - testimonial.rating)}
                        </div>
                    </div>
                </Col>
                <Col span={12}>
                    <img
                        src={testimonial.image}
                        alt={`testimonial-${index}`}
                        style={{ width: '800px', height: '250px', objectFit: 'cover', borderTopRightRadius: '15px', borderBottomRightRadius: '15px' }}
                    />
                </Col>
            </Row>
        </div>
    ))}
</Carousel>

            
            <style>
                {`
                .what-clients-say {
                    padding: 20px;
                    background-color: #f9f9f9;
                }

                .section-heading {
                    text-align: center;
                    margin-bottom: 10px;
                    margin-top: 20px;
                    color: #333;
                }

                .section-description {
                    text-align: center;
                    margin-bottom: 20px;
                    color: #666;
                    font-size: 16px;
                    line-height: 1.5;
                }

                .carousel-slide {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .testimonial-content {
                    text-align: centre;
                }

                .testimonial-text {
                    font-size: 16px;
                    color: white;
                }

                .testimonial-author {
                    color: white !important;
                    margin-top: 10px;
                }

                .testimonial-rating {
                    margin-top: 10px;
                    color: #f39c12; /* Orange color for stars */
                }
                `}
            </style>
        </div>
    );
};

export default WhatClientsSay;
