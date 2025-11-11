<template>
    <div class="sidebar">
        <h2>Bienvenido: </h2>
        <h3>Nombre: {{ nombre }}</h3>
        <h3>Email: {{ email }}</h3>
        <ul>
            <li>
                <RouterLink to="/Contador">Contador</RouterLink>
            </li>
            <li>
                <RouterLink to="/ListaDeTareas">Lista De Tareas</RouterLink>
            </li>
            <li>
                <RouterLink to="/Registrar">Registrar</RouterLink>
            </li>
            
        </ul>
        
    </div>

</template>

<script setup>
    import { useRegistrarStore } from '@/modules/Registro/Stores/registrarStore';
    import {ref, watch} from 'vue';
    const registrarStore = useRegistrarStore();
    const nombre = ref(registrarStore.nombre.value);
    const email = ref(registrarStore.email.value);
    watch(() => registrarStore.nombre, (newValue) =>{
        nombre.value = newValue;
    })
    watch(() => registrarStore.email, (newValue) =>{
        email.value = newValue;
    })
</script>

<style scoped>
.sidebar{
    width: 200px;
    background-color: #f0f0f0;
    padding: 20px;
}
</style>