import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router';

const GoBackLink = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <Row className='mt-3'>
      <Col>
        <div onClick={handleGoBack} className='text-white fw-semibold text-decoration-underline'><i className='fa-solid fa-arrow-left-long'></i> Go Back</div>
      </Col>
    </Row>
  );
};

export default GoBackLink;