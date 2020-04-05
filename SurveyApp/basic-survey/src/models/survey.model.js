const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SurveyModel = new mongoose.Schema(
    {
        name: { type: String, required: true, index: true },
        description: { type: String, required: true, unique: true },
        questions: [
            {
                question: {
                    type: String,
                    required: true,
                },
                qtype: {
                    type: String,
                    required: true,
                },
                answers: [],
            },
        ],
        createdBy: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
    },
    { timestamps: true }
);

const Survey = mongoose.model('Survey', SurveyModel);

module.exports = Survey;
