<script setup>
    const props = defineProps({item: Object})
    import {ref, onMounted, onUpdated} from 'vue'
    import { useProductStore } from '@/stores/product';
    const store = useProductStore()
    
    //const fields = ref([])
    const product = ref(null)
    
    onMounted(() =>{
        if (props.item != null && props.item.id != null) {
            product.value = store.products.find(x => x.id == props.item.id)
        }
    })
    
    onUpdated(() =>{
        if (props.item != null && props.item.id != null) {
            product.value = store.products.find(x => x.id == props.item.id)
        }
    })
</script>

<template>
    

   
    <table class="table table-bordered " v-if="store.selectedIds.length > 1">
        <thead class="table-light">
            <tr>
                <th>Tulajdonság</th>
                <th v-for="id in store.selectedIds" :key="id">
                    {{ (store.products.find(p => p.id == id)).name }}
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="field in store.fields" :key="field.key">
                <td><strong>{{ field.label }}</strong></td>
                <td v-for="id in store.selectedIds" :key="id">
                    <p v-if="(store.products.find(p => p.id == id))[field.key]">{{ (store.products.find(p => p.id == id))[field.key] }} {{ field.unit }}</p>
                    <p v-else>-</p>
                </td>
            </tr>
        </tbody>
    </table>
    <div v-else class=" text-danger">Nincs termék!</div>
    <p @click="$router.push('/')" class="btn btn-secondary">Vissza!</p>
    
</template>