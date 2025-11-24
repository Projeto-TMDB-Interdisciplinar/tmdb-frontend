<script setup>
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
</script>
<template>
    <div class="header">
        <HeaderComponent />
    </div>
    <div class="main">
        <router-view />
    </div>
    <div class="footer">
        <FooterComponent /> 
    </div>
</template>
