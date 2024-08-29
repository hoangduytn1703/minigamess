<template>
    <div class="home-page">
      <p>Bé hãy suy nghĩ và chọn từ 1 tới 200 (ko nói ra nhé)</p>
      <button @click="next">Next</button>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { useRouter } from 'vue-router'
  
  const router = useRouter()
  
  function next() {
    router.push('/show-cards')
  }
  </script>
    <style scoped lang="scss">
    .home-page{
      display: flex;
        height: 100vh;
        flex-direction: column;
        width: 100vw;
        vertical-align: middle;
        align-items: center;
        justify-content: center;
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
    }
        </style>