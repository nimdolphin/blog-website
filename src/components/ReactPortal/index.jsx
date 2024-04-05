import { useState } from "react";
import { createPortal } from "react-dom";
import Modal from "../Modal";
import Button from "../Button";

const ReactPortal = () => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const onClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <Button
        onClick={toggleModal}
        label="Write a post"
        type="submit"
        width={500}
      />
      {showModal && createPortal(<Modal onClose={onClose} />, document.body)}
    </>
  );
};

export default ReactPortal;
