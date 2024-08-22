<script>
import axios from 'axios';
import ProjectCard from '../components/partials/ProjectCard.vue';

export default {
  components: { ProjectCard },
  data() {
    return {
      projects: [],
      currentPage: 1, 
      totalPages: null, 
    };
  },
  methods: {
    getProjectsData(page = 1) {
      axios
        .get('http://127.0.0.1:8000/api/projects', {
          params: {
            page: page,
          },
        })
        .then((response) => {
          //DESTRUCTURING OBJECTS - ESTRAGGO LE PROPRIETA' DELL'OGGETTO E LE ASSEGNO A VARIABILI CON LO STESSO NOME
          const { data, current_page, last_page } = response.data.results;
          this.projects = [...this.projects, ...data];
          this.currentPage = current_page;
          this.totalPages = last_page;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    loadMoreProjects() {
      if (this.currentPage < this.totalPages) {
        this.getProjectsData(this.currentPage + 1);
      } else {
        console.log('Non ci sono più progetti da caricare.');
      }
    },
  },
  created() {
    this.getProjectsData();
  },
};
</script>

<template>
  <div class="container">
    <h1>Project List</h1>
    <div class="row d-flex">
      <div class="col-3 my-3" v-for="(project, index) in projects" :key="index">
        <ProjectCard
          :title="project.name"
          :description="project.description"
          :project_img="project.image"
        />
      </div>
    </div>
    <div class="button-container" v-if="currentPage < totalPages">
      <button @click="loadMoreProjects">Load More</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '../styles/AppMain.scss';
</style>
