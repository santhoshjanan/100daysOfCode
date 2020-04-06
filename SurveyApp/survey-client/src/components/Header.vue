<template>
    <div class="bg-green-700 w-screen h-10 shadow flex flex-row">
        <span class="text-white text-2xl mx-4 bold">Surveys</span>
        <div class="w-screen flex justify-end">
            <span class="text-white text-2xl mx-4">
                <el-dropdown trigger="click" @command="handleCommand">
                    <span class="el-dropdown-link">
                        <i class="el-icon-user"></i> {{ userDetails.name }}
                        <i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item
                            icon="el-icon-switch-button"
                            command="logout"
                            >Logout</el-dropdown-item
                        >
                    </el-dropdown-menu>
                </el-dropdown>
            </span>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    data() {
        return {};
    },
    computed: { ...mapGetters(['token', 'userDetails', 'authenticated']) },
    methods: {
        ...mapActions(['LOGOUT']),
        handleCommand(command) {
            switch (command) {
                case 'logout':
                    this.LOGOUT(this.userDetails);
                    console.log('logout');
                    if (!this.authenticated) this.$router.push('/');
                    break;
                default:
                    console.log('default');
                    break;
            }
        },
    },
};
</script>

<style lang="scss" scoped>
.el-dropdown-link {
    cursor: pointer;
    color: #fff;
    font-weight: 700;
    font-size: 14px;
}
.el-icon-arrow-down {
    font-size: 14px;
}
.demonstration {
    display: block;
    color: #fff;
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 20px;
}
</style>
