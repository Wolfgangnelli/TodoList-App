import React, { useState, useEffect } from 'react';
import { Button } from '../../atoms';
import "./SidePane.scss";

interface Props {
    isOpen: boolean
    onClose: () => void
}

const SidePanel = (props: Props) => {
    const { isOpen, onClose } = props;

    const [isPanelOpen, setIsPanelOpen] = useState<boolean>(isOpen);

    const handleClose = () => {
        setIsPanelOpen(false);
        onClose();
    };

    useEffect(() => {
        isOpen && setIsPanelOpen(true);
    }, [isOpen]);

  return (
    <div className={`side-panel ${isPanelOpen ? 'open' : ''}`}>
        <div className="side-panel-content">
            <Button className='close-button' onClick={handleClose} label={<i className='fa-regular fa-circle-xmark'></i>} />
        </div>
    </div>
  );
};

export default SidePanel;