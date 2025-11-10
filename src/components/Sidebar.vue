<template>
    <div class="sidebar">
        <h2>Barra lateral</h2>
        <ul>
            <li>
                <RouterLink to="/Contador">Contador</RouterLink>
            </li>
            <li>
                <RouterLink to="/ListaDeTareas">Lista De Tareas</RouterLink>
            </li>
            
        </ul>
        
    </div>

</template>

<script setup>

</script>

<style scoped>
.sidebar{
    width: 200px;
    background-color: #f0f0f0;
    padding: 20px;
}
</style>