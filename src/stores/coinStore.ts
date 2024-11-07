import { ref } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const useCoinStore = defineStore("coinStore", () => {
  const coins = ref([]);
  const coin = ref(null);
  const loading = ref(false);

  // Fungsi untuk mengambil data koin dari API
  const fetchCoins = async () => {
    loading.value = true;
    try {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets",
        {
          params: {
            vs_currency: "usd",
            order: "market_cap_desc",
            per_page: 100,
            page: 1,
            sparkline: false,
          },
        }
      );
      coins.value = response.data;
    } catch (error) {
      console.error("Error fetching coins:", error);
    } finally {
      loading.value = false;
    }
  };

  // Fungsi untuk mengambil data detail koin berdasarkan ID
  const fetchCoinDetail = async (id: string) => {
    loading.value = true;
    try {
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${id}`
      );
      coin.value = response.data;
      console.log("Fetching coin detail for ID:", id);
    } catch (error) {
      console.error("Error fetching coin detail:", error);
    } finally {
      loading.value = false;
    }
  };

  return { coins, coin, loading, fetchCoins, fetchCoinDetail };
});
