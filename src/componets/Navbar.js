import React from "react";
import { useNavigate } from 'react-router-dom';
import { Layout, Menu, Dropdown, Button } from 'antd';
import { PlusOutlined, UserOutlined, LogoutOutlined } from '@ant-design/icons';
import '../styles/Navbar.css';
import fblogo from  '../asstes/images/fb1.png';

const Navbar = () => {

    const navigate = useNavigate();

    const handleMemory = () => {
    navigate('/memories');
    };

    const handleEvent = () => {
    navigate('/event');
    };

    const handleMainMenu = () => {
    navigate('/');
    };
    const handleLogout = () => {
        navigate('/sign-in');
        };
    
    return (
      <Layout.Header className="navbar">

        <Menu
        
          mode="horizontal"
          defaultSelectedKeys={['1']}
          className="navbar-item"
        >
       
          <Menu.Item key="1" className="navbar-item" onClick={handleMainMenu}>
          <img className="logofb" src={fblogo} width="40px"/>
          </Menu.Item>
          <Menu.Item key="2" className="navbar-item ad-container" >
          <Dropdown
        placement="bottomRight"
        overlay={
          <Menu
            items={[
              {
                key: '1',
                label: <Button onClick={handleMemory}><PlusOutlined /> 
                Add Memory</Button>,
              },
              {
                key: '2',
                label: <Button onClick={handleEvent}><PlusOutlined /> 
                Add Event</Button>,
              },
            ]}
          />
        }
        trigger={['click']}
      >
          <PlusOutlined /> 
     
             </Dropdown>
          </Menu.Item>
          <Menu.Item key="3" className="navbar-item">
          <UserOutlined /> Profile
          </Menu.Item>
          <Menu.Item key="4" className="navbar-item" onClick={handleLogout}>
          <LogoutOutlined /> LogOut
          </Menu.Item>
        </Menu>
      </Layout.Header>
    );
  };
  
  export default Navbar;