
<template>
  <footer class="footer text-white py-4">
    <div class="container">
      <div class="row">
        <!-- About Section -->
        <div class="col-md-4">
          <h5>About Us</h5>
          <p>
            We are committed to providing the best products and services to our customers.
            Follow us on social media to stay updated with our latest offerings.
          </p>
        </div>

        <!-- Quick Links -->
        <div class="col-md-4">
          <h5>Quick Links</h5>
          <ul class="list-unstyled">
            <li><a href="/" class="text-white">Home</a></li>
            <li><a href="/products" class="text-white">Products</a></li>
            <li><a href="/contact" class="text-white">Contact Us</a></li>
            <li><a href="/cart" class="text-white">My Cart</a></li>
          </ul>
        </div>

        <!-- Contact Information -->
        <div class="col-md-4">
          <h5>Contact Us</h5>
          <ul class="list-unstyled">
            <li>Email: info@yourwebsite.com</li>
            <li>Phone: +1 (123) 456-7890</li>
            <li>Address: 123 Main St, City, Country</li>
          </ul>
          <!-- Social Media Links -->
          <div class="social-icons">
            <a href="https://facebook.com" target="_blank" class="text-white me-2"><i class="fab fa-facebook-f"></i></a>
            <a href="https://twitter.com" target="_blank" class="text-white me-2"><i class="fab fa-twitter"></i></a>
            <a href="https://instagram.com" target="_blank" class="text-white"><i class="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent',
}
</script>

<style scoped>
.footer {
  background-color: #f76b1c; /* Matching header background color */
  color: white; /* White text color */
  position: fixed; /* Fixes the footer at the bottom */
  bottom: 0; /* Aligns it to the bottom of the viewport */
  width: 100%; /* Full width */
  z-index: 1000; /* Ensures the footer is on top */
}

.social-icons a {
  font-size: 1.2em;
  margin-right: 10px;
}

a.text-white:hover {
  color: #fff; /* Hover color */
}
</style>
