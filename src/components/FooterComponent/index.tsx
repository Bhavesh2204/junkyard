import { Col, List, Row, Typography } from "antd";
import React from "react";
import styles from "../../styles/HomePageSection.module.css";
import {
  EnvironmentOutlined,
  FacebookFilled,
  InstagramFilled,
  LinkedinFilled,
  MailOutlined,
  PhoneOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import { logo } from "../../assets";

const data = [
  {
    title: "Company",
    list: [
      "About company",
      "Company Services",
      "Job opportunities",
      "Creative People",
    ],
  },
  {
    title: "Customer",
    list: [
      "Client support",
      "Latest news",
      "Company story",
      "Pricing packages",
    ],
  },
  {
    title: "Contact Info",
    list: [
      <Typography className="text-base text-white dark:text-gray-300">
        <Row>
          <Col span={4}>
            <MailOutlined />
          </Col>
          <Col span={20}>info@yourmail.com</Col>
        </Row>
      </Typography>,
      <Typography className="text-base text-white dark:text-gray-300">
        <Row>
          <Col span={4}>
            <PhoneOutlined rotate={90} />
          </Col>
          <Col span={20}>+885 543 4565</Col>
        </Row>
      </Typography>,
      <Typography className="text-base text-white dark:text-gray-300">
        <Row>
          <Col span={4}>
            <EnvironmentOutlined />
          </Col>
          <Col span={20}>401 Broadway, 24th Floor, London</Col>
        </Row>
      </Typography>,
    ],
  },
];

const FooterComponent: React.FC = () => {
  return (
    <>
      <div className="bg-blue-600 dark:bg-blue-800 px-10">
        <Row className="py-16 border-b-gray-400 border-b-2 dark:border-b-gray-600">
          <Col md={{ span: 12 }} xs={{ span: 24 }}>
            <Typography className="text-3xl font-bold text-white dark:text-gray-200 text-left w-3/4 mb-5">
              Signup for latest news
            </Typography>
          </Col>
          <Col md={{ span: 12 }} xs={{ span: 24 }}>
            <form className="flex items-center justify-evenly sm:w-8/12">
              <div>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your email address"
                  className="lg:w-96 md:w-64 w-full p-3 placeholder:text-white dark:placeholder:text-gray-400 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-blue-500 dark:bg-blue-700 border-blue-400 dark:border-blue-600 text-white dark:text-gray-200"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full py-3 sm:mx-3 text-black bg-white dark:bg-gray-800 dark:text-white rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </Col>
        </Row>
        <Row gutter={[32, 16]} className="py-10">
          <Col
            lg={{ span: 6 }}
            sm={{ span: 12 }}
            xs={{ span: 24 }}
            className={`${styles.footer} py-5`}
          >
            <div className="flex py-5">
              <img src={logo} alt="logo" />
              <Typography className="flex text-4xl justify-center items-center text-white dark:text-gray-200 font-bold">
                JunkYard
              </Typography>
            </div>
            <Typography className="text-gray-300 dark:text-gray-400 text-lg">
              We create digital experiences for brands and companies by using
              technology.
            </Typography>
            <div className="flex justify-between py-5 w-1/2">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FacebookFilled className="text-gray-300 dark:text-gray-400 text-lg" />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <TwitterOutlined className="text-gray-300 dark:text-gray-400 text-lg" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <InstagramFilled className="text-gray-300 dark:text-gray-400 text-lg" />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <LinkedinFilled className="text-gray-300 dark:text-gray-400 text-lg" />
              </a>
            </div>
          </Col>
          <Col
            lg={{ span: 6 }}
            sm={{ span: 12 }}
            xs={{ span: 24 }}
            className={`${styles.footer} py-5`}
          >
            <List className="text-xl text-white dark:text-gray-200 mb-5">Latest Blog</List>
            <Row className="mb-5">
              <Col span={8} className="p-1">
                <img
                  src="https://demo.tailgrids.com/templates/startup/build/src/assets/images/footers/footer-04/blog-01.jpg"
                  className="rounded-lg"
                  alt="blog-01"
                />
              </Col>
              <Col span={16}>
                <Typography className={`${styles.footer} text-white dark:text-gray-200`}>
                  I think it is really important to design...
                </Typography>
              </Col>
            </Row>
            <Row>
              <Col span={8} className="p-1">
                <img
                  src="https://demo.tailgrids.com/templates/startup/build/src/assets/images/footers/footer-04/blog-02.jpg"
                  className="rounded-lg"
                  alt="blog-02"
                />
              </Col>
              <Col span={16}>
                <Typography className={`${styles.footer} text-white dark:text-gray-200`}>
                  Recognizing the need is the primary...
                </Typography>
              </Col>
            </Row>
          </Col>
          {data.map((item, id) => (
            <Col
              lg={{ span: 4 }}
              sm={{ span: 8 }}
              xs={{ span: 24 }}
              className={`${styles.footer} py-5`}
              key={id}
            >
              <List className="text-xl text-white dark:text-gray-200 mb-5">{item.title}</List>
              {item.list.map((listItem, id) => (
                <div className="mb-3" key={id}>{listItem}</div>
              ))}
            </Col>
          ))}
        </Row>
      </div>
      <div className="bg-blue-950 dark:bg-blue-800 sm:flex items-center justify-between p-10">
        <Typography className={`${styles.footer} text-white dark:text-gray-200`}>© 2025 TailGrids</Typography>
        <div className="sm:flex justify-evenly w-5/12">
          <Typography className={`${styles.footer} text-white dark:text-gray-200`}>Privacy Policy</Typography>
          <Typography className={`${styles.footer} text-white dark:text-gray-200`}>Legal notice</Typography>
          <Typography className={`${styles.footer} text-white dark:text-gray-200`}>Terms of Service</Typography>
        </div>
      </div>
    </>
  );
};

export default FooterComponent;
