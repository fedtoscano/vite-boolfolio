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
            console.log(response.data.results);
            this.projects = response.data.results.data;
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
      <div class="row">
        <div class="col-12">
          <ProjectCard v-for="project, index in projects"
          :key="index"
          :title="project.name"
          :description="project.description"
          :project_img="project.image"
          />
        </div>
      </div>
    </div>

</template>

<style scoped lang="scss">
@use '../styles/AppMain.scss';

</style>
