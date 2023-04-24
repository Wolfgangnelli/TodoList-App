import React from 'react';
import { Modal, Button } from 'react-bootstrap';

interface Props {
    show: boolean
    onHide: () => void
}

function CenteredModal(props: Props) {

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className='text-black'
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Symbols legend
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div>
                <h4>Status</h4>
                <p>
                    <span className='task-item-completed'>
                        <i className='fa-solid fa-circle'></i>
                    </span>
                    {" "}= Task completed (DONE)
                </p>
                <p>
                    <span className='task-item-notcompleted'>
                        <i className='fa-solid fa-circle'></i>
                    </span>
                    {" "}= Task not completed (PENDING)
                </p>
            </div>
            <div>
                <h4>Priority</h4>
                    <p>1 = High priority</p>
                    <p>2 = Medium priority</p>
                    <p>3 = Low priority</p>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  

export default CenteredModal;