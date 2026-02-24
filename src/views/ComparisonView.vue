<script setup>
import ComparisonTable from '@/components/ComparisonTable.vue'
import { useProductStore } from '@/stores/product'

const store = useProductStore()
</script>
<template>
  <h1>Összehasonlítás</h1>
  <ComparisonTable />
  
</template>