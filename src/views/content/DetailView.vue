<template>
  <div>
    <NavView></NavView>
    <div class="container mt-4 bg-gray">
      <!-- Loading indikator -->
      <div v-if="coinStore.loading" class="text-center">
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>

      <!-- Konten detail koin -->
      <div v-if="!coinStore.loading && coinStore.coin" class="p-2">
        <h2 class="text-center mb-3">{{ coinStore.coin.name }}</h2>
        <router-link to="/" class="btn btn-sm btn-secondary mb-3">Back</router-link>
        <img :src="coinStore.coin.image?.large" :alt="coinStore.coin.name" class="d-block mx-auto" />
        <p><strong>Symbol:</strong> {{ coinStore.coin.symbol?.toUpperCase() }}</p>
        <p v-if="coinStore.coin.market_data?.current_price">
          <strong>Current Price:</strong> ${{ coinStore.coin.market_data.current_price.usd }}
        </p>
        <p v-if="coinStore.coin.market_cap">
          <strong>Market Cap:</strong> ${{ coinStore.coin.market_cap?.usd.toLocaleString() }}
        </p>
        <p v-if="coinStore.coin.description?.en">
          <strong>Description:</strong> <span v-html="coinStore.coin.description.en"></span>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import NavView from './NavView.vue';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useCoinStore } from '/src/stores/coinStore.ts';

const route = useRoute();
const coinStore = useCoinStore();

onMounted(() => {
  coinStore.fetchCoinDetail(route.params.id as string);
});
</script>

<style scoped></style>
