<script setup>
defineProps({
  coffee: Object,
  posicao: Number
})

const emit = defineEmits(['remover'])
</script>

<template>
  <div class="card">

    <div class="media">
      {{ coffee.media.toFixed(1) }}
    </div>

    <div class="dados">

      <p v-if="posicao">
        <strong>{{ posicao }}º Lugar</strong>
      </p>

      <h3>{{ coffee.nome }}</h3>

      <p>
        Produtor: {{ coffee.produtor }}
      </p>

      <p>
        Categoria: {{ coffee.categoria }}
      </p>

      <p>
        {{ coffee.resumo }}
      </p>

      <button
        v-if="coffee.id"
        @click="emit('remover', coffee.id)"
      >
        Remover
      </button>

    </div>

  </div>
</template>

<style scoped>
.card {
  display: flex;
  gap: 15px;
  padding: 15px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
}

.media {
  width: 50px;
  height: 50px;
  background-color: #ffd54f;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
}

.dados {
  flex: 1;
}

h3 {
  margin-bottom: 5px;
}

p {
  margin: 4px 0;
}

button {
  margin-top: 10px;
  padding: 6px 10px;
  cursor: pointer;
}
</style>
