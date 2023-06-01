<script setup>
import Navbar from './components/Navbar.vue'
import About from './components/About.vue'
import Contactos from './components/Contactos.vue'
import Card from './components/Card.vue'
</script>

<template>
  <header class="h-[8vh]" id="seccion-1">
    <Navbar />
  </header>

  <!-- Primera seccion -->
  <section
    class="bg-[url('./public/img/img-1.jpg')] bg-no-repeat bg-cover h-[46vh] flex justify-end"
  >
    <!-- Componente de la primera seccion -->
    <div class="flex flex-col items-end justify-center gap-4 h-full px-16">
      <h1 class="text-green-50 text-[42px] font-bold">AREA TERAPEUTICA</h1>
      <p class="text-[#B3CDA7] text-[24px] text-end">
        Apoyo terapéutico dirigido al bienestar <br />
        y sanación del individuo, con una <br />
        mirada que integra la dimensión <br />
        psicológica, física y espiritual
      </p>
      <div class="mt-5">
        <a
          class="bg-principal py-4 px-12 text-white font-bold border-2 rounded-lg border-white"
          href="#"
          >MAS</a
        >
      </div>
    </div>
  </section>
  <!-- Cierre Primera seccion -->

  <!-- Segunda seccion -->
  <section class="flex h-[46vh]" id="seccion-2">
    <About />
  </section>
  <!-- Cierre Segunda seccion -->

  <!-- Tercera seccion -->
  <section class="bg-[#D9D9D9] h-[50vh]" id="seccion-3">
    <h2 class="border-b-2 mx-56 border-black text-center text-[32px] font-bold mb-8">
      NUESTROS SERVICIOS
    </h2>
    <div class="flex space-x-6 justify-center items-center">
      <card
        urlImg="/public/logos/family.svg"
        texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci voluptatibus error itaque distinctio. Amet, quisquam nisi aperiam, itaque reiciendis libero debitis dolores nostrum voluptas minima dolorem incidunt saepe, natus quod."
      ></card>

      <card
        urlImg="/public/logos/salto.svg"
        texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci voluptatibus error itaque distinctio. Amet, quisquam nisi aperiam, itaque reiciendis libero debitis dolores nostrum voluptas minima dolorem incidunt saepe, natus quod."
      ></card>

      <card
        urlImg="/public/logos/chat.svg"
        texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci voluptatibus error itaque distinctio. Amet, quisquam nisi aperiam, itaque reiciendis libero debitis dolores nostrum voluptas minima dolorem incidunt saepe, natus quod."
      ></card>

      <card
        urlImg="/public/logos/law.svg"
        texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci voluptatibus error itaque distinctio. Amet, quisquam nisi aperiam, itaque reiciendis libero debitis dolores nostrum voluptas minima dolorem incidunt saepe, natus quod."
      ></card>
    </div>
  </section>
  <!-- Cierre tercera seccion -->

  <!-- Cuarta seccion -->
  <section class="bg-green-200 h-[50vh]" id="seccion-4">
    <Contactos />
  </section>
</template>

<style scoped></style>
