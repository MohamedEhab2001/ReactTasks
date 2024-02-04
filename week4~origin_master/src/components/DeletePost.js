import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const DeletePost = ({userId, postId, onDelete }) => {
  

  const [showModal, setShowModal] = useState(false);

  const handleShow = () => {setShowModal(true);
  console.log('user id after clicking the button =',userId)}
  const handleClose = () => setShowModal(false);

  const handleDelete = () => {
    onDelete(userId, postId);
    handleClose();
  };
  

  return (
    <>
      <Button variant="danger" onClick={handleShow}>
        Delete
      </Button>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          Are you sure you want to delete this post?
        </Modal.Body>

        <Modal.Footer>
          
          <Button variant="success" onClick={handleDelete}>
            Yes
          </Button>
          <Button variant="danger" onClick={handleClose}>
            No
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeletePost;
