import React from "react";
import { Layout, Menu } from 'antd';
import { PlusOutlined, UserOutlined, LogoutOutlined } from '@ant-design/icons';
import '../styles/Navbar.css';
import fblogo from  '../asstes/images/fb1.png'

const Navbar = () => {
  
    return (
      <Layout.Header className="navbar">
        {/* <div className="navbar-logo">
          <HomeOutlined />
        </div> */}
        <Menu
          mode="horizontal"
          defaultSelectedKeys={['1']}
          className="navbar-item"
        >
       
          <Menu.Item key="1" className="navbar-item">
          <img className="logofb" src={fblogo} width="40px"/>
          {/* <HomeOutlined /> */}
          </Menu.Item>

          <Menu.Item key="2" className="navbar-item">
          <input className="Navsearch" type="text" placeholder="Search Facebook"/>
          </Menu.Item>



          <Menu.Item key="3" className="navbar-item ad-container">
          <PlusOutlined /> Add Post
          </Menu.Item>

          <Menu.Item key="4" className="navbar-item">
          <UserOutlined /> Profile
          </Menu.Item>

          <Menu.Item key="5" className="navbar-item">
          <LogoutOutlined /> LogOut
          </Menu.Item>

        </Menu>
      </Layout.Header>
    );
  };
  
  export default Navbar;