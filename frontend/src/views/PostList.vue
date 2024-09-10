<template>
  <div class="post-list-container">
    <h2>Post List</h2>
    <button class="btn btn-primary mb-3" @click="createPost">Add New Post</button>

    <!-- Display Table if Posts are Available -->
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
    
    <!-- Show Message if No Posts are Available -->
    <p v-else>No posts available.</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      posts: [],
    };
  },
  async created() {
    await this.fetchPosts();
  },
  methods: {
    async fetchPosts() {
      try {
        const response = await axios.get('/posts');
        this.posts = response.data;
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    },
    createPost() {
      this.$router.push({ name: 'create-post' });
    },
    editPost(post) {
      this.$router.push({ name: 'edit-post', params: { id: post.id } });
    },
    confirmDelete(id) {
      // Show confirmation dialog before deleting
      if (confirm('Are you sure you want to delete this post?')) {
        this.deletePost(id);
      }
    },
    async deletePost(id) {
      try {
        await axios.delete(`/posts/${id}`);
        this.fetchPosts(); // Refresh the list after deletion
      } catch (error) {
        console.error('Error deleting post:', error);
      }
    },
  },
};
</script>

<style scoped>
.post-list-container {
  padding: 20px;
}

.table {
  width: 100%;
  margin-bottom: 20px;
  border: 1px solid #dee2e6;
}

th,
td {
  text-align: left;
  vertical-align: middle;
}
</style>