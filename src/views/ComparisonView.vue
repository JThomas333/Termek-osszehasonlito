<script>
import ComparisonTable from '@/components/ComparisonTable.vue';
import { useProductStore } from '@/stores/product';
const store = useProductStore()
</script>
<template>
  <h1>Összehasonlítás</h1>
  <div v-if="store.compare.length > 1">
    <ComparisonTable v-for="c in store.compare" :item="c" />
  </div>
  <p class="text-danger h3" v-else>Nincs termék vagy nem elég!</p>
  <p @click="$router.push('/')" class="btn btn-secondary">Vissza!</p>
</template>