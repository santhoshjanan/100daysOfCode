<template>
    <div>
        <div class="lg:w-full">
            <el-form ref="form" :model="form" label-width="120px">
                <el-form-item label="Survey name">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="Description">
                    <el-input v-model="form.description"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="dialogVisible = true"
                        >Add question</el-button
                    >
                </el-form-item>
                <el-table :data="form.questions" border style="width: 100%">
                    <el-table-column prop="qtype" label="Type" width="180">
                    </el-table-column>
                    <el-table-column
                        prop="question"
                        label="Question"
                        width="180"
                    >
                    </el-table-column>
                    <el-table-column prop="answers" label="Answers">
                    </el-table-column>
                    <el-table-column
                        fixed="right"
                        label="Operations"
                        width="120"
                    >
                        <template slot-scope="scope">
                            <el-button
                                @click.native.prevent="
                                    deleteRow(scope.$index, form.questions)
                                "
                                type="text"
                                size="small"
                                icon="el-icon-delete"
                            ></el-button>
                            <el-button
                                type="text"
                                size="small"
                                icon="el-icon-edit"
                                @click.native.prevent="
                                    editRow(scope.$index, form.questions)
                                "
                            ></el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <el-form-item>
                    <el-button type="primary" @click="createSurvey"
                        >Submit</el-button
                    >
                </el-form-item>
            </el-form>
            <el-dialog
                title="Tips"
                :visible.sync="dialogVisible"
                width="30%"
                :before-close="handleClose"
            >
                <el-form ref="form" :model="form" label-width="120px">
                    <el-form-item label="Question type">
                        <el-select v-model="dQtype" placeholder="Select">
                            <el-option
                                v-for="item in qtypes"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                            >
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="Question">
                        <el-input
                            v-model="dQuestion"
                            placeholder="Question text"
                        ></el-input>
                    </el-form-item>
                    <el-form-item label="Question">
                        <el-input
                            :rows="3"
                            type="textarea"
                            placeholder="Comma separated answers"
                            v-model="dAnswer"
                        ></el-input>
                    </el-form-item>
                </el-form>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="dialogVisible = false">Cancel</el-button>
                    <el-button type="primary" @click="handleConfirm"
                        >Confirm</el-button
                    >
                </span>
            </el-dialog>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import axios from 'axios';

export default {
    computed: { ...mapGetters(['token', 'userDetails', 'authenticated']) },
    methods: {
        createSurvey() {
            axios
                .post('/survey', this.form, {
                    headers: { Authorization: 'Bearer ' + this.token },
                })
                .then((response) => {
                    console.log(response);
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        deleteRow(index, rows) {
            rows.splice(index, 1);
        },
        editRow(index, rows) {
            console.log(index, rows[index].qtype);
            this.edittedRow = rows[index];
            this.edit = true;
            this.dQtype = rows[index].qtype;
            this.dQuestion = rows[index].question;
            this.dAnswer = rows[index].answers;

            this.dialogVisible = true;
        },
        handleConfirm() {
            if (!this.edit) {
                this.form.questions = [
                    ...this.form.questions,
                    {
                        qtype: this.dQtype,
                        question: this.dQuestion,
                        answers: this.dAnswer,
                    },
                ];
            } else {
                let newVals = this.form.questions.find(
                    (item) => item.question === this.edittedRow.question
                );
                newVals.qtype = this.dQtype;
                newVals.question = this.dQuestion;
                newVals.answers = this.dAnswer;
            }
            console.log({
                type: this.dQtype,
                question: this.dQuestion,
                answers: this.dAnswer,
            });
            this.dialogVisible = false;
            this.edit = false;
        },
        handleClose(done) {
            this.$confirm('Are you sure to close this dialog?')
                .then((_) => {
                    done();
                })
                .catch((_) => {});
        },
    },
    data() {
        return {
            edit: false,
            edittedRow: null,
            dialogVisible: false,
            dQtype: '',
            dQuestion: '',
            dAnswer: '',
            form: {
                name: '',
                description: '',
                createdBy: this.userDetails,
                questions: [
                    {
                        qtype: 'boolean',
                        question: 'Tom',
                        answers: 'No. 189, Grove St, Los Angeles',
                    },
                    // {
                    //     type: '2016-05-02',
                    //     question: 'Tom',
                    //     answers: 'No. 189, Grove St, Los Angeles',
                    // },
                    // {
                    //     type: '2016-05-04',
                    //     question: 'Tom',
                    //     answers: 'No. 189, Grove St, Los Angeles',
                    // },
                    // {
                    //     type: '2016-05-01',
                    //     question: 'Tom',
                    //     answers: 'No. 189, Grove St, Los Angeles',
                    // },
                ],
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
