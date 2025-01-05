import React, { useState } from "react";
import { Input, Select, Card, Row, Col, Empty } from "antd";
import ReactCardFlip from "react-card-flip";

const { Search } = Input;
const { Option } = Select;

interface SparePart {
  id: number;
  name: string;
  price: number;
  addedDate: string;
  image: string;
  description: string;
}

const sparePartsData: SparePart[] = [
  {
    id: 1,
    name: "Engine",
    price: 1200,
    addedDate: "2024-07-15",
    image:
      "https://content.jdmagicbox.com/quickquotes/images_main/escorts-second-hand-engine-2217089173-ve2qt2q8.jpg?impolicy=queryparam&im=Resize=(360,360),aspect=fit",
    description: "A reliable and durable engine suitable for various vehicle models.",
  },
  {
    id: 2,
    name: "Brake Pads",
    price: 150,
    addedDate: "2024-08-01",
    image:
      "https://wiltonautoandtire.com/wp-content/uploads/WiltonAutoAndTireBrakePadRepair-scaled.webp",
    description: "High-quality brake pads designed for enhanced braking performance.",
  },
  {
    id: 3,
    name: "Exhaust",
    price: 300,
    addedDate: "2024-06-25",
    image:
      "https://cdn03.hamrobazaar.com/User/Posts/2023/2/14/59bc4bee-268a-4d91-95d2-12ca927e45e4.webp?x-image-process=image/resize,m_lfit,h_500,w_500",
    description: "A robust exhaust system that improves engine efficiency and sound.",
  },
  {
    id: 4,
    name: "Battery",
    price: 200,
    addedDate: "2024-07-20",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2022/7/DZ/DE/IF/38716088/used-auto-battery-250x250.jpg",
    description: "A long-lasting battery suitable for a wide range of vehicles.",
  },
  {
    id: 5,
    name: "Radiator",
    price: 250,
    addedDate: "2024-05-10",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQL4J6PHiP-RUlIgVKdaN3rprv5xri4tzI3g&s",
    description: "Efficient radiator to keep your engine cool under all conditions.",
  },
  {
    id: 6,
    name: "Air Filter",
    price: 50,
    addedDate: "2024-07-01",
    image: "https://pbs.twimg.com/media/DrcrmVAWwAIJg6A.jpg:large",
    description: "A high-performance air filter that ensures clean air intake for your engine.",
  },
  {
    id: 7,
    name: "Fuel Pump",
    price: 400,
    addedDate: "2024-06-18",
    image:
      "https://5.imimg.com/data5/IOS/Default/2023/8/334623979/MJ/GK/YF/159881270/product-jpeg-250x250.png",
    description: "A reliable fuel pump designed to deliver consistent fuel flow to your engine.",
  },
  {
    id: 8,
    name: "Alternator",
    price: 350,
    addedDate: "2024-07-22",
    image:
      "https://5.imimg.com/data5/ANDROID/Default/2023/7/325721569/RV/BL/EU/154895004/product-jpeg-500x500.jpg",
    description: "Durable alternator that provides reliable power to your vehicle's electrical systems.",
  },
  {
    id: 9,
    name: "Spark Plug",
    price: 25,
    addedDate: "2024-07-28",
    image:
      "https://png.pngtree.com/thumb_back/fw800/background/20221028/pngtree-used-spark-plugs-service-motor-vehicle-photo-image_39946204.jpg",
    description: "High-quality spark plug that ensures efficient combustion and smooth engine performance.",
  },
  {
    id: 10,
    name: "Timing Belt",
    price: 100,
    addedDate: "2024-08-01",
    image:
      "https://www.team-bhp.com/forum/attachments/technical-stuff/2056587d1600410755-time-change-timing-belt-20200918_091603.jpg",
    description: "A reliable timing belt designed to ensure precise engine timing and operation.",
  },
  {
    id: 11,
    name: "Transmission",
    price: 1800,
    addedDate: "2024-07-30",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9pIyc3XacXVmeAFb9gt7pzUOTiwoqySdbSg&s",
    description: "High-performance transmission system that offers smooth gear shifts and durability.",
  },
  {
    id: 12,
    name: "Headlights",
    price: 200,
    addedDate: "2024-07-02",
    image:
      "https://5.imimg.com/data5/ANDROID/Default/2021/3/JL/ZP/NC/45210204/product-jpeg.jpg",
    description: "Bright and durable headlights to ensure clear visibility at night.",
  },
  {
    id: 13,
    name: "Windshield",
    price: 500,
    addedDate: "2024-05-20",
    image:
      "https://content.jdmagicbox.com/quickquotes/images_main/swift-windscreen-laminated-2129578511-zpni6tla.jpg?impolicy=queryparam&im=Resize=(360,360),aspect=fit",
    description: "A strong and clear windshield designed to provide excellent visibility and protection.",
  },
  {
    id: 14,
    name: "Suspension",
    price: 800,
    addedDate: "2024-07-12",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2021/8/QJ/IT/XN/53851620/maruti-swift-front-shocker-second-hand-price1200-rupaye-500x500.jpeg",
    description: "A durable suspension system that ensures a smooth and comfortable ride.",
  },
  {
    id: 15,
    name: "Oil Filter",
    price: 30,
    addedDate: "2024-07-19",
    image:
      "https://wpwma.ca.gov/wp-content/uploads/2023/05/AdobeStock_142750507-scaled.jpeg",
    description: "High-quality oil filter that helps remove contaminants from your engine's oil.",
  },
];


const Spares: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState<
    "lowToHigh" | "highToLow" | "newest" | "aToZ" | "zToA"
  >("lowToHigh");
  const [hoveredCardId, setHoveredCardId] = useState<number | null>(null);

  const filteredParts = sparePartsData
    .filter((part) =>
      part.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      switch (sortOrder) {
        case "lowToHigh":
          return a.price - b.price;
        case "highToLow":
          return b.price - a.price;
        case "newest":
          return (
            new Date(b.addedDate).getTime() - new Date(a.addedDate).getTime()
          );
        case "aToZ":
          return a.name.localeCompare(b.name);
        case "zToA":
          return b.name.localeCompare(a.name);
        default:
          return 0;
      }
    });

  return (
    <div className="dark:bg-gray-900 dark:text-white bg-white text-black min-h-screen px-4 py-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 space-y-4 md:space-y-0">
          <Search
            placeholder="Search Spare Parts"
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
          </Select>
        </div>

        {filteredParts.length > 0 ? (
          <Row gutter={[16, 16]} className="dark:text-white">
            {filteredParts.map((part) => (
              <Col key={part.id} xs={24} sm={12} md={8} lg={6}>
                <ReactCardFlip
                  isFlipped={hoveredCardId === part.id}
                  flipDirection="horizontal"
                >
                  <Card
                    hoverable
                    cover={
                      <img
                        alt={part.name}
                        src={part.image}
                        className="h-48 object-cover"
                      />
                    }
                    className="dark:bg-gray-800 dark:border-gray-700 dark:text-white shadow-2xl"
                    onMouseEnter={() => setHoveredCardId(part.id)}
                    onMouseLeave={() => setHoveredCardId(null)}
                  >
                    <div>
                      <h3>{part.name}</h3>
                      <p>${part.price}</p>
                    </div>
                  </Card>

                  <Card
                    className="dark:bg-gray-800 dark:border-gray-700 dark:text-white shadow-2xl h-72 flex items-center justify-center text-xl border-gray-400"
                  >
                    <div>
                      <h4 className="font-bold">{part.name}</h4>
                      <p>{part.description}</p>
                      <p className="font-bold">${part.price}</p>
                    </div>
                  </Card>
                </ReactCardFlip>
              </Col>
            ))}
          </Row>
        ) : (
          <div className="flex justify-center items-center min-h-[200px]">
            <Empty description="No Spare parts found" className="dark:text-white" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Spares;