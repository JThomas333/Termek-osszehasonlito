<script setup>
 import { RouterLink, RouterView } from 'vue-router'

</script>
<template>
      <nav>
        <RouterLink to="/">Hangszórók</RouterLink>&nbsp;
        <RouterLink to="/schema">Összehasonlítás</RouterLink>
      </nav>
  
  <RouterView />
</template>