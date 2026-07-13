<script setup>
import { ref } from 'vue'
import { CATEGORIAS, CRITERIOS } from '../store/coffees'

const emit = defineEmits(['cadastrar'])

const nome = ref('')
const produtor = ref('')
const categoria = ref(CATEGORIAS[0])
const resumo = ref('')

const notas = ref({
  aroma: 5,
  sabor: 5,
  acidez: 5,
  corpo: 5,
  docura: 5
})

function cadastrar() {

  if(nome.value === '' || produtor.value === '') {
    alert('Preencha os campos obrigatórios')
    return
  }

  emit('cadastrar', {
    nome: nome.value,
    produtor: produtor.value,
    categoria: categoria.value,
    resumo: resumo.value,
    notas: { ...notas.value }
  })

  nome.value = ''
  produtor.value = ''
  resumo.value = ''

  notas.value.aroma = 5
  notas.value.sabor = 5
  notas.value.acidez = 5
  notas.value.corpo = 5
  notas.value.docura = 5
}
</script>

<template>
  <form @submit.prevent="cadastrar">

    <h2>Nova Avaliação</h2>

    <p>Nome do Café</p>
    <input
      type="text"
      v-model="nome"
    >

    <p>Produtor</p>
    <input
      type="text"
      v-model="produtor"
    >

    <p>Categoria</p>
    <select v-model="categoria">
      <option
        v-for="cat in CATEGORIAS"
        :key="cat"
        :value="cat"
      >
        {{ cat }}
      </option>
    </select>

    <p>Observações</p>
    <textarea
      rows="3"
      v-model="resumo"
    ></textarea>

    <div
      v-for="criterio in CRITERIOS"
      :key="criterio.key"
      class="criterio"
    >
      <p>
        {{ criterio.label }}
      </p>

      <input
        type="range"
        min="0"
        max="10"
        step="0.5"
        v-model="notas[criterio.key]"
      >

      <span>
        {{ notas[criterio.key] }}
      </span>
    </div>

    <button type="submit">
      Cadastrar
    </button>

  </form>
</template>

<style scoped>
form {
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
}

input,
select,
textarea {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
}

.criterio {
  margin: 10px 0;
}

button {
  padding: 10px 15px;
  cursor: pointer;
}
</style>
