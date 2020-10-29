<template>
<div class='k-table'>
  <slot></slot>
</div>
</template>

<script>
/*
import {
  ref,
  reactive,
  watchEffect,
  watch,
  computed,
  onMounted,
  onUpdated,
  onUnmounted,
  toRef
} from 'vue';
*/
// import {
//   toRefs
// } from 'vue';
export default {
  name: 'KTable',
  provide() {
    return {
      data: this.data
    }
  },
  props: {
    data: {
      type: Object
    }
  },
  components: {},
  setup(props) {
    console.log(props.data);
    return {
      ...props
    }
  },
};
</script>

<style lang='less' scoped>
</style>
