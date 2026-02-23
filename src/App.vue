<script setup>
 import { RouterLink, RouterView } from 'vue-router'
  import axios from 'axios';
  import {onMounted} from 'vue'
  import { useCounterStore } from './stores/product';
  const counterStore = useCounterStore()

  onMounted(() => {
    axios.get('http://localhost:3000/items')
    .then(res => {
      counterStore.speakers = res.data      
    })
    
  })
</script>
<template>
      <nav>
        <RouterLink to="/products">Hangszórók</RouterLink>&nbsp;
        <RouterLink to="/schema">Összehasonlytás</RouterLink>
      </nav>
  
  <RouterView />
</template>