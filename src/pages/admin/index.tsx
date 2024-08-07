import React from 'react';

import { GetProp, Layout, Menu, MenuProps, theme } from 'antd';
import { CalendarOutlined, CrownOutlined, HomeOutlined } from '@ant-design/icons';
import { Outlet, useNavigate } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;
type MenuItem = GetProp<MenuProps, 'items'>[number];

const items: MenuItem[] = [
  {
    key: '/admin',
    icon: <HomeOutlined />,
    label: 'DashBoard',
  },
  {
    key: '/admin/product',
    icon: <CrownOutlined />,
    label: 'Product',
  }
  ,
  {
    key: '/admin/category',
    icon: <CrownOutlined />,
    label: 'Category',
  },
  {
    key: '/admin/user',
    icon: <CrownOutlined />,
    label: 'UserAccount',
  }
];

const Admin: React.FC = () => {
  const navigate = useNavigate(); // chuyển trang tự động
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const handleClickItem: MenuProps['onClick'] = (e)=>{
      navigate(e.key)
  
  }

  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="demo-logo-vertical" />
        
        <Menu
        onClick={handleClickItem}
        defaultSelectedKeys={['/admin']}
        // mode={mode}
        // mode=''
        theme={'dark'}
        items={items}
      />
        {/* <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} /> */}
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: '24px 16px 0' }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
           <Outlet/>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Admin;