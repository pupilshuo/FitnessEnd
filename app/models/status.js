const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const Status = new Schema({
    phone: { type: Number, required: false },
    ExerciseRiskActiveStep: { type: Number, required: false },
    ParQ_Status: { type: Object, required: false },
    PA_Status: { type: Object, required: false },
    Screening_Status: { type: Object, required: false },
    Cardiovascular_Status: { type: Object, required: false },
    flexible_Status: { type: Object, required: false },
    heartLung_Status: { type: Object, required: false },
    muscle_Status: { type: Object, required: false },
    flexing_training_Status: { type: Object, required: false },
    func_training_Status: { type: Object, required: false },
    heart_training_Status: { type: Object, required: false },
    power_training_Status: { type: Object, required: false },
});
module.exports = model('Status', Status)
