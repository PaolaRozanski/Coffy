<script setup>
defineProps({
  cafes: Array
})
</script>

<template>
  <table>

    <tr>
      <th>Posição</th>
      <th>Café</th>
      <th>Produtor</th>
      <th>Categoria</th>
      <th>Média</th>
    </tr>

    <tr v-if="cafes.length === 0">
      <td colspan="5">
        Nenhum café encontrado
      </td>
    </tr>

    <tr
      v-for="(cafe, index) in cafes"
      :key="index"
    >
      <td>{{ index + 1 }}</td>
      <td>{{ cafe.nome }}</td>
      <td>{{ cafe.produtor }}</td>
      <td>{{ cafe.categoria }}</td>
      <td>{{ cafe.media.toFixed(1) }}</td>
    </tr>

  </table>
</template>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 15px;
}

th,
td {
  border: 1px solid #ccc;
  padding: 10px;
  text-align: center;
}

th {
  background-color: #f0f0f0;
}
</style>
