<script setup>
import { RouterLink } from 'vue-router'
import { useCoffeeStore } from '../../store/coffees'
import CoffeeCard from '../CoffeeCard.vue'

const { cafes, ranking } = useCoffeeStore()
</script>

<template>
  <div class="home">
    <h1>☕ Coffee Quality Challenge</h1>

    <p>
      Sistema para avaliar e classificar cafés especiais.
    </p>

    <div class="botoes">
      <RouterLink to="/avaliacoes" class="botao">
        Avaliações
      </RouterLink>

      <RouterLink to="/ranking" class="botao">
        Ranking
      </RouterLink>
    </div>

    <p>
      Cafés cadastrados: <strong>{{ cafes.length }}</strong>
    </p>

    <div v-if="ranking.length > 0">
      <h2>Primeiro Lugar</h2>

      <CoffeeCard
        :coffee="ranking[0]"
        :posicao="1"
      />
    </div>
  </div>
</template>

<style scoped>
.home {
  padding: 50px 70px 50px 70px;
}
.h1{
  align-items: center;
}
.botoes {
  display: flex;
  gap: 10px;
  margin: 20px 0;
}

.botao {
  background-color: #6f4e37;
  color: white;
  text-decoration: none;
  padding: 10px 15px;
  border-radius: 5px;
}

.botao:hover {
  opacity: 0.9;
}


</style>
