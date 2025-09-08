const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MongoDB connection
let db;
const client = new MongoClient(process.env.MONGODB_URI);

async function connectToDatabase() {
  try {
    await client.connect();
    db = client.db(process.env.DB_NAME);
    console.log('Connected to MongoDB successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
}

// Store contact form submissions
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    
    // Validate required fields
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ 
        success: false, 
        message: 'All fields are required' 
      });
    }

    // Create contact entry
    const contactEntry = {
      name,
      email,
      subject,
      message,
      timestamp: new Date(),
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
      createdAt: new Date()
    };

    // Insert into MongoDB
    const result = await db.collection('contacts').insertOne(contactEntry);

    console.log('New contact submission:', contactEntry);

    res.json({ 
      success: true, 
      message: 'Thank you for your message! I will get back to you soon.',
      id: result.insertedId
    });

  } catch (error) {
    console.error('Error saving contact:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error. Please try again later.' 
    });
  }
});

// Get all contacts (for admin purposes)
app.get('/api/contacts', async (req, res) => {
  try {
    const contacts = await db.collection('contacts').find({}).sort({ createdAt: -1 }).toArray();
    res.json(contacts);
  } catch (error) {
    console.error('Error reading contacts:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error' 
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Portfolio backend is running with MongoDB',
    timestamp: new Date().toISOString(),
    database: 'Connected'
  });
});

// Start server after database connection
connectToDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(`Portfolio backend server running on port ${PORT}`);
    console.log(`Health check: http://localhost:${PORT}/api/health`);
    console.log('MongoDB connected and ready to store contact submissions');
  });
});

// Graceful shutdown
process.on('SIGINT', async () => {
  console.log('Shutting down gracefully...');
  await client.close();
  process.exit(0);
});