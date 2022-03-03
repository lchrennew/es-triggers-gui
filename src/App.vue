<script setup>

import DefaultLayout from "./layout/DefaultLayout.vue";
import DrawerProvider from "./components/common/drawer/DrawerProvider.vue";</script>

<template>
    <drawer-provider>
        <default-layout/>
    </drawer-provider>
</template>

<style lang="less">
#app {
    min-height: 100%;
    display: flex;

    .column-flex {
        display: flex;
        flex-direction: column;
    }

    .spanning-height {
        .column-flex();
        height: fit-content;
        flex: 1;
    }

    .ant-table-wrapper {
        .spanning-height();

        & > .ant-spin-nested-loading {
            .spanning-height();

            & > .ant-spin-container {
                .spanning-height();

                & > .ant-table {
                    flex: 1;
                    background: #7c7c7c;

                    & .ant-table-content {
                        background: #fff;

                        .actions button {
                            border: none 0;
                            background: transparent;
                            cursor: pointer;
                            color: #ccc;

                            &:hover {
                                color: #7c7c7c;
                            }

                            &:focus {
                                outline: none;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
