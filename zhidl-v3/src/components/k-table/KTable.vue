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
    import { provide } from 'vue';
    export default {
        name: 'KTable',
        components: {},
        props: {
            data: {
                type: Array,
                default: () => {
                    return [];
                },
            },
            defaultSort: {
              type: Object,
              default: () => {
                return {}
              }
            }
        },
        setup(props, { attrs, emit, slots }) {
          console.log(props);
            provide('data', props.data);
            provide('defaultSort', props.defaultSort);
        },
    };
</script>

<style lang='less' scoped>
.k-table {
    display: flex;
}
</style>
