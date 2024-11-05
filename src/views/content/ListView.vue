<template>
  <div class="container">
    <h2 class="text-center mb-4">Crypto Coins</h2>

    <!-- Indikator loading -->
    <div v-if="coinStore.loading" class="text-center">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>

    <!-- Konten Card -->
    <div v-else class="row">
      <div class="col-md-4 mb-4" v-for="coin in coinStore.coins" :key="coin.id" @click="goToDetail(coin.id)">
        <div class="card shadow border rounded text-center">
          <div class="card-img-top mt-2" style="display: flex; justify-content: center;">
            <img :src="coin.image" class="img-fluid" style="width: 70px; height: 70px; object-fit: contain;"
              :alt="coin.name" />
          </div>
          <div class="card-body">
            <h5 class="card-title" style="font-size: 1.25rem;">{{ coin.name }}</h5>
            <p class="card-text text-muted mb-1">Price: <span class="fw-bold">${{ coin.current_price.toLocaleString()
                }}</span></p>
            <p class="card-text text-muted mb-0">Market Cap: <span class="fw-bold">${{ coin.market_cap.toLocaleString()
                }}</span></p>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useCoinStore } from '/src/stores/coinStore.ts';

const coinStore = useCoinStore();
const router = useRouter();

const goToDetail = (id: string) => {
  router.push({ name: 'detail', params: { id } });
};

onMounted(() => {
  if (coinStore.coins.length === 0) {
    coinStore.fetchCoins();
  }
});
</script>

<style scoped>
.card {
  transition: transform 0.2s;
  background-color: #f8f9fa;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}
</style>
