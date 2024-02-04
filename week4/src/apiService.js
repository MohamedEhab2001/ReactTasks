import axios from 'axios';
import * as apiUrls from './apiUrls';

export async function fetchUsers() {
  try {
    const response = await axios.get(apiUrls.USERS_URL);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch users:', error);
    throw new Error('Failed to fetch users');
  }
}

export async function fetchPostsByUser(userId) {
  try {
    const response = await axios.get(apiUrls.USER_POSTS_URL(userId));
    return response.data;
  } catch (error) {
    console.error(`Failed to fetch posts for user ${userId}:`, error);
    throw new Error(`Failed to fetch posts for user ${userId}`);
  }
}

/**
 * Adds a new post for a specified user.
 *
 * @param {number} userId - The ID of the user for whom the post will be added.
 * @param {string} title - The title of the new post.
 * @param {string} body - The body/content of the new post.
 * @returns {Promise<object>} A Promise that resolves to the added post data.
 * @throws {Error} If the addition process fails.
 *
 * @example
 * // Example usage of addPost
 * try {
 *   const addedPost = await addPost(1, 'New Post Title', 'Content of the new post');
 *   console.log(addedPost);
 *   // Output: { userId: 1, id: 101, title: 'New Post Title', body: 'Content of the new post' }
 * } catch (error) {
 *   console.error(error.message);
 * }
 */
export async function addPost(userId, title, body) {
  try {
    const response = await axios.post(apiUrls.ADD_POST_URL, {
      userId,
      title,
      body,
    });
    return response.data;
  } catch (error) {
    console.error('Failed to add new post:', error);
    throw new Error('Failed to add new post');
  }
}

export async function editPost(postId, title, body) {
  try {
    const response = await axios.put(apiUrls.EDIT_POST_URL(postId), {
      title,
      body,
    });
    return response.data;
  } catch (error) {
    console.error('Failed to edit post:', error);
    throw new Error('Failed to edit post');
  }
};


export async function deletePost(userId, postId) {
  try {
    await axios.delete(apiUrls.DELETE_POST_URL(userId, postId));
    return true;
  } catch (error) {
    console.error(`Failed to delete post with id ${postId} for user ${userId}:`, error);
    throw new Error(`Failed to delete post with id ${postId} for user ${userId}`);
  }
}
