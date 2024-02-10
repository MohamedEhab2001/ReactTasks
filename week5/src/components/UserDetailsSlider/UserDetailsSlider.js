import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { fetchUsers, fetchPostsByUser,addPost,editPost,deletePost } from '../../services/apiService';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Post from '../PostManagement/Post';
import AddPostModal from '../PostManagement/AddPost';
import Button from '../../shared/Button';
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'black' }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'black' }}
      onClick={onClick}
    />
  );
}

const UserList = ({ userId }) => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [userPosts, setUserPosts] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState();
  const [showAddModal, setShowAddModal] = useState(false); 

  useEffect(() => {
    fetchUsers().then(setUsers);
  }, []);

  useEffect(() => {
    if (userId ) {
      const fetchInitialUserPosts = async () => {
        try {
          const posts = await fetchPostsByUser(userId);
          setUserPosts(posts);
          const user = users.find((user) => user.id === userId);
          setSelectedUserId(userId);
          setSelectedUser(user);

        } catch (error) {
          console.error('Error fetching posts:', error);
        }
      };

      if (users.length > 0) {
        fetchInitialUserPosts();
      }
    }
  }, [userId, users]);

  const handleUserClick = async (userId) => {
    try {
      setSelectedUserId(userId);
      const posts = await fetchPostsByUser(userId);
      setUserPosts(posts);
      setSelectedUser(users.find((user) => user.id === userId));
     
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const handleAddPost = async ({ userId, title, body }) => {
    try {
      const response = await addPost(userId, title, body); 
      setUserPosts([...userPosts, response]);
      setShowAddModal(false); 
    } catch (error) {
      console.error('Failed to add new post:', error);
    }
  };
  
  const handleEditPost = async ({ userId,postId, title, body }) => {
    try {
      await editPost(userId,postId, title, body); 
      const updatedUserPosts = userPosts.map((post) =>
      post.id === postId ? { ...post, title, body } : post
    );
    setUserPosts(updatedUserPosts);
     
    } catch (error) {
      console.error('Failed to edit post:', error);
    }
  };

  
  const handleDeletePost = async (userId, postId) => {
    try {
      await deletePost(userId, postId);
      setUserPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
      
    } catch (error) {
      console.error('Failed to delete post:', error);
    }
  };


  return (
    <div className="container">
      <h2 className="my-4">User List</h2>
      <Slider {...sliderSettings}>
        {users.map((user) => (
          <div key={user.id} className="col">
            <div className="card text-center">
              <div className="card-body">
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

      <div className='m-2'>
        <Button onClick={() => setShowAddModal(true)} color={'success'} name={' Add Post'} />
      </div>
      
      <AddPostModal
        userId={selectedUserId} 
        show={showAddModal}
        handleClose={() => setShowAddModal(false)}
        handleAddPost={handleAddPost}
      />

      {selectedUser && (
        <div className="mt-4">
          <div className="row">
            <div className="col">
              <h4>
                Posts of <strong className="text-primary">{selectedUser.username}</strong>
              </h4>
              {userPosts.map((post) => (
                <Post key={post.id} 
                userId={selectedUserId} 
                post={post} 
                onEdit={handleEditPost}
                onDelete={() => handleDeletePost(selectedUserId, post.id)} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserList;
