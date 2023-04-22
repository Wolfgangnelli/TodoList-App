import React from 'react';
import { Row, Col } from 'react-bootstrap';
import "./MainTitle.scss";

interface Props {
    title: string
}

const MainTitle = (props: Props) => {
    const { title = "" } = props;
    
  return (
    <Row>
        <Col>
        <h1 className="text-center title-tasks-lists">{title}</h1>
        </Col>
  </Row>
  );
};

export default MainTitle;