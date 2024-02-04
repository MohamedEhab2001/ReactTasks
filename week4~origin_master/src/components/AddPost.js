
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const AddPostModal = ({userId, show, handleClose, handleAddPost }) => {
  
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleAddClick = () => {
    handleAddPost({ userId, title, body });
    setTitle('');
    setBody('');
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Post</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <div className="mb-3">
            <label htmlFor="postTitle" className="form-label">Title</label>
            <input 
              type="text" 
              className="form-control" 
              id="postTitle" 
              value={title} 
              onChange={(e) => setTitle(e.target.value)} 
            />
          </div>
          <div className="mb-3">
            <label htmlFor="postBody" className="form-label">Body</label>
            <textarea 
              className="form-control" 
              id="postBody" 
              rows="3" 
              value={body} 
              onChange={(e) => setBody(e.target.value)} 
            ></textarea>
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={handleClose}>Close</Button>
        <Button variant="success" onClick={handleAddClick}>Add Post</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddPostModal;
