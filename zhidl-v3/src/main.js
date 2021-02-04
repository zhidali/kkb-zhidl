import { createApp } from 'vue'
import App from './App.vue'
import globalComponents from './components/index.js';

// import KTable from '@/components/k-table/KTable.vue';
// import KTableColumn from '@/components/k-table/KTableColumn.vue';
createApp(App)
.use(globalComponents)
// .component('KTable', KTable)
// .component('KTableColumn', KTableColumn)
.mount('#app')
