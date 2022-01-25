import React, { useState } from 'react';
import Modal from '../../../common/modal/Modal';

Device.propTypes = {

};

function Device() {
  const [isShowModal, setIsShowModal] = useState(false);
  const handleCancel = () => {
    setIsShowModal(false);
    console.log('Cancel');
  }

  const handleSubmit = () => {
    setIsShowModal(false);
    console.log('Submit');
  }

  const handleOpenModal = () => {
    setIsShowModal(true);
  }

  const handleCloseModal = () => {
    setIsShowModal(false);
  }
  return (
    <>
      <button id="myBtn" onClick={handleOpenModal}>Open Modal</button>

      <Modal
        titleModal="Modal Header"
        onCloseModal={handleCloseModal}
        isShowModal={isShowModal}
        footer={[
          <button key="cancel" onClick={handleCancel}>
            Cancel
          </button>,
          <button key="submit" onClick={handleSubmit}>
            Submit
          </button>
        ]}
      >
        <div>duy Pro</div>
      </Modal>
    </>
  );
}

export default Device;