<script>
export default {
data() {
return { 
    navLinks: [
        'Home', 'About', 'Blog'
    ] 
}
}}
</script>

<template>
<div class="container">
    <div class="row">
        <div class="col-6">
            <h1>MY PROJECTS PORTFOLIO</h1>
        </div>
        <div class="col-6">
            <nav>
                <ul>
                    <li v-for="navLink, index in navLinks">
                        {{ navLink }}
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