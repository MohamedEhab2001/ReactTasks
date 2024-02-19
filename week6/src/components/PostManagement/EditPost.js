
import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from '../../shared/Button';
const EditPost = ({ userId,postId,show, handleClose, handleEdit, title, body, setTitle, setBody }) => {

const handleEditPost = () => {
  console.log("in edit componenet ",postId, title, body)
  handleEdit(postId, title, body );
};
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Post</Modal.Title>
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
        <Button onClick={handleClose} color={'danger'} name={' Close'} />
        <Button onClick={handleEditPost} color={'success'} name={' Save Changes'} />
      </Modal.Footer>
    </Modal>
  );
};

export default EditPost;
