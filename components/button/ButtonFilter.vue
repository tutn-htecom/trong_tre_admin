<template>
    <div class="me-2">
        <!-- <v-btn> -->
        <!-- <div :class="computedClasses + ' hover'">
                <slot></slot>
            </div> -->
        <v-btn rounded :color="'button-type ' + isActive" dark>
            <slot></slot>
        </v-btn>
        <!-- </v-btn> -->

    </div>
</template>

<script>
export default {
    props: {
        active: {
            type: String,
            default: '', // Giá trị mặc định là chuỗi rỗng
        },
    },
    computed: {
        isActive() {
            if (this.active == 'active') {
                return 'primary'
            } else {
                return 'grey lighten-3 text-dark'
            }
        },
    },
}
</script>

<style lang="scss" scoped>
.button {
    padding: 9px 27px;
    border-radius: 46px;
    background: #E5E5E5;
    color: #2D2D2D;
    margin-right: 10px;
    cursor: pointer;
}

.active {
    padding: 12px 32px;
    border-radius: 46px;
    background: #0056B1;
    color: white;
    cursor: pointer;
}

.hover {
    transition: 0.3s;
    font-family: SVN-Gilroy;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;

    &:hover {
        background: #004691;
        color: white;
    }
}

.button-type {
    margin-bottom: 5px;
}

.btn-header {
    padding: 8px 28px;
    display: inline;
}

@media (max-width: 600px) {
    .button {
        padding: 5px 14px !important;
        font-size: 10px !important;

        span {
            font-size: 10px !important;
        }
    }

    .v-btn {
        padding: 5px 14px !important;
        font-size: 10px !important;

        span {
            font-size: 10px !important;
        }
    }

    .button-type {
        span {
            font-size: 13px !important;
        }
    }
}
</style>