import mongoose from 'mongoose';

const CourseSchema = new mongoose.Schema({ 
    ame: String,
    points: Number
});

export default mongoose.model('Course', CourseSchema);
