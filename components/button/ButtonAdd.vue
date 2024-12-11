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
            // Sử dụng class được truyền vào nếu có, nếu không, sử dụng class mặc định
            return this.addClass + ' button';
        },
    },
}
</script>

<style lang="scss" scoped>
.button {
    color: #4EAEEA;
    text-align: center;
    border-radius: 42px;
    border: 1px solid #4EAEEA;
    background: #E8F3FF;
    padding: 10px;
    cursor: pointer;
}
.btn-success-2 {
    border: 1px solid #18cb3f;
    color: #18cb3f;
    background: #e3f9e5;
}
.btn-danger-2 {
    border: 1px solid #c91919;
    color: #c91919;
    background: #ffebe8;
}
.hover {
    transition: 0.3s;
    font-family: SVN-Gilroy;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;

    &:hover {
        background: transparent;
    }
}

.btn-header {
    padding: 8px 28px;
    display: inline;
}

.btn-add-more-law {
    width: 44px;
    height: 44px;
    text-align: center;
    display: inline;
    font-size: 20px;
}
</style>