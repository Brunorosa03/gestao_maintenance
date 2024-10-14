import { Schema, model } from 'mongoose';

const workshopSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    addressNumber: {
        type: Number,
        required: true
    },
    address: {
        type: ["motor", "freios", "suspensão"],
        required: true
    }
});

export default model('Workshop', workshopSchema);