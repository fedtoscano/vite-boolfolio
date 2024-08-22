<script>
export default {
    props: {title:{type: String, required: true}, 
    description: {type: String, required: true},
project_img:{type: String, required: true}},
data() {
return {  
}
}}
</script>

<template>
    <div class="project-card">
        <img :src="project_img" alt="Project Image" class="project-card__image">
        <div class="project-card__content">
            <h2 class="project-card__title">{{ title }}</h2>
            <p class="project-card__description">{{ description }}</p>
            <!-- <a :href="project.link" class="project-card__link">View Project</a> -->
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../styles/partials/ProjectCard.scss';

</style>