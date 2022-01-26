import React from 'react';
import './modal.scss'

export interface ModalProps {
  isShowModal: boolean,
  footer?: React.ReactNode | string,
  onCloseModal: Function,
  titleModal: string
}

const Modal: React.FC<ModalProps> = ({ isShowModal, footer, onCloseModal, titleModal }: ModalProps) => {

  const handleCloseModal = () => {
    if (onCloseModal) {
      onCloseModal();
    }
  }

  const renderFooter = () => {
    return (
      <div className="modal-footer">
        {footer}
      </div>
    )
  }

  return (
    <div>
      {isShowModal &&
        <div id="myModal" className="modal">

          <div className="modal-content">
            <div className="modal-header">
              <span className="close" onClick={handleCloseModal}>&times;</span>
              <h2>{titleModal}</h2>
            </div>
            <div className="modal-body">
              <p>Some text in the Modal Body</p>
              <p>Some other text...</p>
            </div>
            {renderFooter()}
          </div>

        </div>
      }
    </div>
  );
}

export default Modal;