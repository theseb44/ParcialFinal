<script setup>
import Navbar from './components/Navbar.vue'
</script>

<template>
  <header class="h-[8vh]">
    <Navbar />
  </header>

  <!-- Primera seccion -->
  <section class="bg-[url('./public/img/img-1.jpg')] bg-no-repeat bg-cover h-[46vh] flex justify-end">
    <!-- Componente de la primera seccion -->
    <div class="flex flex-col items-end justify-center gap-4 h-full px-16">
      <h1 class="text-green-50 text-[42px] font-bold">AREA TERAPEUTICA</h1>
      <p class="text-[#B3CDA7] text-[24px] text-end">
        Apoyo terapéutico dirigido al bienestar <br> y sanación del individuo, con una <br> mirada que integra
        la dimensión <br> psicológica, física y espiritual
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
  <section class="bg-red-300 h-[46vh]">
    <article>
      <h2>NOSOTROS</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, totam alias dolore corporis
        libero natus aut quisquam cumque fugit non voluptatibus accusantium, quia similique eligendi
        tempora! Mollitia odio facere fugit.
      </p>
    </article>
    <article>
      <!-- Dos componentes de imagenes -->
    </article>
  </section>
  <!-- Cierre Segunda seccion -->

  <!-- Tercera seccion -->
  <section class="bg-yellow-200 h-[50vh]">
    <header><h2>NUESTROS SERVICIOS</h2></header>
    <!-- Cuatro componentes de cartas para mostrar servicios -->
  </section>
  <!-- Cierre tercera seccion -->

  <!-- Cuarta seccion -->
  <section class="bg-green-200 h-[50vh]">
    <div>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur facilis temporibus
        natus totam beatae eligendi ipsa cum alias sint asperiores aliquam dolorem blanditiis et
        voluptatem, sapiente, ipsam itaque. Quasi, unde.
      </p>
    </div>
    <div>
      <form action="#">
        <span>
          Entreganos los datos relevantas para tu consulta y te responderemos lo antes posible
        </span>
        <input type="text" placeholder="Nombre..." />
        <input type="email" placeholder="Email..." />
        <input type="text" placeholder="Telefono..." />
        <textarea cols="30" rows="10" placeholder="...que buscas?"></textarea>
      </form>
    </div>
    <div>
      <!-- Informacion de contacto -->
    </div>
  </section>
</template>

<style scoped></style>
