<!-- src/components/PostList.vue -->

<template>
    <div class="post-list-container">
      <h2>Post List</h2>
      <button class="btn btn-primary mb-3" @click="createPost">Add New Post</button>
      
      <div v-if="posts.length">
        <table class="table table-striped">
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="post in posts" :key="post.id">
              <td>{{ post.title }}</td>
              <td>{{ post.description }}</td>
              <td>
                <button class="btn btn-warning btn-sm me-2" @click="editPost(post)">Edit</button>
                <button class="btn btn-danger btn-sm" @click="confirmDelete(post.id)">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <p v-else>No posts available.</p>
    </div>
  </template>
  
  <script>
  import { fetchPosts, deletePost } from '../services/apiService'; // Import the API functions
  
  export default {
    data() {
      return {
        posts: [],
      };
    },
    async created() {
      await this.loadPosts();
    },
    methods: {
      async loadPosts() {
        this.posts = await fetchPosts(); // Call the API function to fetch posts
      },
      createPost() {
        this.$router.push({ name: 'create-post' });
      },
      editPost(post) {
        this.$router.push({ name: 'edit-post', params: { id: post.id } });
      },
      confirmDelete(id) {
        if (confirm('Are you sure you want to delete this post?')) {
          this.deletePost(id);
        }
      },
      async deletePost(id) {
        await deletePost(id); // Call the API function to delete the post
        await this.loadPosts(); // Refresh the list after deletion
      },
    },
  };
  </script>
  