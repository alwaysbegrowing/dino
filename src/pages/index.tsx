import { Row, Col, Button } from "antd";
import CDNPie from "../components/charts/cdnPie";
import PaasPie from "../components/charts/paasPie";
import SsgPie from "../components/charts/staticSiteGenerator";

const GraphsPage = () => {
  return (
    <>
      <CDNPie />
      <PaasPie />
      <SsgPie />
    </>
  );
};

export default GraphsPage;
