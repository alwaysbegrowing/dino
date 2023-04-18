import { ReactNode, useState } from "react";
import { Layout, Menu } from "antd";
import { useRouter } from "next/router";
const { Header, Footer, Sider, Content } = Layout;

// const siderStyle: React.CSSProperties = {
//   textAlign: 'center',
//   lineHeight: '120px',
//   color: '#fff',
//   backgroundColor: '#3ba0e9',
// }

export default function CustomLayout({ children }) {
  return (
    <Layout style={{ height: "100vh" }} className="blur">
      <Sider trigger={null}>
        <div
          style={{
            height: "32px",
            margin: "16px",
            background: "rgba(255, 255, 255, 0.3)",
          }}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            textAlign: "right",
            height: 48,
            color: "#fff",
            lineHeight: "48px",
          }}
        ></Header>
        <Content style={{ padding: "24px" }}>
          <div
            style={{
              // backgroundColor: 'white',
              padding: "24px",
              height: "100%",
              overflow: "auto",
            }}
          >
            {children}
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Footer
        </Footer>
      </Layout>
    </Layout>
  );
}
