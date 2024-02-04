
const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const USERS_URL = `${BASE_URL}/users`;
export const USER_POSTS_URL = (userId) => `${BASE_URL}/users/${userId}/posts`;
export const DELETE_POST_URL = (postId) => `${BASE_URL}/posts/${postId}`;
export const ADD_POST_URL = `${BASE_URL}/posts`;
 export const EDIT_POST_URL = (postId) => `${BASE_URL}/posts/${postId}`;

