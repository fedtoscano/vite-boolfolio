<script>
import axios from 'axios';
import ProjectCard from './partials/ProjectCard.vue';

export default {
  components: {ProjectCard},
data() {
    return {
      projects: [],

    }
  },
methods: {
    getProjectsData() {
        axios.get('http://127.0.0.1:8000/api/projects', {
        params: {
        }
        })
        .then(response => {
            // console.log(response.data.results);
            this.projects = response.data.results;
        })
        .catch(error => {
            console.log(error);
        })
        .finally(() => {
        });
    }
  },
  created() {
    this.getProjectsData();
  }
};
</script>

<template>
    <h1>AppMain</h1>
    <div class="container">
      <ProjectCard v-for="project in projects"
      :key="project.id"
      :title="project.name"
      :description="project.description"
      :project_img="project.image"
      />

    </div>

</template>

<style scoped>

</style>
