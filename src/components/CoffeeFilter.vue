<script setup>
import { ref, watch } from 'vue'
import { CATEGORIAS } from '../store/coffees'

const emit = defineEmits(['filtrar'])

const nome = ref('')
const categoria = ref('')
const notaMinima = ref(0)

watch([nome, categoria, notaMinima], () => {
  emit('filtrar', {
    nome: nome.value,
    categoria: categoria.value,
    notaMinima: notaMinima.value
  })
})
</script>

<template>
  <div class="filtro">

    <div>
      <p>Nome</p>
      <input
        type="text"
        v-model="nome"
      >
    </div>

    <div>
      <p>Categoria</p>
      <select v-model="categoria">
        <option value="">Todas</option>

        <option
          v-for="cat in CATEGORIAS"
          :key="cat"
          :value="cat"
        >
          {{ cat }}
        </option>
      </select>
    </div>

    <div>
      <p>Nota mínima: {{ notaMinima }}</p>

      <input
        type="range"
        min="0"
        max="10"
        step="0.5"
        v-model="notaMinima"
      >
    </div>

  </div>
</template>

<style scoped>
.filtro {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

input,
select {
  padding: 5px;
}

p {
  margin-bottom: 5px;
  font-weight: bold;
}
</style>
