<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  components: {AppHeader, AppMain, AppFooter},
data() {
return {  
}
}}
</script>

<template>
<AppHeader/>
<router-view></router-view>
<AppFooter/>
</template>

<style lang="scss">
@use './styles/general.scss';
@use './styles/partials/variables.scss';
</style> 