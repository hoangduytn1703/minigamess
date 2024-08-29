<template>
  <div>
    <p>Con số mà bạn đã nghĩ tới là: {{ result }}</p>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'

const props = defineProps<{ result: number }>()
</script>
