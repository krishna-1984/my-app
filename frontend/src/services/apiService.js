// src/services/apiService.js

import axios from "axios";

// Access environment variable
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
// Set the base URL of API
//const API_BASE_URL = 'http://127.0.0.1:8000/api';

// Set common headers
axios.defaults.baseURL = API_BASE_URL;
axios.defaults.headers.common['Content-Type'] = 'application/json';

// Define API Functions

// Fetch all posts
const fetchPosts = async () => {
    try {
        const response = await axios.get('/posts');
        return response.data;
    } catch (error) {
        handleApiError(error);
    }
};

// Fetch a single post by id
const fetchPostById = async (id) => {
    try {
        const response = await axios.get(`/posts/${id}`);
        return response.data;
    } catch (error) {
        handleApiError(error);
    }
};

// Create a new post
const createPost = async (post) => {
    try {
        const response = await axios.post('/posts', post);
        return response.data;
    } catch (error) {
        handleApiError(error);
    }    
}; 

// Update a post
const updatePost = async (id, post) => {    
    try {
        const response = await axios.put(`/posts/${id}`, post);
        return response.data;
    } catch (error) {
        handleApiError(error);
    }
};

// Delete a post
const deletePost = async (id) => {
    try {
        const response = await axios.delete(`/posts/${id}`);
        return response.data;
    } catch (error) {
        handleApiError(error);
    }
};


// Handle API Error
const handleApiError = (error) => {
    console.error('API Error:', error);
    // Optionally, you can show user-friendly messages or integrate with an error tracking system
    throw error;
};

export {
    fetchPosts,
    fetchPostById,
    createPost,
    updatePost,
    deletePost,
    handleApiError,
};
