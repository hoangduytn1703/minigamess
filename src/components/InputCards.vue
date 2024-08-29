<template>
  <div>
    <p>Nhập số thứ tự các lá bài có con số mà bé Ngân của Di đã nghĩ tới</p>
    <div v-for="(selected, index) in selectedCards" :key="index">
      <label>Card {{ index + 1 }}</label>
      <input type="checkbox" v-model="selectedCards[index]" />
    </div>
    <button @click="predict">Dự đoán</button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const selectedCards = ref<boolean[]>(Array(8).fill(false));

function predict() {
  const result = selectedCards.value
    .map((isSelected, index) => (isSelected ? Math.pow(2, index) : 0))
    .reduce((sum, val) => sum + val, 0);

  router.push({ name: "PredictionPage", params: { result } });
}
</script>
<style scoped lang="scss">

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

    </style>