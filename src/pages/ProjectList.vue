<script>
import axios from 'axios';
import ProjectCard from '../components/partials/ProjectCard.vue';

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
    <div class="container">
        <h1>Project List</h1>
        <div class="row d-flex">
            <div class="col-3 my-3" v-for="project, index in projects">
                <ProjectCard :key="index"
                :title="project.name"
                :description="project.description"
                :project_img="project.image"/>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use '../styles/AppMain.scss';

</style>
