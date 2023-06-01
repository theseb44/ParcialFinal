<script setup>
import { ref } from 'vue'
import { getPersonas, deletePersona } from '../services/PersonaServices'
import CardPerson from '../components/CardPerson.vue'

let personas = ref([])

const obtenerInformacion = async () => {
  personas.value = await getPersonas()
  console.log(personas.value)
}

obtenerInformacion()
</script>

<template>
  <header class="bg-[#2B2F41] h-[8vh] flex items-center px-12">
    <router-link
      class="text-white cursor-pointer bg-gradient-to-r from-orange-300 to-yellow-300 py-1 px-3 rounded-lg text-2xl"
      to="/"
      >Home</router-link
    >
  </header>
  <main class="flex gap-5 flex-wrap justify-evenly px-12 mt-12 pb-12">
    <CardPerson v-for="(persona, index) in personas" :key="index" :nombre="persona.name" :email="persona.email" :cel="persona.cel" :descripcion="persona.descripcion" :id="persona._id"/>
  </main>
</template>

<style scoped></style>
