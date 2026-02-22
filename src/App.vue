<script setup>
 import { RouterLink, RouterView } from 'vue-router'
  import axios from 'axios';
  import {onMounted} from 'vue'
  import { useCounterStore } from './stores/';
  const counterStore = useCounterStore()

  onMounted(() => {
    axios.get('http://localhost:3000/speakers')
    .then(res => {
      counterStore.speakers = res.data      
    })
    
  })
</script>
<template>
   <nav>
        <RouterLink to="/"></RouterLink>&nbsp;
        <RouterLink to="/"></RouterLink>
      </nav>
  
  <RouterView />
</template>