
import React, { useState } from 'react';
import {
  AppstoreAddOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined
} from '@ant-design/icons';
import { Button, Menu, Layout, theme } from 'antd';
const { Header, Content, Footer, Sider } = Layout;

const items = [
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  BarChartOutlined,
  CloudOutlined,
  AppstoreAddOutlined,
  TeamOutlined,
  ShopOutlined,
].map((icon, index) => ({
  key: String(index + 1),
  icon: React.createElement(icon),
  label: `nav  ${index + 1}`,
}));

function App() {
  // const [collapsed, setCollapsed] = useState(false);
  // const toggleCollapsed = () => {
  //   setCollapsed(!collapsed);
  // };
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <>
      <Layout>
        <Sider breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
          style={{  height: '100vh', position: 'fixed', left: 0, top: 0, bottom: 0 }} >
          <div className="demo-logo-vertical" />
          <Menu theme="dark" mode="inlline" defaultSelectedKeys={['4']} items={items} />
        </Sider>
        <Layout style={{}}>
          <Header style={{ padding: 0, background: colorBgContainer }} />
          <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
            <div style={{ padding: 24, textAlign: 'center', background: colorBgContainer, borderRadius: borderRadiusLG }}>
              <p>sdasfsdasdsadsadsadsadsadsadsadsafsaf</p>
              {
                Array.from(
                  {
                    length: 100,
                  },
                  (_, index)=>(
                    <React.Fragment key={index}>
                      {index % 20 === 0 && index ? 'more' : '...'}
                      <br/>
                    </React.Fragment>
                  )
                )
              }
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Arnel ©{new Date().getFullYear()} created by arnel
          </Footer>
        </Layout>
      </Layout>
    </>
  );
}

export default App;
