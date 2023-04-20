import React, { useContext } from 'react';
import { Row, Col } from 'react-bootstrap';
import { SidePanelContext } from '../../../app/App';
import "./AddListSection.scss";

const AddListSection = () => {
    const { handleOpenSidePanel } = useContext(SidePanelContext);

  return (
    <Row>
        <Col className='d-flex justify-content-center align-items-center flex-column pt-3 pb-1'>
            <span style={{ cursor: 'pointer' }} onClick={handleOpenSidePanel}><i className='fa-regular fa-square-plus fa-2xl'></i></span>
            <p className='mb-0 pt-1'>Add List</p>
        </Col>
  </Row>
  );
};

export default AddListSection;