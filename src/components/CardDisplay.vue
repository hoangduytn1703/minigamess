<template>
    <div class="card-display">
      <p>Lá bài {{ currentCardIndex + 1 }}</p>
      <div v-if="currentCard" class="card-numbers">
        <!-- Hiển thị các số trên lá bài -->
        <ul class="number-grid">
          <li v-for="number in currentCard" :key="number" class="number-item">{{ number }}</li>
        </ul>
      </div>
      <div class="button-group">
        <button @click="prevCard" v-if="!isFirstCard" class="button">Prev</button>
        <button @click="nextCard" v-if="!isLastCard" class="button">Next</button>
        <button @click="finish" v-if="isLastCard" class="button">Finish</button>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { computed, onMounted, ref } from 'vue'
  import { useRouter } from 'vue-router'
  
  const router = useRouter()
  const cards = ref<number[][]>([])
  
  onMounted(() => {
    for (let i = 0; i < 8; i++) {
      const card: number[] = []
      for (let j = 1; j <= 200; j++) {
        if ((j >> i) & 1) {
          card.push(j)
        }
      }
      cards.value.push(card)
    }
  })
  
  const currentCardIndex = ref(0)
  const currentCard = computed(() => cards.value[currentCardIndex.value])
  const isLastCard = computed(() => currentCardIndex.value === cards.value.length - 1)
  const isFirstCard = computed(() => currentCardIndex.value === 0)
  
  function nextCard() {
    if (!isLastCard.value) {
      currentCardIndex.value++
    }
  }
  
  function prevCard() {
    if (!isFirstCard.value) {
      currentCardIndex.value--
    }
  }
  
  function finish() {
    router.push('/input-cards')
  }
  </script>
  
  <style scoped>
  button{
  padding: 10px 20px;
  font-size: 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  height: 50px;
  &:hover{
    background-color: #45a049;
  }
}
  .card-display {
    text-align: center;
    margin-top: 20px;
  }
  
  .card-numbers {
    margin: 20px 0;
  }
  
  .number-grid {
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    gap: 10px;
    list-style-type: none;
    padding: 0;
  }
  
  .number-item {
    background-color: #f5f5f5;
    padding: 10px;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .button-group {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 20px;
  }
  
  .button {
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    background-color: #007bff;
    color: white;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s;
  }
  
  .button:hover {
    background-color: #0056b3;
  }
  </style>
  