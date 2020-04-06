<template>
    <div
        class="lg:w-1/2 md:w-2/3 sm:w-2/3 xs:w-2/3 p-4 justify-center bg-white shadow-2xl rounded-md mx-auto flex flex-col"
    >
        <div class="text-center text-4xl">Survey App</div>
        <form v-on:keypress.enter="login">
            <div class="w-full">
                <el-alert v-if="error" type="error" :closable="false" show-icon>
                    {{ errMessage }}
                </el-alert>
                <div class="py-1">
                    <el-input
                        placeholder="Email"
                        v-model="user.email"
                        prefix-icon="el-icon-user"
                    ></el-input>
                </div>
                <div class="py-1">
                    <el-input
                        placeholder="password"
                        v-model="user.password"
                        show-password
                    ></el-input>
                </div>
                <div class="py-1">
                    <el-button
                        type="primary"
                        icon="el-icon-lock"
                        @click="signIn"
                        >Login</el-button
                    >
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'Login',
    data() {
        return {
            user: { email: null, password: null },
            error: false,
            errMessage: null,
        };
    },
    computed: { ...mapGetters(['token', 'userDetails', 'authenticated']) },
    methods: {
        ...mapActions(['LOGIN']),
        signIn() {
            this.LOGIN(this.user)
                .then(() => {
                    console.log(this.authenticated);
                    if (this.authenticated) {
                        this.$router.push('/dashboard');
                    } else;
                })
                .catch((err) => {
                    this.error = true;
                    this.errMessage = err;
                    console.log(err);
                });
        },
    },
};
</script>

<style lang="scss" scoped></style>
