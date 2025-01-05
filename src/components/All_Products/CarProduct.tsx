
import React, { useState } from 'react';
import { Input, Select, Card, Row, Col, Empty } from 'antd';
import ReactCardFlip from 'react-card-flip';

const { Search } = Input;
const { Option } = Select;

interface UsedVehicle {
    id: number;
    name: string;
    price: number;
    year: number;
    mileage: number;
    image: string;
    description: string;
}


const usedVehiclesData: UsedVehicle[] = [
    { id: 1, name: 'Toyota Corolla', price: 15000, year: 2018, mileage: 30000, image: 'https://imgd.aeplcdn.com/300x225/cw/ucp/stockApiImg/RRW7VVJ_6w53dp87_1_43553624.jpg?q=80', description: 'Reliable and fuel-efficient sedan.' },
    { id: 2, name: 'Honda Civic', price: 18000, year: 2019, mileage: 25000, image: 'https://imgd.aeplcdn.com/300x225/cw/ucp/stockApiImg/ZQKSU6V_dl20o78o_1_44412884.jpg?q=80', description: 'Compact car with a stylish design.' },
    { id: 3, name: 'Ford Mustang', price: 35000, year: 2020, mileage: 15000, image: 'https://imgd.aeplcdn.com/300x225/cw/ucp/stockApiImg/YVT0517_67idorc7_1_42672293.jpg?q=80', description: 'Classic American muscle car with high performance.' },
    { id: 4, name: 'Chevrolet Camaro', price: 32000, year: 2017, mileage: 40000, image: 'https://images.carswitch.com/529736chevrolet/1794404555147288.jpg?fit=crop&w=611&h=456&auto=format,compress&sat=30&vib=10&q=46', description: 'Sporty car with aggressive styling.' },
    { id: 5, name: 'Nissan Altima', price: 14000, year: 2016, mileage: 50000, image: 'https://ymimg1.b8cdn.com/resized/used_car/2024/1/19/1556155/pictures/11816569/mobile_listing_main_Nissan_Altima_2011_in_Abu_Dhabi_1556155_5.jpg', description: 'Comfortable sedan with a smooth ride.' },
    { id: 6, name: 'BMW 3 Series', price: 28000, year: 2019, mileage: 22000, image: 'https://images10.gaadi.com/usedcar_image/4039557/original/processed_7feed153bcbc09d077f3d359fffcb909.jpg?imwidth=320', description: 'Luxury sedan with a refined driving experience.' },
    { id: 7, name: 'Audi A4', price: 30000, year: 2020, mileage: 18000, image: 'https://cdn.bigboytoyz.com/new-version/products/product/1454073549881.jpg', description: 'Premium sedan with advanced technology features.' },
    { id: 8, name: 'Mercedes-Benz C-Class', price: 35000, year: 2018, mileage: 32000, image: 'https://imgd-ct.aeplcdn.com/640X480/cw/ucp/stockApiImg/HKEDZVR_insgsi4x_1_44772569.jpg?q=80', description: 'Elegant sedan with luxurious interiors.' },
];

const UsedVehicles: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOrder, setSortOrder] = useState<'lowToHigh' | 'highToLow' | 'newest' | 'aToZ' | 'zToA' | 'milesLowToHigh' | 'milesHighToLow'>('lowToHigh');
    const [hoveredCardId, setHoveredCardId] = useState<number | null>(null);

    const filteredVehicles = usedVehiclesData
        .filter(vehicle =>
            vehicle.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .sort((a, b) => {
            switch (sortOrder) {
                case 'lowToHigh':
                    return a.price - b.price;
                case 'highToLow':
                    return b.price - a.price;
                case 'newest':
                    return b.year - a.year;
                case 'aToZ':
                    return a.name.localeCompare(b.name);
                case 'zToA':
                    return b.name.localeCompare(a.name);
                case 'milesLowToHigh':
                    return a.mileage - b.mileage;
                case 'milesHighToLow':
                    return b.mileage - a.mileage;
                default:
                    return 0;
            }
        });

    return (
        <div className="dark:bg-gray-900 dark:text-white bg-white text-black min-h-screen px-4 py-10">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center mb-6 space-y-4 md:space-y-0">
                    <Search
                        placeholder="Search Vehicles for sale"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full md:w-1/3 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                    />
                    <Select
                        defaultValue="lowToHigh"
                        onChange={(value) => setSortOrder(value as typeof sortOrder)}
                        className="w-full md:w-1/4 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                    >
                        <Option value="lowToHigh">Price: Low to High</Option>
                        <Option value="highToLow">Price: High to Low</Option>
                        <Option value="newest">Newest</Option>
                        <Option value="aToZ">Name: A-Z</Option>
                        <Option value="zToA">Name: Z-A</Option>
                        <Option value="milesLowToHigh">Miles: Low to High</Option>
                        <Option value="milesHighToLow">Miles: High to Low</Option>
                    </Select>
                </div>

                {filteredVehicles.length > 0 ? (
                    <Row gutter={[16, 16]} className="dark:text-white">
                        {filteredVehicles.map((vehicle) => (
                            <Col key={vehicle.id} xs={24} sm={12} md={8} lg={6}>
                                <ReactCardFlip
                                    isFlipped={hoveredCardId === vehicle.id}
                                    flipDirection="horizontal"
                                >
                                    <Card
                                        hoverable
                                        cover={<img alt={vehicle.name} src={vehicle.image} className="h-48 object-cover" />}
                                        className="dark:bg-gray-800 dark:border-gray-700 dark:text-white shadow-2xl"
                                        onMouseEnter={() => setHoveredCardId(vehicle.id)}
                                        onMouseLeave={() => setHoveredCardId(null)}
                                    >
                                        <div className="dark:text-white">
                                            <h3 className="dark:text-white">{vehicle.name}</h3>
                                            <p className="dark:text-white">${vehicle.price}, {vehicle.year} - {vehicle.mileage} miles</p>
                                        </div>
                                    </Card>
                                    <Card
                                        hoverable
                                        className="dark:bg-gray-800 dark:border-gray-700 dark:text-white shadow-2xl h-72 flex items-center justify-center text-xl border-gray-400"
                                    >
                                        <div className="dark:text-white">
                                            <h3 className="dark:text-white font-bold">{vehicle.name}</h3>
                                            <p className="dark:text-white">{vehicle.description}</p>
                                            <p className="dark:text-white font-bold">${vehicle.price}, {vehicle.year} <br /> ({vehicle.mileage} miles)</p>
                                        </div>
                                    </Card>
                                </ReactCardFlip>
                            </Col>
                        ))}
                    </Row>
                ) : (
                    <div className="flex justify-center items-center min-h-[200px]">
                        <Empty
                            description="No vehicles found"
                            className="dark:text-white"
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default UsedVehicles;
