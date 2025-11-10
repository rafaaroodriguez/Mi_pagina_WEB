<template>
 <div class="container">
    <sidebar></sidebar>
    <div class="content">
        <Router-View></Router-View>
    </div>
 </div>
</template>

<script setup>
import sidebar from '../components/Sidebar.vue';
</script>

<style scoped>
.container{
    display: flex;
}
.content{
    flex: 1;
    padding: 20px;
}
</style>