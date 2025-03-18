import mongoose from 'mongoose';
import agentSchema from '../schemas/agentSchema.js';

const Agent = mongoose.models.Agent || mongoose.model('Agent', agentSchema);

export default Agent; 