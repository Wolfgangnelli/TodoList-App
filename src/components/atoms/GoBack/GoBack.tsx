import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router';

const GoBack = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <Row className='mt-3'>
      <Col>
        <div onClick={handleGoBack} className='text-white fw-semibold text-decoration-underline c-pointer'><i className='fa-solid fa-arrow-left-long'></i> Go Back</div>
      </Col>
    </Row>
  );
};

export default GoBack;