import { Row, Col, Button } from "antd";
import CDNPie from "../components/charts/cdnPie";
import PaasPie from "../components/charts/paasPie";

const GraphsPage = () => {
  return (
    <>
      <CDNPie />
      <PaasPie />
    </>
  );
};

export default GraphsPage;
