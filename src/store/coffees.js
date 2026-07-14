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
  },
  {
    id: 2,
    nome: 'Sítio Vista Verde',
    produtor: 'Marina Kloeckner',
    categoria: 'Lavado',
    notas: { aroma: 8, sabor: 8, acidez: 9, corpo: 6.5, docura: 7.5 },
    resumo: 'Acidez cítrica vibrante, lembra frutas vermelhas.',
  },
  {
    id: 3,
    nome: 'Sítio do pica-pau amarelo',
    produtor: 'Emilia Genova',
    categoria: 'Natural',
    notas: { aroma: 7, sabor: 8.5, acidez: 6, corpo: 9.5, docura: 6.5 },
    resumo: 'Acidez da cuca , lembra um sítio.',
  },
  {
    id: 4,
    nome: 'IFC - campus araquari',
    produtor: 'Fábio Longo de Moura',
    categoria: 'Cereja Descascado',
    notas: { aroma: 3, sabor: 2.5, acidez: 4, corpo: 9.5, docura: 1.5 },
    resumo: 'Complicado da pra relevar.',
  },
  {
    id: 5,
    nome: 'Enola Holmes',
    produtor: 'Milie Bobby Brow',
    categoria: 'Honey',
    notas: { aroma: 9, sabor: 10, acidez: 8, corpo: 9.5, docura: 9.5 },
    resumo: 'Tem gosto das ilhas de Malta governado pelos ingleses.',
  } ,
  {
    id: 6,
    nome: 'Crux Sacra Six Mit Luz',
    produtor: 'Bento',
    categoria: 'Honey',
    notas: { aroma: 10, sabor: 10, acidez: 10, corpo: 10, docura: 10 },
    resumo: 'Otímo para tomar na terra Santa.',
  },
  {
    id: 7,
    nome: 'Anne With an E',
    produtor: 'Girbert',
    categoria: 'Cereja Descascado',
    notas: { aroma: 9, sabor: 7.5, acidez: 6, corpo: 9.5, docura: 10 },
    resumo: 'Incentiva a sempre olhar as coisas da vida, mas cuidar para nunca bater com uma lousa na cabeça de alguem mesmo que esteja puxando conversa.',
  },
  {
    id: 8,
    nome: 'Banco de Dados',
    produtor: 'Ivo',
    categoria: 'Fermentado',
    notas: { aroma: 0, sabor: 0, acidez: 10, corpo: 0, docura: 0 },
    resumo: 'Deixa as pessoas grosas e ácidas.',
  },
  {
    id: 9,
    nome: 'Amelia',
    produtor: 'Chico Buarque',
    categoria: 'Fermentado',
    notas: { aroma: 5, sabor: 8, acidez: 7.5, corpo: 10, docura: 9 },
    resumo: 'café... poético, doce e compreensivo - combina com a hora do chá.',
  },
  {
    id: 10,
    nome: 'Aqueles Caras',
    produtor: 'Chico Moedas',
    categoria: 'Honey',
    notas: { aroma: 9, sabor: 8, acidez: 7.5, corpo: 6.5, docura: 9 },
    resumo: 'Eu tentei Não ser moleque com você, eu tentei Mas quem não erra em 2023? Tava tudo perfeito esse ano Até tu virar minha ex Eu já tava curtindo com os mano Mas você postou que eu chorei E quem te disse que homem não chora?',
  },
  {
    id: 11,
    nome: 'Enola Holmes 1',
    produtor: 'Sherlock Holmes',
    categoria: 'Natural',
    notas: { aroma: 8, sabor: 8, acidez: 10, corpo: 6.5, docura: 5.5 },
    resumo: 'Te deixa serío por fora e compreensivel e amoroso por dentro.',
  }
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
