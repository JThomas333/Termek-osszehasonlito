<template>
  <div class="card col-12 col-sm-6 col-md-4 col-lg-3">
    <p class="card-text">Brend: {{ product.brand }}</p>
    <p class="card-text">Neve: {{ product.name }}</p>
    <p class="card-text">Ára: {{product.price}}</p>

    <div class="card-footer">
      <button v-if="store.selectedIds.length < 3" :disabled="store.isSelected(product.id)" @click="store.addToschema(product.id)" class="btn btn-primary">
        Kiválaszt
      </button>
      <button v-if="store.isSelected(product.id)" @click="store.removeFromschema(product.id)" class="btn btn-danger">
        Vissza
      </button>
    </div>
  </div>
</template>

<script setup>
import { useProductStore } from '@/stores/product'

const store = useProductStore()
const props = defineProps({ product: Object })
</script>