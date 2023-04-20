import { Row, Col, Card, Space, Button } from "antd";
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

// const typedSites: Site = sites as Site;
const typedApps: Site = apps as unknown as Site;
const typedLandingPages: Site = landingPages as unknown as Site;

import { Typography } from "antd";
import { useState } from "react";

const { Title } = Typography;

const GraphsPage = () => {
  const [dataSource, setDataSource] = useState<Site>(typedApps);
  return (
    <Layout>
      <Space
        direction="vertical"
        size="middle"
        style={{ display: "flex", width: "100%" }}
      >
        <Row justify="center">
          <Col span={24}>
            <Title style={{ textAlign: "center" }}>
              {dataSource === typedApps ? "App Charts" : "Other Page Charts"}
            </Title>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Button
                onClick={() => setDataSource(typedApps)}
                style={{ marginRight: "16px" }}
              >
                App Data
              </Button>
              <Button onClick={() => setDataSource(typedLandingPages)}>
                Other Page Data
              </Button>
            </div>
          </Col>
        </Row>
        <Row justify="center">
          <Col span={24}>
            <Card title="CDNs" bodyStyle={{ padding: 24, width: 425 }}>
              <CDNPie dataSource={dataSource} />
            </Card>
          </Col>
        </Row>
        <Row justify="center">
          <Col span={24}>
            <Card title="PAAS" bodyStyle={{ padding: 24, width: 425 }}>
              <PaasPie dataSource={dataSource} />
            </Card>
          </Col>
        </Row>
        <Row justify="center">
          <Col span={24}>
            <Card
              title="Static Site Generator"
              bodyStyle={{ padding: 24, width: 425 }}
            >
              <SsgPie dataSource={dataSource} />
            </Card>
          </Col>
        </Row>
        <Row justify="center">
          <Col span={24}>
            <Card title="Page Builders" bodyStyle={{ padding: 24, width: 425 }}>
              <PageBuildersPie dataSource={dataSource} />
            </Card>
          </Col>
        </Row>
        <Row justify="center">
          <Col span={24}>
            <Card title="UI Frameworks" bodyStyle={{ padding: 24, width: 425 }}>
              <UIFrameworksPie dataSource={dataSource} />
            </Card>
          </Col>
        </Row>
        <Row justify="center">
          <Col span={24}>
            <Card
              title="Web Frameworks"
              bodyStyle={{ padding: 24, width: 425 }}
            >
              <WebFrameworksPie dataSource={dataSource} />
            </Card>
          </Col>
        </Row>
        <Row justify="center">
          <Col span={24}>
            <Card title="Web Servers" bodyStyle={{ padding: 24, width: 425 }}>
              <WebServersPie dataSource={dataSource} />
            </Card>
          </Col>
        </Row>
        <Row justify="center">
          <Col span={24}>
            <Card
              title="Javascript Frameworks"
              bodyStyle={{ padding: 24, width: 425 }}
            >
              <JSFrameworksPie dataSource={dataSource} />
            </Card>
          </Col>
        </Row>
        <Row justify="center">
          <Col span={24}>
            <Card title="Country" bodyStyle={{ padding: 24, width: 425 }}>
              <CountryPie dataSource={dataSource} />
            </Card>
          </Col>
        </Row>
        <Row justify="center">
          <Col span={24}>
            <Card
              title="Mobile Responsiveness"
              bodyStyle={{ padding: 24, width: 425 }}
            >
              <ResponsivePie dataSource={dataSource} />
            </Card>
          </Col>
        </Row>
        <Row justify="center">
          <Col span={24}>
            <Card
              title="Technology Spend"
              bodyStyle={{ padding: 24, width: 425 }}
            >
              <TechnologySpendPie dataSource={dataSource} />
            </Card>
          </Col>
        </Row>
      </Space>
    </Layout>
  );
};

export default GraphsPage;
