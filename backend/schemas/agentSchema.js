import mongoose from 'mongoose';

const agentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name for the agent'],
    trim: true
  },
  ticket: {
    type: String,
    required: [true, 'Please provide a ticket'],
    maxLength: [4, 'Ticket cannot be more than 4 characters'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Please provide a description'],
    trim: true
  },
  voiceType: {
    type: String,
    required: [true, 'Please select a voice type'],
    enum: ['us_male', 'us_female', 'uk_male', 'uk_female'],
    default: 'uk_female'
  },
  imageUrl: {
    type: String,
    default: ''
  },
  modelUrl: {
    type: String,
    default: ''
  }
}, {
  timestamps: true,
  collection: 'agents'
});

export default agentSchema;
