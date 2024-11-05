<template>
  <div>
    <NavView />
    <div>
      <ListView />
      <!-- <div>
        <h3>Counter Example</h3>
        <p>Current Count: {{ counter.count }}</p>
        <p>Double Count: {{ counter.doubleCount }}</p>
        <button @click="counter.increment">Increment</button>
      </div> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import NavView from './content/NavView.vue';
import ListView from './content/ListView.vue';
// import { useCounterStore } from '../stores/counter.ts';

// const counter = useCounterStore();
</script>

<style scoped></style>
