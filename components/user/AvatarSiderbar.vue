<template>
    <div class="d-flex flex-wrap">
        <div class="box-img border border-4">
            <img class="img-avatar" :src="user?.anh_nguoi_dung ?? '@/static/images/users/avatar.png'" alt="">
        </div>

        <div class="pt-2 ms-2">
            <div>
                <span class="blade ">
                    {{ user?.vai_tro }}
                </span>
                <h3 class="user-name text mt-1">
                    {{ user?.hoten }}
                </h3>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: "AvatarSiderbar",
    computed: {
        token() {
            const storedUser = JSON.parse(localStorage.getItem('user'));
            return storedUser.auth_key
        },
        user() {
            const storedUser = JSON.parse(localStorage.getItem('user'));
            return storedUser
        }
    },
}
</script>

<style lang="scss" scoped>
.border-4 {
    border-width: 2px!important;
}

.box-img {
    width: 58px;
    height: 58px;
    min-width: 58px;
    border-radius: 50%;
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
        // object-fit: cover;
    }
}
</style>