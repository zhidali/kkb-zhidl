
<template>
    <!-- 暗号1 杨哥喊你来搬砖 -->
    <!-- 暗号2 see you next time -->
    <!-- 每一项 -->
    <div
        class='k-table-column'
        v-if="prop"
    >
        <div class="tit">
            {{lable}}
            <div
                class="sort"
                v-if="isShowSort(prop)"
            >
                <span
                    :class="isSortAsc?'act' : ''"
                    @click="tabSort"
                >
                    升序
                </span>
                <span
                    :class="isSortAsc? '' : 'act'"
                    @click="tabSort"
                >降序</span>
            </div>
        </div>
        <template v-for="(v, i) in list">
            <slot
                :row="row(v)"
                :idx="i"
            >
                <div
                    :key="v._id"
                    class="td"
                >
                    {{v[prop]}}
                </div>
            </slot>
        </template>

    </div>
    <!-- 自定义列表 -->
    <div
        class="k-table-column"
        v-else
    >
        <div class="tit">{{lable}}</div>
        <div
            v-for="(v, i) in d"
            :key="i"
            class="td"
        >
            <slot
                :row="row(v)"
                :idx="i"
            >
            </slot>
        </div>
    </div>
</template>

<script>
    import { ref, reactive, watchEffect, watch, computed, onMounted, onUpdated, onUnmounted, toRef, inject } from 'vue';
    export default {
        name: 'KTableColumn',
        components: {},
        inheritAttrs: false,
        props: {
            sortable: {
                type: Boolean,
                default: false,
            },
        },
        setup(props, { attrs, emit, slots }) {
            // data数据
            const d = reactive(inject('data', []));
            let sortD = inject('defaultSort', {});
            
            // ascending 升序 默认
            // descending 降序

            if (!sortD.order) {
                sortD.order = 'ascending';
            }
            
            const defaultSort = reactive(sortD);

            const isSortAsc = computed(() => {
                return defaultSort.order === 'ascending' ? true : false;
            });
            const isShowSort = computed(() => {
                return (prop) => {
                    if (props.sortable) {
                        return true;
                    }
                    return defaultSort.prop && defaultSort.prop === prop;
                };
            });

            // 渲染数组
            const list = computed(() => {
                let li = d.map((v, i) => {
                    return {
                        [attrs.prop]: v[attrs.prop],
                        _id: i + attrs.prop,
                    };
                });
                return li;
            });

            const row = computed(() => {
                return (v) => {
                    return {
                        item: v,
                    };
                };
            });

            if (!isSortAsc) {
                d.reverse();
            }

            // 升序倒序
            const tabSort = () => {
                defaultSort.order = (isSortAsc.value ? 'descending' : 'ascending');
                d.reverse();
            };

            return {
                d,
                list,
                prop: attrs.prop || '',
                lable: attrs.lable,
                row,
                isShowSort,
                defaultSort,
                tabSort,
                isSortAsc
            };
        },
    };
</script>

<style lang='less' scoped>
.k-table-column {
    padding: 0 10px;
    .tit {
        display: flex;
        align-items: center;
        font-size: 16px;
        font-weight: bold;
    }
    .td {
        min-height: 34px;
    }
    .act {
        color: blue;
    }
}
</style>
