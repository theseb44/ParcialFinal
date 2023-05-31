<script setup>
import Navbar from './components/Navbar.vue'
</script>

<template>
  <header class="h-[8vh]" id="seccion-1">
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
  <section class="flex h-[46vh]" id="seccion-2">
    <article class="w-1/2 h-full">
      <h2 class="text-[48px] font-bold text-center mt-4 mx-4 mb-4 border-t-2 border-b-2 border-black">NOSOTROS</h2>
      <p class="text-[22px] text-justify mx-4">
        Lorem ipsum dolor sit amet consectetur. Dictum lectus sed neque arcu auctor aenean est. Proin tortor sit tincidunt viverra lorem. Eu proin pharetra malesuada sed ut ornare. Tellus scelerisque mattis enim quis sit convallis in. Amet scelerisque vulputate placerat dis. Iaculis est ipsum purus tempor venenatis. Dolor arcu arcu egestas mauris purus scelerisque pellentesque nisi. In diam eget quis aliquet tellus netus porta convallis. Eget ornare ultrices nunc nulla tellus id posuere adipiscing. Enim morbi dictumst elit facilisis porttitor. Amet morbi lacus enim feugiat. Eu vitae sollicitudin in sed elementum morbi aenean. Aliquam.
      </p>
    </article>
    <article class="w-1/2 h-full">
      <div class="bg-[url('../public/img/img-3.jpg')] h-1/2 border-2 border-black p-4">
        <div class="border h-full p-4 flex items-end">
          <span class="text-[32px] text-white">Frase para destacar <br> la experiencia en el rubro</span>
        </div>
      </div>
      <div class="bg-[url('../public/img/img-2.jpg')] h-1/2 border-x-2 border-b-2 border-black p-4">
        <div class="border h-full p-4 flex items-end">
          <span class="text-[32px] text-white">Frase para destacar <br> diferencia entre paihuen y otros</span>
        </div>
      </div>
    </article>
  </section>
  <!-- Cierre Segunda seccion -->

  <!-- Tercera seccion -->
  <section class="bg-yellow-200 h-[50vh]" id="seccion-3">
    <header><h2>NUESTROS SERVICIOS</h2></header>
    <!-- Cuatro componentes de cartas para mostrar servicios -->
  </section>
  <!-- Cierre tercera seccion -->

  <!-- Cuarta seccion -->
  <section class="bg-green-200 h-[50vh]" id="seccion-4">
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
