import { Row, Col, Button } from "antd";
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

import { Typography } from "antd";

const { Title } = Typography;

const GraphsPage = () => {
  return (
    <>
      <Title style={{ color: "white" }}>CDNs</Title>
      <CDNPie />
      <Title style={{ color: "white" }}>PAAS</Title>

      <PaasPie />
      <Title style={{ color: "white" }}>Static Site Generator</Title>

      <SsgPie />
      <Title style={{ color: "white" }}>Page Builders</Title>

      <PageBuildersPie />
      <Title style={{ color: "white" }}>UI Frameworks</Title>
      <UIFrameworksPie />
      <Title style={{ color: "white" }}>Web Frameworks</Title>
      <WebFrameworksPie />
      <Title style={{ color: "white" }}>Web Servers</Title>
      <WebServersPie />
      <Title style={{ color: "white" }}>Country</Title>
      <CountryPie />
      <Title style={{ color: "white" }}>Mobile Responsiveness</Title>
      <ResponsivePie />
      <Title style={{ color: "white" }}>Technology Spend</Title>
      <TechnologySpendPie />
    </>
  );
};

export default GraphsPage;
