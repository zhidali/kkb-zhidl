<template>
    <div class='k-table-column'>
        <ul>
            <li
                v-for="v in data"
                :key="v.id"
            >
                {{v.id}}
            </li>
        </ul>
    </div>
</template>

<script>
    import { ref, reactive, watchEffect, watch, computed, onMounted, onUpdated, onUnmounted, toRef } from 'vue';
    export default {
        name: 'KTableColumn',
        inject: ['data'],
        components: {},
        setup(props, { attrs, emit, slots }) {
            return {};
        },
    };




    
</script>

<style lang='less' scoped>
</style>
