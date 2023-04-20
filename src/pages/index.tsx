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
import apps from "../data/appsOnly.json";
import landingPages from "../data/landingPages.json";

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
const typedApps: Site = apps as any;
const typedLandingPages: Site = landingPages as Site;

import { Typography } from "antd";
import { useState } from "react";

const { Title } = Typography;

const GraphsPage = () => {
  const [dataSource, setDataSource] = useState<any>(typedApps);
  return (
    <Layout>
      <Space direction="vertical" size="middle" style={{ display: "flex" }}>
        <Row justify="center">
          <Col span={24}>
            <Title style={{ textAlign: "center" }}>
              {dataSource === typedApps ? "App Charts" : "Landing Page Charts"}
            </Title>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Button
                onClick={() => setDataSource(typedApps)}
                style={{ marginRight: "16px" }}
              >
                App Data
              </Button>
              <Button onClick={() => setDataSource(typedLandingPages)}>
                Landing Page Data
              </Button>
            </div>
          </Col>
        </Row>
        <Row justify="center">
          <Col span={24}>
            <Card title="CDNs">
              <CDNPie dataSource={dataSource} />
            </Card>
          </Col>
        </Row>
        <Row justify="center">
          <Col span={24}>
            <Card title="PAAS">
              <PaasPie dataSource={dataSource} />
            </Card>
          </Col>
        </Row>
        <Row justify="center">
          <Col span={24}>
            <Card title="Static Site Generator">
              <SsgPie dataSource={dataSource} />
            </Card>
          </Col>
        </Row>
        <Row justify="center">
          <Col span={24}>
            <Card title="Page Builders">
              <PageBuildersPie dataSource={dataSource} />
            </Card>
          </Col>
        </Row>
        <Row justify="center">
          <Col span={24}>
            <Card title="UI Frameworks">
              <UIFrameworksPie dataSource={dataSource} />
            </Card>
          </Col>
        </Row>
        <Row justify="center">
          <Col span={24}>
            <Card title="Web Frameworks">
              <WebFrameworksPie dataSource={dataSource} />
            </Card>
          </Col>
        </Row>
        <Row justify="center">
          <Col span={24}>
            <Card title="Web Servers">
              <WebServersPie dataSource={dataSource} />
            </Card>
          </Col>
        </Row>
        <Row justify="center">
          <Col span={24}>
            <Card title="Javascript Frameworks">
              <JSFrameworksPie dataSource={dataSource} />
            </Card>
          </Col>
        </Row>
        <Row justify="center">
          <Col span={24}>
            <Card title="Country">
              <CountryPie dataSource={dataSource} />
            </Card>
          </Col>
        </Row>
        <Row justify="center">
          <Col span={24}>
            <Card title="Mobile Responsiveness">
              <ResponsivePie dataSource={dataSource} />
            </Card>
          </Col>
        </Row>
        <Row justify="center">
          <Col span={24}>
            <Card title="Technology Spend">
              <TechnologySpendPie dataSource={dataSource} />
            </Card>
          </Col>
        </Row>
      </Space>
    </Layout>
  );
};

export default GraphsPage;
