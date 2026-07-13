import { reactive, computed } from 'vue'

export const CATEGORIAS = ['Natural', 'Cereja Descascado', 'Lavado', 'Honey', 'Fermentado']

export const CRITERIOS = [
  { key: 'aroma', label: 'Aroma' },
  { key: 'sabor', label: 'Sabor' },
  { key: 'acidez', label: 'Acidez' },
  { key: 'corpo', label: 'Corpo' },
  { key: 'docura', label: 'Doçura' },
]

const cafesIniciais = [
  {
    id: 1,
    nome: 'Fazenda Serra Alta',
    produtor: 'João Bittencourt',
    categoria: 'Natural',
    notas: { aroma: 9, sabor: 8.5, acidez: 8, corpo: 9, docura: 8.5 },
    resumo: 'Notas de chocolate amargo, caramelo e final amanteigado.',
    data: '2026-05-10',
  },
  {
    id: 2,
    nome: 'Sítio Vista Verde',
    produtor: 'Marina Kloeckner',
    categoria: 'Lavado',
    notas: { aroma: 8, sabor: 8, acidez: 9, corpo: 6.5, docura: 7.5 },
    resumo: 'Acidez cítrica vibrante, lembra frutas vermelhas.',
    data: '2026-05-11',
  },
]

const state = reactive({
  cafes: cafesIniciais,
  proximoId: cafesIniciais.length + 1,
})

function calcularMedia(notas) {
  const valores = Object.values(notas)
  return valores.reduce((acc, v) => acc + Number(v), 0) / valores.length
}

const cafesComMedia = computed(() =>
  state.cafes.map((c) => ({ ...c, media: calcularMedia(c.notas) }))
)

const ranking = computed(() => [...cafesComMedia.value].sort((a, b) => b.media - a.media))

function adicionarAvaliacao(avaliacao) {
  state.cafes.push({ id: state.proximoId++, data: new Date().toISOString().slice(0, 10), ...avaliacao })
}

function removerAvaliacao(id) {
  const index = state.cafes.findIndex((c) => c.id === id)
  if (index !== -1) state.cafes.splice(index, 1)
}

export function useCoffeeStore() {
  return { cafes: cafesComMedia, ranking, adicionarAvaliacao, removerAvaliacao }
}
