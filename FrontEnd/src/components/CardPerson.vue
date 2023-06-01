<template>
  <article class="h-[32rem] w-[22rem] bg-[#F8F8F8] rounded-lg shadow-xl p-8">
    <div class="bg-red-500 p-5 mt-2 rounded-full h-[20px] w-[20px] flex justify-center items-center cursor-pointer" @click="eliminar(props.id)">
      <i class="fa-regular fa-trash-can text-white"></i>
    </div>
    <div class="flex justify-center w-full">
      <div class="bg-white rounded-full w-[100px] h-[100px] flex justify-center items-center">
        <img src="../../public/logos/user-logo.svg" alt="">
      </div>
    </div>
    <div class="flex flex-col gap-2 mt-4">
      <div class="flex gap-4">
        <span class="text-yellow-400 font-bold text-[18px]">Nombre:</span>
        <span class="text-[18px] text-[#2B2F41]">{{ props.nombre }}</span>
      </div>
      <div class="flex gap-4">
        <span class="text-yellow-400 font-bold text-[18px]">Email:</span>
        <span class="text-[18px] text-[#2B2F41]">{{ props.email }}</span>
      </div>
      <div class="flex gap-4">
        <span class="text-yellow-400 font-bold text-[18px]">Telefono:</span>
        <span class="text-[18px] text-[#2B2F41]">{{ props.cel }}</span>
      </div>
      <div class="flex gap-4">
        <span class="text-yellow-400 font-bold text-[18px]">Descripcion: <span class="text-[18px] text-[#2B2F41] font-normal">{{ props.descripcion }}</span></span>
        
      </div>
    </div>
  </article>
</template>

<script setup>
import { deletePersona } from '../services/PersonaServices';
import { defineProps } from 'vue'
const props = defineProps({
  nombre: String,
  email: String,
  cel: String,
  descripcion: String,
  id: String
})
function eliminar(id) {
  deletePersona(id)
  location.reload()
}
</script>

<style scoped></style>
