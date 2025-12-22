<script setup lang="ts">
import { ref } from 'vue'
import { subnetMasks } from '../constants/subnetMasks'
import { isIpValid } from '../utils/isIpValid'
import { getNetworkAddress } from '../utils/getNetworkAddress'
import { getAddressesCount } from '../utils/getAddressesCount'

import { UiField, UiInput, UiSelect, UiButton } from 'subnet-ui-katya'

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
    <h1>Калькулятор подсетей</h1>

    <div class="form">
      <UiField label="IP-адрес">
        <UiInput v-model="ip" placeholder="Введите IP-адрес" class="field" />
      </UiField>

      <UiField label="Маска подсети">
        <UiSelect v-model="mask" :options="options" class="field" />
      </UiField>

      <UiButton
        type="submit"
        :is-disabled="!isIpValid(ip)"
        layout="primary"
        @click="showResult"
      >
        Рассчитать
      </UiButton>
    </div>

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
  flex-direction: column;
  gap: 16px;
  padding: 24px;
  background: var(--color-background);
  border-radius: 16px;
  max-width: 400px;
  width: 100%;
  border: 1px solid var(--color-border);
}

.field {
  width: 100% ;
  box-sizing: border-box ;
}

.result {
  font-size: 18px;
  margin-top: 32px;
  padding: 24px;
  background: var(--color-background);
  border-radius: 16px;
  border: 1px solid var(--color-border);
  max-width: 400px;
  width: 100%;
}
</style>