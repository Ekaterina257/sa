<script setup lang="ts">
import { ref } from 'vue'
import { subnetMasks } from '../constants/subnetMasks'
import { isIpValid } from '../utils/isIpValid'
import { getNetworkAddress } from '../utils/getNetworkAddress'
import { getAddressesCount } from '../utils/getAddressesCount'

const ip = ref('')
const mask = ref('255.255.255.255')
const options = subnetMasks
const isShowResult = ref(false)

function showResult() {
  isShowResult.value = true
}
</script>

<template>
   <div class="container">
   <h1> Калькулятор подсетей </h1>
    <form @submit.prevent="showResult" class="form">
      <input v-model="ip" class="h" placeholder="Введите IP-адрес" />
      <select v-model="mask" class="g">
        <option v-for="option in options" :key="option" :value="option">
          {{ option }}
        </option>
      </select>
      <button type="submit" :disabled="!isIpValid(ip)" class="b">Рассчитать</button>
    </form>

    <div v-if="isShowResult && isIpValid(ip)" class="result">
      <div>IP: <strong>{{ ip }}</strong></div>
      <div>Маска подсети: <strong>{{ mask }}</strong></div>
      <div>Адрес сети: <strong>{{ getNetworkAddress(ip, mask) }}</strong></div>
      <div>Количество адресов: <strong>{{ getAddressesCount(mask) }}</strong></div>
    </div>
  </div>
</template>

<style scoped>
.container {
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background: var(--color-background);
  color: var(--color-text);
}

.form {
  display: flex;
  gap: 12px;
  padding: 20px;
  background: var(--color-background);
  border-radius: 16px;
  align-items: center;
  flex-wrap: wrap;
  max-width: 600px;
  width: 100%;
  border: 1px solid var(--color-border);
}

.h,
.g {
  border-radius: 12px;
  padding: 12px 16px;
  font-size: 16px;
  outline: none;
  border: 1px solid var(--color-border);
  flex: 1;
  min-width: 140px;
  background: var(--color-surface);
}

.h:focus,
.g:focus {
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px var(--color-primary);
}

.b {
  background: linear-gradient(var(--color-primary), var(--color-primary-light));
  color: var(--color-text);
  font-weight: 600;
  font-size: 16px;
  border: none;
  border-radius: 12px;
  padding: 12px 24px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.b:hover {
  background: linear-gradient(var(--color-primary-light), var(--color-primary));
}

.b:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.result {
  font-size: 20px;
  margin-top: 32px;
  padding: 24px;
  background: var(--color-background);
  border-radius: 16px;
  border: 1px solid var(--color-border);
  max-width: 600px;
  width: 100%;
}
</style>