<script setup>
import { useProductStore } from '@/stores/product'
import { useRouter } from 'vue-router'

const store = useProductStore()
const router = useRouter()
</script>

<template>
    <div v-if="store.selectedIds.length > 1" class="selection-bar">
        <p>Kiválasztott termékek: <strong>{{ store.selectedIds.length }}/3</strong></p>
    </div>
</template>

