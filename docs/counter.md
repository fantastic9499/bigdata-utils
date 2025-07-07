---
title: 计数器
description: Vue3计数器
---

<script setup lang="ts">
import { ref } from 'vue';
const count = ref<number>(0);
</script>

<span>{{ count }}</span>
<button @click="count++" class="btn">增加</button>

<style scoped>
 .btn {
  color: red;
  font-weight: bold;
 } 
</style>