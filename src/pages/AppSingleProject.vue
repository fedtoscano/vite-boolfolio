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
            // this.project = response.data.results.data;
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
    <h1>ciao sei nel singolo post</h1>
</template>

<style scoped>
</style>