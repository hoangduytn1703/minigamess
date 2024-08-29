<template>
    <div class="home-page">
      <button @click="start">Start</button>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { useRouter } from 'vue-router'
  
  const router = useRouter()
  
  function start() {
    router.push('/think-number')
  }
  </script>
    <style scoped lang="scss">
    .home-page {
      display: flex;
      height: 100vh;
      flex-direction: row;
      width: 100vw;
      vertical-align: middle;
      align-items: center;
      justify-content: center;

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
    }
  </style>