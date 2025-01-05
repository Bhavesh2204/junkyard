import { Row, Col, Typography } from 'antd';
import { useInView } from 'react-intersection-observer';

const { Title, Paragraph } = Typography;

interface HowItWorksItem {
    img: string;
    text: JSX.Element;
}

const howItWorksData: HowItWorksItem[] = [
    {
        img: 'https://cdn.pixabay.com/photo/2020/10/08/16/08/auto-5638401_960_720.png',
        text: (
            <>
                <Title level={3} className="font-bold dark:text-black">Welcome to JunkYard Services...</Title>
                <Paragraph className="text-lg leading-relaxed dark:text-white mt-4">
                It is a well-known fact that customers appreciate clear and informative services when dealing with their used or unwanted vehicles. The essence of using our services is to provide a seamless experience for selling, recycling, or salvaging vehicles. Our junkyard is designed to offer a streamlined and efficient process, ensuring that you get the best value for your vehicle. Unlike traditional methods, we focus on making your experience straightforward and hassle-free. Many vehicle owners now turn to us for our reliability and expertise in handling a wide range of automotive needs.
                </Paragraph>
            </>
        ),
    },
    // other items
];

const HowItWorksComponent: React.FC = () => {
    const { ref: refText, inView: inViewText } = useInView({ triggerOnce: true });
    const { ref: refImage, inView: inViewImage } = useInView({ triggerOnce: true });

    return (

            <div className="cards-wrapper" style={{marginTop:'45px'}}>
            <div className="horizontal-text-box ">
                <div className="horizontal-text">HOW IT WORKS..?</div>
            </div>
            {howItWorksData.map((item, index) => (
                <Row key={index} gutter={32} className="pb-10 flex-col md:flex-row-reverse">
                    <Col 
                        xs={24} 
                        md={12} 
                        className={`flex items-center ${inViewImage ? 'fade-in-right' : 'fade-out-right'}`} 
                        ref={refImage}
                    >
                        <img src={item.img} alt={`how-it-works-${index}`} className="w-full h-auto" />
                    </Col>
                    <Col 
                        xs={24} 
                        md={12} 
                        className={`flex items-center ${inViewText ? 'fade-in-left' : 'fade-out-left'}`} 
                        ref={refText}
                    >
                        <div className="ml-4">
                            {item.text}
                        </div>
                    </Col>
                </Row>
            ))}
            <style>
                {`
                    .fade-in-left {
                        animation: fadeInLeft 1s forwards;
                    }
                    .fade-out-left {
                        opacity: 0;
                    }
                    .fade-in-right {
                        animation: fadeInRight 1s forwards;
                    }
                    .fade-out-right {
                        opacity: 0;
                    }
                    @keyframes fadeInLeft {
                        from {
                            opacity: 0;
                            transform: translateX(-20px);
                        }
                        to {
                            opacity: 1;
                            transform: translateX(0);
                        }
                    }
                    @keyframes fadeInRight {
                        from {
                            opacity: 0;
                            transform: translateX(20px);
                        }
                        to {
                            opacity: 1;
                            transform: translateX(0);
                        }
                    }
                `}
            </style>
        </div>
    );
};

export default HowItWorksComponent;
