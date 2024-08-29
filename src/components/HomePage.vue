<template>
  <div class="home-page">
    <h1>Chơi game, dám click nút bên dưới ko?</h1>
    <div class="list-button">
      <button @click="start2" class="scare">Thôi, sợ</button>
      <button @click="start">Ngại gì mà ko thử?</button>

    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function start() {
  router.push('/think-number')
}
const start2 = () => {
  alert('Đúng rồi, sợ thì thôi, mà vẫn phải chơi :))')
  router.push('/think-number')
}
</script>
<style scoped lang="scss">
.home-page {
  display: flex;
  height: 100vh;
  flex-direction: column;
  width: 100vw;
  vertical-align: middle;
  align-items: center;
  justify-content: center;
.list-button{
  display: flex;
  flex-direction: row;
  gap: 14px;
  
  button {
    padding: 10px 20px;
    font-size: 20px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    height: 50px;

    &.scare {
      background: red;
    }

    &:hover {
      background-color: #45a049;
    }
  }
}

}
</style>