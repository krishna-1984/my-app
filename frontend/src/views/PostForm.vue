
<template>
  <div class="post-form-container">
    <h2>{{ isEditing ? 'Edit Post' : 'Add New Post' }}</h2>
    <form @submit.prevent="handleSubmit">
      <div class="mb-3">
        <label for="title" class="form-label">Title</label>
        <input
          type="text"
          v-model="post.title"
          id="title"
          class="form-control"
          placeholder="Enter post title"
          required
        />
      </div>

      <div class="mb-3">
        <label for="description" class="form-label">Description</label>
        <textarea
          v-model="post.description"
          id="description"
          class="form-control"
          placeholder="Enter post description"
          required
        ></textarea>
      </div>

      <button type="submit" class="btn btn-primary">
        {{ isEditing ? 'Update Post' : 'Add Post' }}
      </button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      post: {
        title: '',
        description: '',
      },
      isEditing: false,
    };
  },
  async created() {
    const id = this.$route.params.id;
    if (id) {
      this.isEditing = true;
      await this.fetchPost(id);
    }
  },
  methods: {
    async fetchPost(id) {
      try {
        const response = await axios.get(`/posts/${id}`);
        this.post = response.data;
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    },
    async handleSubmit() {
      try {
        if (this.isEditing) {
          await axios.put(`/posts/${this.post.id}`, this.post);
        } else {
          await axios.post('/posts', this.post);
        }
        this.$router.push({ name: 'post-list' });
      } catch (error) {
        console.error('Error submitting post:', error);
      }
    },
  },
};
</script>

<style scoped>
.post-form-container {
  padding: 20px;
}

.mb-3 {
  margin-bottom: 1rem;
}
</style>
