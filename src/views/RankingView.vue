<script setup>
import { ref } from 'vue'

import { useCoffeeStore } from '../store/coffees'

import CoffeeFilter from '../components/CoffeeFilter.vue'
import LeaderboardTable from '../components/LeaderboardTable.vue'

const { ranking } = useCoffeeStore()

const cafesFiltrados = ref([...ranking.value])

function aplicarFiltros(filtros) {

  cafesFiltrados.value = ranking.value.filter(cafe => {

    const nomeValido =
      cafe.nome.toLowerCase().includes(
        filtros.nome.toLowerCase()
      )

    const categoriaValida =
      filtros.categoria === '' ||
      cafe.categoria === filtros.categoria

    const notaValida =
      cafe.media >= filtros.notaMinima

    return (
      nomeValido &&
      categoriaValida &&
      notaValida
    )

  })

}
</script>

<template>
  <div class="pagina">

    <h1>Ranking Geral</h1>

    <p>
      Veja a classificação dos cafés avaliados.
    </p>

    <CoffeeFilter
      @filtrar="aplicarFiltros"
    />

    <LeaderboardTable
      :cafes="cafesFiltrados"
    />

  </div>
</template>

<style scoped>
.pagina {
  padding: 20px;
}
</style>
