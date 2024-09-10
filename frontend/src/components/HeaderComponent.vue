<template>
  <nav class="navbar navbar-expand-lg" style="background-color: #f76b1c;">
    <div class="container-fluid">
      <!-- Site Logo on the Left -->
      <a class="navbar-brand text-white" href="/">
        <img src="" alt="Site Logo" style="height: 40px; width: auto;" /> <!-- Replace with your logo path -->
      </a>
      
      <!-- Navbar Toggler for Mobile View -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      
      <!-- Right-Aligned Menu Items -->
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav mb-2 mb-lg-0">
        <li class="nav-item">
            <a class="nav-link text-white" href="/home">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="/products">Products</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="/contact">Contact</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="/login">Login</a>
          </li>

          <!-- User Dropdown -->
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle text-white"
              href="#"
              id="userDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              User
            </a>
            <ul class="dropdown-menu" aria-labelledby="userDropdown">
              <li><a class="dropdown-item" href="/profile">Update Profile</a></li>
              <li><a class="dropdown-item" href="/my-cart">My Cart</a></li>
              <li><a class="dropdown-item" href="/my-shopping">My Shopping</a></li>
            </ul>
          </li>
          
          <!-- Cart with Icon and Count -->
          <li class="nav-item">
            <a class="nav-link text-white" href="/cart">
              <i class="fas fa-shopping-cart"></i> <!-- Cart Icon -->
              Cart
              <span class="badge bg-danger">{{ cartCount }}</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      cartCount: 3, // Example cart count, replace with dynamic data as needed
    };
  },
};
</script>

<style scoped>
.navbar {
  background-color: #f76b1c !important;
}
.nav-link {
  color: white !important;
}
.dropdown-menu {
  background-color: white;
}
</style>
