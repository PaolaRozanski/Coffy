<script setup>
import { useCoffeeStore } from '../store/coffees'
import RatingForm from '../components/RatingForm.vue'
import CoffeeCard from '../components/CoffeeCard.vue'

const {
  cafes,
  adicionarAvaliacao,
  removerAvaliacao
} = useCoffeeStore()
</script>

<template>
  <div class="pagina">
  <h1>Avaliações</h1>
    <p>
      Cadastre um café e veja as avaliações.
    </p>
    <RatingForm
      @cadastrar="adicionarAvaliacao"/>
    <h2>
      Cafés Avaliados ({{ cafes.length }})
    </h2>

    <p v-if="cafes.length == 0">
      Nenhum café cadastrado.
    </p>

    <CoffeeCard
      v-for="cafe in cafes"
      :key="cafe.id"
      :coffee="cafe"
      removivel
      @remover="removerAvaliacao"
    />

  </div>
</template>

<style scoped>
.pagina {
  padding: 20px;
}
</style>
