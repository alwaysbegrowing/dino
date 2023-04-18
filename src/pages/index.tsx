import { Row, Col, Button } from "antd";
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
      <Row>
        <Col span={4}></Col>
        <Col span={16}>
          <Title style={{ display: "flex", justifyContent: "center" }}>
            Charts
          </Title>
        </Col>
        <Col span={4}></Col>
      </Row>
      <Row>
        <Col span={4}></Col>
        <Col span={16}>
          <Title
            style={{ display: "flex", justifyContent: "center" }}
            level={3}
          >
            CDNs
          </Title>
          <CDNPie />
        </Col>
        <Col span={4}></Col>
      </Row>
      <Row>
        <Col span={4}></Col>
        <Col span={16}>
          <Title
            style={{ display: "flex", justifyContent: "center" }}
            level={3}
          >
            PAAS
          </Title>

          <PaasPie />
        </Col>
        <Col span={4}></Col>
      </Row>
      <Row>
        <Col span={4}></Col>
        <Col span={16}>
          <Title
            style={{ display: "flex", justifyContent: "center" }}
            level={3}
          >
            Static Site Generator
          </Title>

          <SsgPie />
        </Col>
        <Col span={4}></Col>
      </Row>
      <Row>
        <Col span={4}></Col>
        <Col span={16}>
          <Title
            style={{ display: "flex", justifyContent: "center" }}
            level={3}
          >
            Page Builders
          </Title>

          <PageBuildersPie />
        </Col>
        <Col span={4}></Col>
      </Row>
      <Row>
        <Col span={4}></Col>
        <Col span={16}>
          <Title
            style={{ display: "flex", justifyContent: "center" }}
            level={3}
          >
            UI Frameworks
          </Title>
          <UIFrameworksPie />
        </Col>
        <Col span={4}></Col>
      </Row>
      <Row>
        <Col span={4}></Col>
        <Col span={16}>
          <Title
            style={{ display: "flex", justifyContent: "center" }}
            level={3}
          >
            Web Frameworks
          </Title>
          <WebFrameworksPie />
        </Col>
        <Col span={4}></Col>
      </Row>
      <Row>
        <Col span={4}></Col>
        <Col span={16}>
          <Title
            style={{ display: "flex", justifyContent: "center" }}
            level={3}
          >
            Web Servers
          </Title>
          <WebServersPie />
        </Col>
        <Col span={4}></Col>
      </Row>
      <Row>
        <Col span={4}></Col>
        <Col span={16}>
          <Title
            style={{ display: "flex", justifyContent: "center" }}
            level={3}
          >
            Javascript Frameworks
          </Title>
          <JSFrameworksPie />
        </Col>
        <Col span={4}></Col>
      </Row>
      <Row>
        <Col span={4}></Col>
        <Col span={16}>
          <Title
            style={{ display: "flex", justifyContent: "center" }}
            level={3}
          >
            Country
          </Title>
          <CountryPie />
        </Col>
        <Col span={4}></Col>
      </Row>
      <Row>
        <Col span={4}></Col>
        <Col span={16}>
          <Title
            style={{ display: "flex", justifyContent: "center" }}
            level={3}
          >
            Mobile Responsiveness
          </Title>
          <ResponsivePie />
        </Col>
        <Col span={4}></Col>
      </Row>
      <Row>
        <Col span={4}></Col>
        <Col span={16}>
          <Title
            style={{ display: "flex", justifyContent: "center" }}
            level={3}
          >
            Technology Spend
          </Title>
          <TechnologySpendPie />
        </Col>
        <Col span={4}></Col>
      </Row>
    </Layout>
  );
};

export default GraphsPage;
