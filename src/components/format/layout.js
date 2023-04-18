import { Layout } from "antd";
const { Header, Footer, Content } = Layout;

// const siderStyle: React.CSSProperties = {
//   textAlign: 'center',
//   lineHeight: '120px',
//   color: '#fff',
//   backgroundColor: '#3ba0e9',
// }
  const currentYear = new Date().getFullYear();

export default function CustomLayout({ children }) {
  return (
    <Layout style={{ height: "100vh" }}>
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
      Judgement DAO {currentYear}
      </Footer>
    </Layout>
  );
}
