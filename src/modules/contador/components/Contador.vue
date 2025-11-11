<template>
 <h1>Hola mundo</h1>
 <p id="1">{{ contador }}</p>
 <p id="2"><button @click="incrementar">Incrementar</button></p>
 <button @click="decrementar">Decrementar</button>
</template>

<script setup>
import {ref} from 'vue';
const contador = ref(0);
const incrementar = () => {
    contador.value++;
}
const decrementar = () => {
    contador.value--;
}

</script>

<style scoped>
  p{
    color: blue;
  }
</style>
