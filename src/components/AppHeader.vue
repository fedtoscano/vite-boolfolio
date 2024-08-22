<script>
export default {
data() {
return { 
    navLinks: [
        {
            label: 'Blog',
            link: 'blog'
        },
        {
            label: 'Projects',
            link: 'projects'
        },
        {
            label: 'About',
            link: 'about'
        },
    ] 
}
}}
</script>

<template>
<div class="container-fluid">
    <div class="row">
        <div class="col-6">
            <h1>MY PROJECTS PORTFOLIO</h1>
        </div>
        <div class="col-6 left-side-navbar">
            <nav>
                <ul>
                    <li v-for="navLink, index in navLinks" :key="index">
                        <RouterLink :to="{name: navLink.link}">
                            {{ navLink.label }}
                        </RouterLink>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</div>
</template>

<style lang="scss" scoped>
@use '../styles/AppHeader.scss';
</style>