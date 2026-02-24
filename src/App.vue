<script setup>
 import { RouterLink, RouterView } from 'vue-router'
  
import { useProductStore } from './stores/product'

  const store = useProductStore()

 
</script>
<template>
      <nav>
        <RouterLink to="/">Hangszórók</RouterLink>&nbsp;
        <RouterLink to="/schema">Összehasonlítás</RouterLink>
      </nav>
  
  <RouterView />
</template>