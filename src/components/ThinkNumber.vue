<template>
    <div class="home-page">
      <h1>Bé hãy suy nghĩ và chọn từ 1 tới 200 (ko nói ra nhé)</h1>
      <h2>xong gòi thì click Next</h2>
      <button @click="next">Click thì click</button>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { useRouter } from 'vue-router'
  
  const router = useRouter()
  
  const next = () => {
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