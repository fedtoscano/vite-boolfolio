<script>
import axios from 'axios';

export default {
  data() {
    return {
    };
  },
  methods: {
    getProjectsData() {
      axios.get('http://127.0.0.1:8000/api/projects', {
        params: {
          // You can add query parameters here if needed
        }
        })
        .then(response => {
            console.log('ciao');
            console.log(response.data);
        })
        .catch(error => {
            console.log(error);
        })
        .finally(() => {
            // always executed
        });
    }
  },
  mounted() {
    this.getProjectsData();
  }
};
</script>

<template>
    <h1>AppMain</h1>
    
</template>

<style scoped>
</style>
