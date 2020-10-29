// import { createApp } from 'vue'

import KTable from './k-table/KTable.vue';
import KTableColumn from './k-table/KTableColumn.vue';
// createApp()
// .component('KTable', KTable)
// .component('KTableColumn', KTableColumn)

export default function install(Vue) {
  Vue
  .component('KTable', KTable)
  .component('KTableColumn', KTableColumn)
}
