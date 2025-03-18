import dbConnect from '../../../../../backend/src/database/connection';
import Agent from '../../../../../backend/src/database/models/agent';

export default async function handler(req, res) {
  try {
    await dbConnect();
    console.log('Connected to MongoDB successfully');

    switch (req.method) {
      case 'POST':
        try {
          console.log('Attempting to create agent with data:', req.body);
          const agent = await Agent.create(req.body);
          console.log('Agent created successfully:', agent);
          res.status(201).json({ success: true, data: agent });
        } catch (error) {
          console.error('Error creating agent:', error);
          res.status(400).json({ 
            success: false, 
            error: error.message,
            details: error.errors || error
          });
        }
        break;

      case 'GET':
        try {
          const agents = await Agent.find({});
          res.status(200).json({ success: true, data: agents });
        } catch (error) {
          console.error('Error fetching agents:', error);
          res.status(400).json({ success: false, error: error.message });
        }
        break;

      default:
        res.status(405).json({ success: false, error: 'Method not allowed' });
        break;
    }
  } catch (error) {
    console.error('Database connection error:', error);
    res.status(500).json({ success: false, error: 'Database connection failed' });
  }
}
