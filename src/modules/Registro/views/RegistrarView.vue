<template>
    <div>
        <h2>Formulario de registro</h2>
        <Form :validation-schema="schema" @submit="onSubmit">
            <div class="form">
                <label for="nombre">Nombre:</label>
                <Field v-model="nombre" type="text" name="nombre" id="nombre" placeholder="Ingrese su nombre"></Field>
                <ErrorMessage name="nombre"></ErrorMessage>
            </div>
            <div class="form">
                <label for="correo">Email:</label>
                <Field v-model="email" type="email" name="email" id="correo" placeholder="Ingrese su email"></Field>
                <ErrorMessage name="email"></ErrorMessage>
            </div>
            <div class="form">
                <button type="submit">Registrar</button>
            </div>
        </Form>
    </div>
</template>

<script setup>
import {Form, Field, ErrorMessage} from 'vee-validate';
import {schema} from '../schemas/ValidationSchema.js';
import { useRegistrarStore } from '../Stores/registrarStore.js';
import { ref } from 'vue';

const registrarStore = useRegistrarStore();
const nombre = ref('');
const email = ref('');

const onSubmit = () => {
    registrarStore.guardarRegistro(nombre.value, email.value);
    console.log('Formulario enviado');
};
</script>

<style scoped>
.form{
    margin-bottom: 10px;
}
</style>