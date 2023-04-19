import React from 'react';
import { Row, Col } from 'react-bootstrap';
import "./MainTitle.scss";

interface Props {
    label: string
}

const MainTitle = (props: Props) => {
    const { label = "" } = props;
    
  return (
    <Row>
        <Col>
        <h1 className="text-center title-tasks-lists">{label}</h1>
        </Col>
  </Row>
  );
};

export default MainTitle;