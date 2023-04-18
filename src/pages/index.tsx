import { Row, Col, Card, Space } from "antd";
import Layout from "../components/format/layout";
import CDNPie from "../components/charts/cdnPie";
import PaasPie from "../components/charts/paasPie";
import SsgPie from "../components/charts/staticSiteGenerator";
import PageBuildersPie from "../components/charts/pageBuilders";
import UIFrameworksPie from "../components/charts/uiFrameworks";
import WebFrameworksPie from "../components/charts/webFrameworks";
import WebServersPie from "../components/charts/webServers";
import CountryPie from "../components/charts/country";
import ResponsivePie from "../components/charts/responsive";
import TechnologySpendPie from "../components/charts/technologySpend";
import JSFrameworksPie from "../components/charts/javascriptFrameworks";

import { Typography } from "antd";

const { Title } = Typography;

const GraphsPage = () => {
  return (
    <Layout>
      <Space
        direction="vertical"
        size="middle"
        style={{ display: "flex", width: "100%" }}
      >
        <Row justify="center">
          <Col span={24}>
            <Title style={{ textAlign: "center" }}>Charts</Title>
          </Col>
        </Row>
        <Row justify="center" gutter={[16, 16]}>
          <Col>
            <Card title="CDNs" bodyStyle={{ padding: 24, width: 425 }}>
              <CDNPie />
            </Card>
          </Col>
          <Col>
            <Card title="PAAS" bodyStyle={{ padding: 24, width: 425 }}>
              <PaasPie />
            </Card>
          </Col>
          <Col>
            <Card
              title="Static Site Generator"
              bodyStyle={{ padding: 24, width: 425 }}
            >
              <SsgPie />
            </Card>
          </Col>
          <Col>
            <Card title="Page Builders" bodyStyle={{ padding: 24, width: 425 }}>
              <PageBuildersPie />
            </Card>
          </Col>
          <Col>
            <Card title="UI Frameworks" bodyStyle={{ padding: 24, width: 425 }}>
              <UIFrameworksPie />
            </Card>
          </Col>
          <Col>
            <Card
              title="Web Frameworks"
              bodyStyle={{ padding: 24, width: 425 }}
            >
              <WebFrameworksPie />
            </Card>
          </Col>
          <Col>
            <Card title="Web Servers" bodyStyle={{ padding: 24, width: 425 }}>
              <WebServersPie />
            </Card>
          </Col>
          <Col>
            <Card
              title="Javascript Frameworks"
              bodyStyle={{ padding: 24, width: 425 }}
            >
              <JSFrameworksPie />
            </Card>
          </Col>
          <Col>
            <Card title="Country" bodyStyle={{ padding: 24, width: 425 }}>
              <CountryPie />
            </Card>
          </Col>
          <Col>
            <Card
              title="Mobile Responsiveness"
              bodyStyle={{ padding: 24, width: 425 }}
            >
              <ResponsivePie />
            </Card>
          </Col>
          <Col>
            <Card
              title="Technology Spend"
              bodyStyle={{ padding: 24, width: 425 }}
            >
              <TechnologySpendPie />
            </Card>
          </Col>
        </Row>
      </Space>
    </Layout>
  );
};

export default GraphsPage;
