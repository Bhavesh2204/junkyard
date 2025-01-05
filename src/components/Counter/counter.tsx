import React, { useEffect, useState, useRef } from 'react';
import { Card, Col, Row, Typography } from 'antd';
import { UserOutlined, ShopOutlined, ContainerOutlined } from '@ant-design/icons';

const { Title } = Typography;

const counters = [
    {
        icon: <UserOutlined style={{ fontSize: '24px', color: '#1890ff' }} />,
        title: 'Current Customers',
        count: 1200,
    },
    {
        icon: <ShopOutlined style={{ fontSize: '24px', color: '#52c41a' }} />,
        title: 'Total Dealerships',
        count: 150,
    },
    {
        icon: <ContainerOutlined style={{ fontSize: '24px', color: '#fa541c' }} />,
        title: 'Total Junk per Year',
        count: '20,000 tons',
    }
];

const CounterComponent: React.FC = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [count, setCount] = useState<number[]>([0, 0, 0]);

    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // Stop observing once visible
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    useEffect(() => {
        if (isVisible) {
            counters.forEach((_, index) => {
                let start = 0;
                const end = index === 2 ? 20000 : counters[index].count;
                const duration = 2000;
                const stepTime = 50;
                const totalSteps = Math.ceil(duration / stepTime);
                const increment = (end - start) / totalSteps;

                const interval = setInterval(() => {
                    start += increment;
                    if (start >= end) {
                        setCount((prev) => {
                            const newCount = [...prev];
                            newCount[index] = end;
                            return newCount;
                        });
                        clearInterval(interval); // Ensure the interval is properly cleared
                    } else {
                        setCount((prev) => {
                            const newCount = [...prev];
                            newCount[index] = Math.floor(start);
                            return newCount;
                        });
                    }
                    
                }, stepTime);
            });
        }
    }, [isVisible]);

    return (
        <div className="p-8 bg-white" ref={ref}>
            
            <Row gutter={[16, 16]} justify="center">
                {counters.map((counter, index) => (
                    <Col key={index} xs={24} sm={12} md={8} lg={6}>
                        <Card
                            bordered={false}
                            className="flex items-center justify-center h-40 p-4 bg-gray-800 shadow-md rounded-lg"
                        >
                            <div className="text-center">
                                <div className="text-3xl mb-2">{counter.icon}</div>
                                <Title level={4} className="text-white mb-1">
                                    <span style={{ color: 'white' }}>
                                        {typeof count[index] === 'number' ? count[index].toLocaleString() : counter.count}
                                    </span>
                                </Title>
                                <div className="text-white">{counter.title}</div>
                            </div>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default CounterComponent;
