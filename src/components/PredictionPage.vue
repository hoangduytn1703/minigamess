<template>
  <div v-if="!isLove">
    <h1>Con số mà bạn đã nghĩ tới là: <strong>{{ result }}</strong></h1>
    <button @click="iloveyou">Đúng hk? đúng thì click</button>
  </div>
  <div v-else>
    <h1 class="love">Anh yêu nhiều lắm</h1>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, ref } from 'vue'

const props = defineProps<{ result: number }>()
const isLove = ref(false)
const iloveyou = () =>{
  isLove.value = true
}
</script>
<style lang="scss" scoped>
h1 {
  font-size: 50px;
  &.love{
    color: red;
  }
  strong {
    color: red;
  }
}
button {
  padding: 10px 20px;
  font-size: 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  height: 50px;

  &:hover {
    background-color: #45a049;
  }
}
</style>  