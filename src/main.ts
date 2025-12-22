// main.ts
import { createApp } from 'vue'
import App from './App.vue'

// Подключаем стили вашей библиотеки
import 'subnet-ui-katya/dist/index.css'

// Добавляем CSS-переменные
document.documentElement.style.setProperty('--color-primary', '#b4a9f0')
document.documentElement.style.setProperty('--color-primary-light', '#a8d8ea')
document.documentElement.style.setProperty('--color-background', '#ffffff')
document.documentElement.style.setProperty('--color-surface', '#faf9f6')
document.documentElement.style.setProperty('--color-border', '#a8d8ea')
document.documentElement.style.setProperty('--color-text', '#3a3a4a')

createApp(App).mount('#app')