<template>
    <div :class="computedClasses + ' hover'">
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        addClass: {
            type: String,
            default: '', // Giá trị mặc định là chuỗi rỗng
        },
    },
    computed: {
        computedClasses() {
            return this.addClass + ' button';
        },
    },
}
</script>

<style lang="scss" scoped>
.flex-1 {
    flex: 1;
}

.button {
    // padding: 9px 27px;
    padding: 12px 32px;
    border-radius: 46px;
    background: #E5E5E5;
    color: #2D2D2D;
    margin-right: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
}

.hover {
    transition: 0.3s;
    font-family: SVN-Gilroy;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;

    &:hover {
        background: #d4d4d4;
    }
}

.active {
    padding: 12px 32px;
    border-radius: 46px;
    background: #0056B1;
    color: white;
    cursor: pointer;

    &:hover {
        background: #004691;
        color: white;
    }
}


.btn-header {
    padding: 8px 28px;
    display: inline;
}
</style>