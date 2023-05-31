<script setup>
import Navbar from './components/Navbar.vue';
</script>

<template>
  <header>
    <Navbar/>
  </header>

  <!-- Primera seccion -->
  <section>
    <!-- Componente de la primera seccion -->
  </section>
  <!-- Cierre Primera seccion -->

  <!-- Segunda seccion -->
  <section>
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
  <section>
    <header><h2>NUESTROS SERVICIOS</h2></header>
    <!-- Cuatro componentes de cartas para mostrar servicios -->
  </section>
  <!-- Cierre tercera seccion -->

  <!-- Cuarta seccion -->
  <section>
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
        <input type="text" placeholder="Nombre...">
        <input type="email" placeholder="Email...">
        <input type="text" placeholder="Telefono...">
        <textarea cols="30" rows="10" placeholder="...que buscas?"></textarea>
      </form>
    </div>
    <div>
      <!-- Informacion de contacto -->
    </div>
  </section>
</template>

<style scoped></style>
