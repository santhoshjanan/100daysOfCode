<template>
    <div>
        <div class="lg:w-128">
            <el-form ref="form" :model="form" label-width="120px">
                <el-form-item label="Survey name">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="Description">
                    <el-input v-model="form.description"></el-input>
                </el-form-item>
                <el-form-item label="Question type">
                    <el-select v-model="value" placeholder="Select">
                        <el-option
                            v-for="item in qtypes"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                        >
                        </el-option>
                    </el-select>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    computed: { ...mapGetters(['token', 'userDetails', 'authenticated']) },

    data() {
        return {
            form: {
                name: '',
                description: '',
                questions: [],
                createdBy: this.userDetails,
            },
            qtypes: [
                { label: 'Yes/No', value: 'boolean' },
                { label: 'Multiple choice', value: 'multi' },
                { label: 'Text', value: 'text' },
            ],
        };
    },
};
</script>

<style lang="scss" scoped></style>
