<template>
  <div>
    <h1>Hãy check vào các lá bài có số mà bé Ngân của anh đã chọn</h1>
     <div class="list-card">
      <div v-for="(selected, index) in selectedCards" :key="index" class="card">
      <label>Card {{ index + 1 }}</label>
      <input type="checkbox" v-model="selectedCards[index]" />
    </div>
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
.list-card{
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	justify-content: space-around;
	align-items: center;
	align-content: stretch;
  margin-bottom: 30px;
    .card{
      width: 20%;
    font-size: 31px;
    input{
        width: 31px;
        height: 31px;
    }
    }
}
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