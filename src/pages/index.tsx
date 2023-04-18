import { Row, Col, Button } from "antd";
import CDNPie from "../components/charts/cdnPie";
import PaasPie from "../components/charts/paasPie";
import SsgPie from "../components/charts/staticSiteGenerator";
import PageBuildersPie from "../components/charts/pageBuilders";
import UIFrameworks from "../components/charts/uiFrameworks";
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
      <UIFrameworks />
    </>
  );
};

export default GraphsPage;
