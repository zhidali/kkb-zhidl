<template>
<div>
  <k-table :data="tableData" :default-sort="{prop: 'name'}">
    <k-table-column prop="date" lable="时间" ></k-table-column>

    <k-table-column prop="name" lable="姓名" />
    <k-table-column prop="address" lable="地址" />
    
    <k-table-column lable="操作">
      <template v-slot:default="slotProps">
        <div v-if="slotProps.idx === 1" @click="click(slotProps)">
          编辑
        </div>
        <div v-else @click="click(slotProps)">
          删除
        </div>
      </template>
    </k-table-column>
  </k-table>
</div>
</template>

<script>
import {
  reactive
} from 'vue';
export default {
  name: 'App',
  setup() {
    const tableData = reactive([{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        id: 1
      },
      {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄',
        id: 2
      },
      {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄',
        id: 3
      },
      {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄',
        id: 4
      },
    ]);

    const click = (slotProps) => {
      console.log(slotProps);
    }

    return {
      tableData,
      click
    }
  },
};
</script>

<style lang="less">
</style>
