
<template>
  <div class="login-container d-flex justify-content-center margin-top margin-bottom">
    <div class="card p-4 shadow" style="width: 22rem;">
      <h3 class="text-center mb-4">Login</h3>
      <form @submit.prevent="handleLogin">
        <!-- Email Input -->
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input type="text" v-model="email" id="email" class="form-control" placeholder="Enter your email" required />
          <span v-if="errors.email" class="text-danger">{{ errors.email[0] }}</span>
        </div>

        <!-- Password Input -->
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input type="password" v-model="password" id="password" class="form-control" placeholder="Enter your password" required />
          <span v-if="errors.password" class="text-danger">{{ errors.password[0] }}</span>
        </div>

        <!-- Remember Me Checkbox -->
        <div class="form-check mb-3">
          <input type="checkbox" v-model="rememberMe" id="rememberMe" class="form-check-input" />
          <label for="rememberMe" class="form-check-label">Remember Me</label>
        </div>

        <!-- Login Button -->
        <div class="d-grid mb-3">
          <button type="submit" class="btn btn-primary">Login</button>
        </div>

        <!-- Google Login Button -->
        <div class="d-grid">
          <button type="button" @click="handleGoogleLogin" class="btn btn-outline-danger">
            <i class="fab fa-google"></i> Login with Google
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
axios.defaults.baseURL = 'http://127.0.0.1:8000/api';

export default {
  data() {
    return {
      email: '',
      password: '',
      rememberMe: false,
      errors: {}, // Initialize as an empty object
    };
  },
  methods: {
    async handleLogin() {
      this.errors = {}; // Clear previous errors
      try {
        const response = await axios.post('/login', {
          email: this.email,
          password: this.password,
        });

        // Store token and handle successful login
        localStorage.setItem('token', response.data.access_token);
        console.log('Login successful:', response.data);
      } catch (error) {
        if (error.response && error.response.data) {
          this.errors = error.response.data.error || {}; // Set validation errors
          console.error('Login failed:', error.response.data.message);
        }
      }
    },
    handleGoogleLogin() {
      // Implement Google login functionality
      window.location.href = 'http://127.0.0.1:8000/api/auth/google';
    },
  },
};
</script>

<style scoped>
.login-container {
  height: 70vh;
  background-color: #f8f9fa; /* Light gray background */
  margin-top: 20px;
  margin-bottom: 20px;
}

.card {
  border-radius: 8px;
}

.btn-outline-danger {
  color: #ea4335;
  border-color: #ea4335;
}

.btn-outline-danger:hover {
  background-color: #ea4335;
  color: white;
}
</style>
