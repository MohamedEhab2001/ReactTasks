import React, { useState } from 'react';

import EditPost from './EditPost'; 
import DeletePost from './DeletePost';
import Button from '../../shared/Button';
const Post = ({ userId, post,onEdit, onDelete }) => {
   console.log("in post ,to edit user id =",userId)
  const [showEditModal, setShowEditModal] = useState(false);
  const [editedTitle, setEditedTitle] = useState(post.title);
  const [editedBody, setEditedBody] = useState(post.body);

  const handleEdit = (userId,postId, title, body) => {
    
    console.log("Inside editpost compoenent  ",userId)
    onEdit(userId,postId, title, body);
    setShowEditModal(false);
  };

  return (
    <div className="list-group-item p-3 m-2 border border-dark">
      <h5 className="mb-2">{post.title}</h5>
      <p>{post.body}</p>
      
      <Button onClick={() => setShowEditModal(true)} color={'primary'} name={'Edit'}></Button>
      <DeletePost userId={userId} postId={post.id} onDelete={() => onDelete(userId, post.id)} />

      
      
        <EditPost
        userId={userId}
        postId={post.id}
        show={showEditModal}
          title={editedTitle}
          body={editedBody}
          setTitle={setEditedTitle}
          setBody={setEditedBody}
          handleEdit={handleEdit}
          handleClose={() => setShowEditModal(false)}
        />
     
    </div>
  );
};

export default Post;
