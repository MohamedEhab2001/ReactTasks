import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from '../../shared/Button';

const DeletePost = ({ userId, postId, onDelete }) => {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const handleDelete = () => {
    onDelete({ userId, postId });
    handleClose();
  };

  return (
    <>
      <Button onClick={handleShow} color={'danger'} name={'Delete'} />
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          Are you sure you want to delete this post?
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={handleDelete} color={'success'} name={'Yes'} />
          <Button onClick={handleClose} color={'danger'} name={'No'} />
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeletePost;
