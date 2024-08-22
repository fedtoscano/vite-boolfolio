<script>
import axios from 'axios';

export default {
data() {
    return {
        project: {},
    }
},
methods:{
    getProjectsData(id) {
    axios.get(`http://127.0.0.1:8000/api/projects/${id}`, {
        params: {
        },
        })
        .then((response) => {
            console.log(response)
            this.project = response.data.results;
        })
        .catch((error) => {
        console.log(error);
        });
    }
},
created(){
    this.getProjectsData(this.$route.params.id)
}
}
</script>

<template>
    <div class="container">
        <div class="row d-flex justify-content-center">
            <div class="col-8 d-flex justify-content-center">
                <div class="project-card">
                    <div class="project-card__content">
                        <h3 class="project-card__title">{{ project.name }}</h3>
                        <h4>Project Type: {{ project.type.name }}</h4>
                        <div class="img-container">
                            <img :src="project.image" alt="Project Image" class="project-card__image">
                        </div>
                        <p>Commissioned by: <em>{{ project.client }}</em></p>
                        <p>Repository link: <span><a :href="project.repository">{{ project.repository }}</a></span></p>
                        <h4>Project's description:</h4>
                        <p class="project-card__description">{{ project.description }}</p>
                        <div class="technologies-container">
                            <h3>Tech Stack:</h3>
                            <ul>
                                <li v-for="technology, index in project.technologies" :key="index">
                                    {{ technology.name }}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/SingleProject.scss';
</style>