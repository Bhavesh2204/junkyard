import React, { useEffect, useState } from "react";
import CollapsibleComponent from "../../common/CollapsibleComponent";
import CardComponent from "../../common/CardComponent";
import Meta from "antd/es/card/Meta";
import { Button, Col, List, Row, Space, Typography } from "antd";
import SimpleButton from "../../common/SimpleButton";
import {
  DownloadOutlined,
  FacebookFilled,
  HomeOutlined,
  InstagramFilled,
  LaptopOutlined,
  MailOutlined,
  PhoneOutlined,
  PlayCircleFilled,
  ProductFilled,
  SignalFilled,
  TwitterOutlined,
} from "@ant-design/icons";
import styles from "../../../styles/HomePageSection.module.css";
import ContactUsForm from "../../../forms/ContactUsForm";
import DotsGrid from "../../common/DotsGrid";
import HomePageSection from "../../HomePageSection";

const services = [
  {
    icon: (
      <ProductFilled className={`${styles.icons} absolute right-3 top-3`} />
    ),
    title: "Marketing Solutions",
    description:
      "Lorem Ipsum is simply dummy text of the printing and industry.",
  },
  {
    icon: <SignalFilled className={`${styles.icons} absolute right-3 top-3`} />,
    title: "Business Analytics",
    description:
      "Lorem Ipsum is simply dummy text of the printing and industry.",
  },
  {
    icon: (
      <LaptopOutlined className={`${styles.icons} absolute right-3 top-3`} />
    ),
    title: "UX & UI design",
    description:
      "Lorem Ipsum is simply dummy text of the printing and industry.",
  },
];

const pricing = [
  {
    title: {
      text: "Personal",
      title: "$59 / year",
      paragraph: "Perfect for using in a personal website or a client project.",
    },
    description: [
      "1 User",
      "All UI components",
      "Lifetime access",
      "Free updates",
      "Use on 1 (one) project",
      "3 Months support",
    ],
    buttonText: "Choose Personal",
  },
  {
    title: {
      text: "Business",
      title: "$199 / year",
      paragraph: "Perfect for using in a Business website or a client project.",
    },
    description: [
      "5 User",
      "All UI components",
      "Lifetime access",
      "Free updates",
      "Use on 3 (three) project",
      "4 Months support",
    ],
    buttonText: "Choose Business",
  },
  {
    title: {
      text: "Professional",
      title: "$256 / year",
      paragraph:
        "Perfect for using in a Professional website or a client project.",
    },
    description: [
      "Unlimited User",
      "All UI components",
      "Lifetime access",
      "Free updates",
      "Use on unlimited project",
      "12 Months support",
    ],
    buttonText: "Choose Professional",
  },
];

const team = [
  {
    imgSrc:
      "https://demo.tailgrids.com/templates/startup/build/src/assets/images/team/team-05/image-01.jpg",
    title: "Melissa Tatcher",
    description: "MARKETING OPERATIONS",
  },
  {
    imgSrc:
      "https://demo.tailgrids.com/templates/startup/build/src/assets/images/team/team-05/image-02.jpg",
    title: "Stuard Ferrel",
    description: "DIGITAL MARKETER",
  },
  {
    imgSrc:
      "https://demo.tailgrids.com/templates/startup/build/src/assets/images/team/team-05/image-03.jpg",
    title: "Eva Hudson",
    description: "UI/UX DESIGNER",
  },
  {
    imgSrc:
      "https://demo.tailgrids.com/templates/startup/build/src/assets/images/team/team-05/image-04.jpg",
    title: "Martin Ethariam",
    description: "GRAPHIC DESIGNER",
  },
];

const faqs = Array.from({ length: 6 }).map(() => [
  {
    label: (
      <Typography className="dark:text-white text-lg">
        How long we deliver your first blog post?
      </Typography>
    ),
    children: (
      <Typography className="text-base dark:text-gray-400 text-gray-500 font-normal p-3">
        It takes 2-3 weeks to get your first blog post ready. That includes the
        in-depth research & creation of your monthly content marketing strategy
        that we do before writing your first blog post, Ipsum available.
      </Typography>
    ),
  },
]);

const testimonials = [
  {
    src: "https://demo.tailgrids.com/templates/startup/build/src/assets/images/testimonials/testimonial-05/image-01.jpg",
    title: "Jason Keys",
    subTitle: "Founder @ Dreampeet.",
    description:
      "“I believe in lifelong learning and Learn. is a great place to learn from experts. I've learned a lot and recommend it to all my friends and familys.”",
  },
  {
    src: "https://demo.tailgrids.com/templates/startup/build/src/assets/images/testimonials/testimonial-05/image-01.jpg",
    title: "Jason Keys",
    subTitle: "Founder @ Dreampeet.",
    description:
      "“I believe in lifelong learning and Learn. is a great place to learn from experts. I've learned a lot and recommend it to all my friends and familys.”",
  },
  {
    src: "https://demo.tailgrids.com/templates/startup/build/src/assets/images/testimonials/testimonial-05/image-01.jpg",
    title: "Jason Keys",
    subTitle: "Founder @ Dreampeet.",
    description:
      "“I believe in lifelong learning and Learn. is a great place to learn from experts. I've learned a lot and recommend it to all my friends and familys.”",
  },
  {
    src: "https://demo.tailgrids.com/templates/startup/build/src/assets/images/testimonials/testimonial-05/image-01.jpg",
    title: "Jason Keys",
    subTitle: "Founder @ Dreampeet.",
    description:
      "“I believe in lifelong learning and Learn. is a great place to learn from experts. I've learned a lot and recommend it to all my friends and familys.”",
  },
];
const HomePage: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Space
      direction="vertical"
      size="large"
      className="flex dark:bg-gray-900 dark:text-gray-200 "
    >
      <SimpleButton
        onClick={toggleDarkMode}
        className="fixed bottom-5 right-5 p-2 z-50 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-200"
      >
        {isDarkMode ? "🌙" : "☀️"}
      </SimpleButton>

      {/* Home Section */}
      <Row className="dark:bg-gray-900 dark:text-gray-200 pb-7 px-10">
        <Col lg={{ span: 12 }} xs={{ span: 24 }}>
          <HomePageSection
            isDarkMode={isDarkMode}
            className="text-left md:w-10/12 pb-10"
            titleClassName="leading-snug mt-0"
            paragraphClassName="text-lg"
            title="Startup Site Template Built-with TailGrids Components"
            paragraph="With TailGrids, business and students thrive together. Business can perfectly match their staffing to changing demand throughout the dayed."
          >
            <div>
              <SimpleButton size="large" className="text-lg">
                Get Started
              </SimpleButton>
              <Button
                icon={
                  <DownloadOutlined className="bg-blue-500 p-2 rounded-full text-white" />
                }
                type="text"
                size="large"
                className="dark:text-white text-lg"
              >
                Download App
              </Button>
            </div>
          </HomePageSection>
          <div className="text-gray-500 text-left py-5">
            Used by thriving brands
          </div>
          <Row className="flex md:w-10/12 justify-around">
            <Col xs={{ span: 12 }} sm={{ span: 8 }} className="py-3">
              <img
                src="https://demo.tailgrids.com/templates/startup/build/src/assets/images/brands/ayroui.svg"
                width={150}
              />
            </Col>
            <Col xs={{ span: 12 }} sm={{ span: 8 }} className="py-3">
              <img
                src="https://demo.tailgrids.com/templates/startup/build/src/assets/images/brands/graygrids.svg"
                width={150}
              />
            </Col>
            <Col xs={{ span: 12 }} sm={{ span: 8 }} className="py-3">
              <img
                src="https://demo.tailgrids.com/templates/startup/build/src/assets/images/brands/uideck.svg"
                width={150}
              />
            </Col>
          </Row>
        </Col>
        <Col
          lg={{ span: 12 }}
          xs={{ span: 24 }}
          className=" flex lg:justify-end py-5 justify-center items-start relative"
        >
          <img
            src="https://demo.tailgrids.com/templates/startup/build/src/assets/images/hero/hero-image-01.png"
            className=""
          />
        </Col>
      </Row>

      {/* Services Section */}
      <HomePageSection
        isDarkMode={isDarkMode}
        className="p-10"
        text="What we Serve"
        title="Our Best Services"
        paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
      >
        <Row gutter={16}>
          {services.map((service, index) => (
            <Col
              key={index}
              xs={{ span: 24 }}
              lg={{ span: 8 }}
              className="flex justify-center py-3"
            >
              <CardComponent bordered hoverable className="p-5">
                <div className={` ${styles.iconBg} relative left-3`}>
                  {service.icon}
                </div>
                <Meta
                  title={
                    <Typography className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                      {service.title}
                    </Typography>
                  }
                  description={
                    <Typography className="text-base font-semibold text-gray-500 dark:text-gray-400">
                      {service.description}
                    </Typography>
                  }
                />
              </CardComponent>
            </Col>
          ))}
        </Row>
      </HomePageSection>

      {/* Intro Video */}
      <Row>
        <Col
          lg={{ span: 12 }}
          xs={{ span: 24 }}
          className="bg-blue-700 relative"
        >
          <DotsGrid
            rows={6}
            columns={4}
            dotSize={4}
            dotColor="white"
            width={60}
            height={100}
            className="absolute right-4 top-4"
          />
          <HomePageSection
            isDarkMode={true}
            className="text-left md:w-3/4 px-10 py-32 "
            textClassName="text-white"
            titleClassName="text-white text-4xl"
            paragraphClassName="text-white my-3"
            text="Watch Our Intro Video"
            title="Making world a better place for you and us"
            paragraph="With TailGrids, business and students thrive together. Business can perfectly match their staffing to changing demand throughout the dayed."
          >
            <SimpleButton
              type="text"
              className="border-white text-white rounded-full "
              size="large"
            >
              Know More
            </SimpleButton>
          </HomePageSection>
        </Col>
        <Col
          lg={{ span: 12 }}
          xs={{ span: 24 }}
          className="flex justify-center items-center"
        >
          <img
            src="https://demo.tailgrids.com/templates/startup/build/src/assets/images/videos/image-01.jpg"
            className="relative min-w-full h-full"
          />
          <PlayCircleFilled className={`text-8xl ${styles.icons} absolute`} />
        </Col>
      </Row>

      {/* Pricing Section */}
      <HomePageSection
        className="p-7"
        isDarkMode={isDarkMode}
        text="Pricing Table"
        title="Our Pricing Plan"
        paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
      >
        <Row gutter={24} className="py-2">
          {pricing.map((price, index) => (
            <Col
              key={index}
              xs={{ span: 24 }}
              lg={{ span: 8 }}
              className="py-3"
            >
              <CardComponent
                title={
                  <HomePageSection
                    className="text-left"
                    text={price.title.text}
                    title={price.title.title}
                    paragraph={price.title.paragraph}
                  />
                }
                className="px-1 py-8 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl relative overflow-hidden mx-auto"
                bordered
                hoverable
              >
                <div className="rounded-full bg-gradient-to-tr bg-blue-400 opacity-5 absolute h-36 w-36 top-10 -right-20"></div>
                <DotsGrid
                  rows={8}
                  columns={4}
                  dotSize={3}
                  dotColor="blue"
                  width={40}
                  height={100}
                  className="absolute right-4 top-4"
                />
                <List>
                  {price.description.map((listItem, index) => (
                    <List.Item
                      key={index}
                      style={{ border: "none" }}
                      className={styles.paragraph}
                    >
                      {listItem}
                    </List.Item>
                  ))}
                </List>
                <Button
                  type="primary"
                  size="large"
                  className="min-w-full my-5 py-6 font-bold"
                >
                  {price.buttonText}
                </Button>
              </CardComponent>
            </Col>
          ))}
        </Row>
      </HomePageSection>

      {/* Team Section */}
      <HomePageSection
        isDarkMode={isDarkMode}
        className="dark:bg-gray-800 px-10 py-7 bg-gray-50"
        text="Our Team"
        title="Our Team Members"
        paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
      >
        <Row className=" dark:bg-gray-900 bg-white py-10 rounded-md shadow-2xl ">
          {team.map((teamMember, index) => (
            <Col
              key={index}
              xs={{ span: 24 }}
              md={{ span: 12 }}
              lg={{ span: 6 }}
              className="px-7 w-60"
            >
              <img src={teamMember.imgSrc} className="rounded-md w-full" />
              <Meta
                title={
                  <Typography className="pt-4 font-bold text-lg dark:text-white">
                    {teamMember.title}
                  </Typography>
                }
                description={
                  <Typography className="py-0.5 text-xs text-gray-500">
                    {teamMember.description}
                  </Typography>
                }
              />
              <div className="flex justify-evenly p-4">
                <a href="https://www.facebook.com" target="_blank">
                  <FacebookFilled className={styles.socialIcons} />
                </a>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TwitterOutlined className={styles.socialIcons} />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InstagramFilled className={styles.socialIcons} />
                </a>
              </div>
            </Col>
          ))}
        </Row>
      </HomePageSection>

      {/* FAQ Section */}
      <HomePageSection
        isDarkMode={isDarkMode}
        className="py-24 px-5"
        text="FAQ"
        title="Any Questions? Look Here"
        paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
      >
        <Row className="py-5 px-3" gutter={[24, 14]}>
          {faqs.map((faq, index) => (
            <Col
              key={index}
              lg={{ span: 12 }}
              xs={{ span: 24 }}
              className=" p-3 "
            >
              <CollapsibleComponent
                items={faq}
                iconClassName="text-lg bg-blue-50 dark:bg-gray-700 p-3 rounded-lg "
                className="p-6 text-lg text-left font-semibold border-none bg-white dark:bg-gray-800 dark:shadow-none dark:text-white shadow-2xl shadow-gray-200"
              />
            </Col>
          ))}
        </Row>
      </HomePageSection>

      <Row className="p-7 bg-blue-500">
        <Col lg={{ span: 15 }} xs={{ span: 24 }}>
          <HomePageSection
            isDarkMode={isDarkMode}
            className=" p-7 text-left lg:w-6/12"
            paragraphClassName="mx-0"
            textClassName="text-white"
            text="Find Your Next Dream App"
            titleClassName="text-white text-4xl"
            title="Get started with our free trial"
          />
        </Col>
        <Col
          lg={{ span: 9 }}
          xs={{ span: 24 }}
          className="p-7 flex justify-items-center items-center"
        >
          <SimpleButton type="default" size="large" >
            Get Pro Version
          </SimpleButton>
          <SimpleButton size="large" className="bg-teal-500 mx-3">
            Start Free Trial
          </SimpleButton>
        </Col>
      </Row>

      {/* Testimonials Section */}
      <HomePageSection
        isDarkMode={isDarkMode}
        className=" p-10 text-left"
        paragraphClassName="mx-0"
        text="Testimonials"
        title="What our Clients Says"
        paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
      >
        <Row className="py-5 " gutter={[25, 14]}>
          {testimonials.map((testimonial, index) => (
            <Col
              lg={{ span: 12 }}
              xs={{ span: 24 }}
              key={index}
              className="p-3 "
            >
              <Space
                direction="vertical"
                className="shadow-lg dark:bg-gray-800 p-10 rounded-lg"
              >
                <Meta
                  className="flex items-center"
                  avatar={
                    <img
                      src={testimonial.src}
                      className="mr-5 my-3 rounded-lg"
                    />
                  }
                  title={
                    <Typography className="text-lg font-semibold dark:text-white">
                      {testimonial.title}
                    </Typography>
                  }
                  description={
                    <Typography className="text-sm text-gray-500">
                      {testimonial.subTitle}
                    </Typography>
                  }
                />
                <Typography className="text-base text-gray-500">
                  {testimonial.description}
                </Typography>
              </Space>
            </Col>
          ))}
        </Row>
      </HomePageSection>

      {/* Contact Us Section */}
      <Row className="py-10">
        <Col lg={{ span: 12 }} xs={{ span: 24 }}>
          <HomePageSection
            isDarkMode={isDarkMode}
            className="py-7 px-10 text-left"
            paragraphClassName="mx-0"
            text="Contact Us"
            title="GET IN TOUCH WITH US "
            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius tempor incididunt ut labore et dolore magna aliqua. Ut enim adiqua minim veniam quis nostrud exercitation ullamco"
          >
            <Space direction="vertical">
              <Meta
                className="flex items-center justify-between"
                avatar={
                  <HomeOutlined
                    className={`${styles.icons} dark:bg-opacity-10 bg-blue-100 rounded-lg p-4 mr-7 my-5`}
                  />
                }
                title={
                  <Typography.Title
                    level={3}
                    className="font-bold dark:text-white"
                  >
                    Our Location
                  </Typography.Title>
                }
                description={
                  <Typography className="text-base font-semibold text-gray-500">
                    99 S.t Jomblo Park Pekanbaru
                    <br />
                    28292. Indonesia
                  </Typography>
                }
              />

              <Meta
                className="flex items-center "
                avatar={
                  <PhoneOutlined
                    rotate={90}
                    className={`${styles.icons} dark:bg-opacity-10 bg-blue-100 rounded-lg p-4 mr-7 my-5`}
                  />
                }
                title={
                  <Typography.Title
                    level={3}
                    className="font-bold dark:text-white"
                  >
                    Phone Number
                  </Typography.Title>
                }
                description={
                  <Typography className="text-base font-semibold text-gray-500">
                    (+62)81 414 257 9980
                  </Typography>
                }
              />
              <Meta
                className="flex items-center"
                avatar={
                  <MailOutlined
                    className={`${styles.icons} dark:bg-opacity-10 bg-blue-100 rounded-lg p-4 mr-7 my-5`}
                  />
                }
                title={
                  <Typography.Title
                    level={3}
                    className="font-bold dark:text-white"
                  >
                    Email Address
                  </Typography.Title>
                }
                description={
                  <Typography className="text-base font-semibold text-gray-500">
                    info@yourdomain.com
                  </Typography>
                }
              />
            </Space>
          </HomePageSection>
        </Col>
        <Col
          lg={{ span: 12 }}
          xs={{ span: 24 }}
          className="flex items-center justify-center min-w-fit"
        >
          <ContactUsForm />
        </Col>
      </Row>
    </Space>
  );
};

export default HomePage;
