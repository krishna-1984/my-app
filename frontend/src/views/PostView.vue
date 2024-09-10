
<template>
  <div class="data-container">
    <h2>Data from API</h2>
    <ul v-if="data.length">
      <li v-for="item in data" :key="item.id">
        {{ item.title }} - {{ item.body }}
      </li>
    </ul>
    <p v-else>No data available.</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      data: [], // This will hold the fetched data
    };
  },
  async created() {
    await this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        console.log(response.data[0].title);
        this.data = response.data; // Assuming response.data is an array of items
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
  },
};
</script>

<style scoped>
.data-container {
  padding: 20px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 10px 0;
}
</style>
