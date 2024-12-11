<template>
    <v-btn height="100%" :type="typeBtn" :class="computedClasses + ' hover'">
        <slot></slot>
    </v-btn>
</template>

<script>
export default {
    props: {
        addClass: {
            type: String,
            default: '', // Giá trị mặc định là chuỗi rỗng
        },
        typeBtn: {
            type: String,
            default: 'button', // Giá trị mặc định là chuỗi rỗng
        },
    },
    computed: {
        computedClasses() {
            if (this.addClass == '') {
                return 'primary button';
            }
            // Sử dụng class được truyền vào nếu có, nếu không, sử dụng class mặc định
            return this.addClass + ' button';

        },
    },
}
</script>

<style lang="scss" scoped>
.button {
    color: #FFF !important;
    text-align: center !important;
    font-family: SVN-Gilroy !important;
    font-size: 16px !important;
    font-style: normal !important;
    font-weight: 500 !important;
    text-align: center !important;
    border-radius: 42px;
    padding: 12px !important;
    width: 100% !important;
    cursor: pointer;
    transition: 0.3s;
}

.danger {
    border: 1px solid #FC4D32 !important;
    background: #FC4D32;

    &:hover {
        background: #e7371c;
    }
}

.silver {
    background: #E5E5E5 !important;
    color: #2D2D2D !important;

    &:hover {
        background: #9c9c9c ;
    }
}

.primary {
    border: 1px solid #0056B1 !important;
    background: #0056B1 !important;

    &:hover {
        background: #004691 !important;
    }
}

.hover {
    transition: 0.3s;
    font-family: SVN-Gilroy;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
}

.btn-header {
    padding: 8px 28px;
    display: inline;
}
</style>