<template>
    <div class="post-form-container">
      <h2>{{ isEditing ? 'Edit Post' : 'Add New Post' }}</h2>
      <form @submit.prevent="handleSubmit">
        <!-- Title Input -->
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
  
        <!-- Description Input -->
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
  
        <!-- Submit Button -->
        <button type="submit" class="btn btn-primary">
          {{ isEditing ? 'Update Post' : 'Add Post' }}
        </button>
  
        <!-- Cancel Button -->
        <button type="button" class="margin-left-10 btn btn-secondary" @click="onCancel">Cancel</button>
      </form>
    </div>
  </template>
  
  <script setup>
import { ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { fetchPostById, createPost, updatePost } from '@/services/apiService';

const router = useRouter();
const route = useRoute();

const post = ref({
  title: '',
  description: '',
});
const isEditing = ref(false);

onMounted(async () => {
  const id = route.params.id;
  if (id) {
    isEditing.value = true;
    await fetchPost(id);
  }
});

async function fetchPost(id) {
  try {
    const response = await fetchPostById(id);
    post.value = response;
  } catch (error) {
    console.error('Error fetching post:', error);
  }
}

async function handleSubmit() {
  try {
    if (isEditing.value) {
      await updatePost(post.value.id, post.value);
    } else {
      await createPost(post.value);
    }
    router.push({ name: 'post-list' });
  } catch (error) {
    console.error('Error handling submission:', error);
  }
}

function onCancel() {
  router.push({ name: 'post-list' });
}
</script>
  
  <style scoped>
  .post-form-container {
    padding: 20px;
  }
  
  .mb-3 {
    margin-bottom: 1rem;
  }
  
  .margin-left-10 {
    margin-left: 10px;
  }
  </style>
  