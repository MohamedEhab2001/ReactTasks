import React, { useState } from 'react';
import Slider from 'react-slick';
import {  useQueryClient } from 'react-query';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Post from '../PostManagement/Post';
import AddPostModal from '../PostManagement/AddPost';
import Button from '../../shared/Button';
import { useAuth } from '../../context/AuthContext';
import { sliderSettings } from '../../shared/SliderSettings';
import { useUserPosts } from '../../hooks/useUserPosts';
import { useUsers } from '../../hooks/useUsers';
import { usePostMutations } from '../../hooks/usePostMutations';

const UserList = () => {
  const { user } = useAuth();
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(user?.id);
  const [selectedCard, setSelectedCard] = useState(null);

  const queryClient = useQueryClient();

 const { data: users } = useUsers();
 const { data: userPosts, isLoading, error } = useUserPosts(selectedUserId);
 const { addMutation, editMutation, deleteMutation } = usePostMutations(selectedUserId);
 
  
  const handleUserClick = (userId) => {
    setSelectedUserId(userId);
    setSelectedCard(userId); 
  };

  const handleAddPost = ({ title, body }) => {
    setShowAddModal(false);
    addMutation.mutate({ userId: selectedUserId, title, body });
  };

  const handleEditPost = (postId, title, body) => {
    console.log("In handle edit post",postId)
    editMutation.mutate({ postId, title, body });
  };
  const handleDeletePost = (userId,postId) => {
    console.log('In delete handle post, post id =',postId,userId)
    deleteMutation.mutate(postId);
  };
  
  return (
    <div className="container">
      <h2 className="my-4">User List</h2>
      <Slider {...sliderSettings}>
        {users?.map((user) => (
          <div key={user.id} >
            <div className="card text-center">
            <div className={`card-body col ${selectedCard === user.id ? 'bg-info' : ''}`}>
                <h5 className="card-title">{user.id} {'. '} {user.username}</h5>
                <p className="card-text">{user.email}</p>
                <p className="card-text">{user.phone}</p>
                <p className="card-text">City: {user.address.city}</p>
                <Button onClick={() => handleUserClick(user.id)} color={'primary'} name={' Click here to see posts'} />
              </div>
            </div>
          </div>
        ))}
      </Slider>

      <Button onClick={() => setShowAddModal(true)}>Add Post</Button>

      <AddPostModal
        show={showAddModal}
        handleClose={() => setShowAddModal(false)}
        handleAddPost={handleAddPost}
        userId={selectedUserId}

      />

      {userPosts?.map((post) => (
        <Post
        userId={selectedUserId}
          key={post.id}
          post={post}
          onEdit={handleEditPost}
          onDelete={handleDeletePost}
        />
      ))}
    </div>
  );
};

export default UserList;
