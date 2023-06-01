<template>
  <div class="flex h-full bg-terceario">
    <div class="flex justify-center items-center w-[33.5%] px-20">
      <p class="text-[24px] text-justify text-white">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur facilis temporibus
        natus totam beatae eligendi ipsa cum alias sint asperiores aliquam dolorem blanditiis et
        voluptatem, sapiente, ipsam itaque. Quasi, unde.
      </p>
    </div>
    <div class="w-[33.5%] p-4">
      <form class="flex flex-col gap-2 bg-principal h-full p-8 rounded-xl" action="#">
        <span class="text-white text-lg">
          Entreganos los datos relevantes para tu consulta y te responderemos lo antes posible
        </span>
        <input class="py-2 px-4 rounded-lg bg-slate-50" type="text" placeholder="Nombre..." />
        <input class="py-2 px-4 rounded-lg bg-slate-50" type="email" placeholder="Email..." />
        <input class="py-2 px-4 rounded-lg bg-slate-50" type="text" placeholder="Telefono..." />
        <textarea
          class="py-2 px-4 rounded-lg bg-slate-50"
          cols="30"
          rows="3"
          placeholder="...que buscas?"
        ></textarea>
        <button class="self-start bg-black text-white py-2 px-6 rounded-3xl mt-4">Enviar</button>
      </form>
    </div>
    <div class="w-[33.5%] flex flex-col items-center pt-8">
      <h3 class="text-[36px] text-white border-b-2 w-[450px] text-center">
        Información de Contacto
      </h3>
      <div class="flex flex-col gap-5 text-[22px] mt-6 text-white">
        <span><i class="fa-solid fa-location-dot"></i> Calle Nombre 123, santiago, chile</span>
        <span><i class="fa-solid fa-phone"></i> Calle Nombre 123, santiago, chile</span>
        <span><i class="fa-solid fa-phone"></i> Calle Nombre 123, santiago, chile</span>
        <span><i class="fa-solid fa-envelope"></i> Calle Nombre 123, santiago, chile</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped></style>
