import { Row, Col, Button, Card, Space } from "antd";
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
import sites from "../data/sites.json";

interface Site {
  URL: string;
  status: string;
  technologies: {
    name: string;
    slug: string;
    versions: string[];
    trafficRank: number;
    categories: {
      id: number;
      slug: string;
      name: string;
    }[];
  }[];
  https: boolean;
  linkedin: string[];
  companyName: string;
  industry: string;
  about: string;
  locations: string[];
  companySize: string;
  companyType: string;
  companyFounded: number;
  employees: string[];
  technologySpend: string;
}

const typedSites: Site = sites as Site;

import { Typography } from "antd";
import { useState } from "react";

const { Title } = Typography;

const GraphsPage = () => {
  const [showAppData, setShowAppData] = useState(true);
  return (
    <Layout>
      <Space direction="vertical" size="middle" style={{ display: "flex" }}>
        <Row justify="center">
          <Col span={24}>
            <Title style={{ textAlign: "center" }}>Charts</Title>
            <Button onClick={() => setShowAppData(true)}>App Data</Button>
            <Button onClick={() => setShowAppData(false)}>
              Landing Page Data
            </Button>
          </Col>
        </Row>
        <Row justify="center">
          <Col span={24}>
            <Card title="CDNs">
              <CDNPie dataSource={typedSites} />
            </Card>
          </Col>
        </Row>
        <Row justify="center">
          <Col span={24}>
            <Card title="PAAS">
              <PaasPie />
            </Card>
          </Col>
        </Row>
        <Row justify="center">
          <Col span={24}>
            <Card title="Static Site Generator">
              <SsgPie />
            </Card>
          </Col>
        </Row>
        <Row justify="center">
          <Col span={24}>
            <Card title="Page Builders">
              <PageBuildersPie />
            </Card>
          </Col>
        </Row>
        <Row justify="center">
          <Col span={24}>
            <Card title="UI Frameworks">
              <UIFrameworksPie />
            </Card>
          </Col>
        </Row>
        <Row justify="center">
          <Col span={24}>
            <Card title="Web Frameworks">
              <WebFrameworksPie />
            </Card>
          </Col>
        </Row>
        <Row justify="center">
          <Col span={24}>
            <Card title="Web Servers">
              <WebServersPie />
            </Card>
          </Col>
        </Row>
        <Row justify="center">
          <Col span={24}>
            <Card title="Javascript Frameworks">
              <JSFrameworksPie />
            </Card>
          </Col>
        </Row>
        <Row justify="center">
          <Col span={24}>
            <Card title="Country">
              <CountryPie />
            </Card>
          </Col>
        </Row>
        <Row justify="center">
          <Col span={24}>
            <Card title="Mobile Responsiveness">
              <ResponsivePie />
            </Card>
          </Col>
        </Row>
        <Row justify="center">
          <Col span={24}>
            <Card title="Technology Spend">
              <TechnologySpendPie />
            </Card>
          </Col>
        </Row>
      </Space>
    </Layout>
  );
};

export default GraphsPage;
