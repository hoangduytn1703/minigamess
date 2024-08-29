<template>
  <div class="end-page">
    <div v-if="!isLove">
      <h1>Con số mà bé đã nghĩ tới là: <strong>{{ result }}</strong> đúng hông nè?</h1>
      <button @click="iloveyou">Đúng hk? đúng thì click</button>
    </div>
    <div v-else class="ioveyou">
      <h1 class="love">ANH YÊU EM NHIỀU LẮM !!! </h1>
    </div>
  </div>

</template>

<script lang="ts" setup>
import { defineProps, ref } from 'vue'
const props = defineProps<{ result: number }>()

const isLove = ref(false)
const iloveyou = () => {
  isLove.value = true
}
</script>
<style lang="scss" scoped>
.end-page{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.end-page {
  padding: 0;
  h1 {
    font-size: 50px;
    strong {
      font-size: 80px;
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
  .ioveyou{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    background-color: red;
    h1 {
    font-size: 100px;

    &.love {
      color: #FFF;
    }

    strong {
      color: red;
    }
  }
  }
}
</style>