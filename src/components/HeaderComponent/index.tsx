
import { Layout, Menu, Input, Avatar, Dropdown } from 'antd';
import { UserOutlined, SearchOutlined, CarOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';


const { Header } = Layout;

const menu = (
  <Menu>
    <Menu.Item key="0">
      <a href="#profile">Profile</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="#settings">Settings</a>
    </Menu.Item>
    <Menu.Item key="2">
      <a href="#logout">Logout</a>
    </Menu.Item>
  </Menu>
);

const Navbar = () => {
  
  return (
    <Layout>
      {/* New Header with Contact Information */}
      <Header className="bg-gray-8000 p-2 flex items-center justify-left text-white" style={{ height: '30px' }}>
        <div className="flex space-x-6 ml-7">
          <span>Phone: (123) 456-7890</span>
          <span>Email: contact@junkyard.com</span>
        </div>
      </Header>

      {/* Existing Main Header */}
      <Header className="bg-white p-6 flex items-center justify-between" style={{ height: '80px' }}>
        {/* Logo and Text */}
        <div className="flex items-center">
          <CarOutlined className="text-black text-4xl ml-3" />
          <span className="text-black text-3xl font-bold ml-5">JunkYard</span>
        </div>

        {/* Centered Links */}
        <div className="flex-1 flex justify-center">
          <Menu mode="horizontal" defaultSelectedKeys={['1']} className="flex space-x-8 menu-custom bg-white">
            <Menu.Item key="1">
              <Link to="/Home">Home</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <a href="#brands">Features</a>
            </Menu.Item>
            <Menu.Item key="3">
              <a href="#brands">Pages</a>
            </Menu.Item>
            <Menu.Item key="4">
              <Link to="/inventory">Inventory</Link>
            </Menu.Item>
            <Menu.Item key="5">
              <a href="#about">Blog</a>
            </Menu.Item>
            <Menu.Item key="6">
              <a href="#contact">Contact Us</a>
            </Menu.Item>
          </Menu>
        </div>

        {/* Search Bar and Avatar */}
        <div className="flex items-center">
          <Input
            placeholder="Search"
            prefix={<SearchOutlined />}
            className="mr-4"
            style={{ width: '240px' }}
            
          />
          <Dropdown overlay={menu} trigger={['click']}>
            <a href="#!" onClick={e => e.preventDefault()}>
              <Avatar
                size="large"
                icon={<UserOutlined style={{ color: 'white' }} />}
                style={{ backgroundColor: 'black', color: 'white' }}
                className="cursor-pointer"
              />
            </a>
          </Dropdown>
        </div>
      </Header>
    </Layout>
  );
};

export default Navbar;
