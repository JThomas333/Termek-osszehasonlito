<script setup>
 import { RouterLink, RouterView } from 'vue-router'
  import axios from 'axios'
  import {onMounted} from 'vue'
import { useProductStore } from './stores/product'

  const store = useProductStore()

  onMounted(() => {
    axios.get('http://localhost:3000/items')
    .then(res => {
      store.products = res.data
    })
    axios.get('http://localhost:3000/fields')
    .then(res => {
      store.fields = res.data
    })
  })
</script>
<template>
      <nav>
        <RouterLink to="/">Hangszórók</RouterLink>&nbsp;
        <RouterLink to="/schema">Összehasonlítás</RouterLink>
      </nav>
  
  <RouterView />
</template>