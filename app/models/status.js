const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const Status = new Schema({
    phone: { type: Number, required: false },
    ExerciseRiskActiveStep: { type: Number, required: false },
    ParQ_Status: { type: Object, required: false },
    PA_Status: { type: Object, required: false },
    Screening_Status: { type: Object, required: false },
    Cardiovascular_Status: { type: Object, required: false },
    Flexible_Status: { type: Object, required: false },
    HeartLung_Status: { type: Object, required: false },
    Muscle_Status: { type: Object, required: false },
    Flexing_training_Status: { type: Object, required: false },
    Func_training_Status: { type: Object, required: false },
    Heart_training_Status: { type: Object, required: false },
    Power_training_Status: { type: Object, required: false },
});
module.exports = model('Status', Status)
