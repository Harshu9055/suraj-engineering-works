// app.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/surajengineering', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Define User schema and model
const userSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    age: Number,
    gender: String,
    role: String
});

const User = mongoose.model('User', userSchema);

// Fetch profile
app.get('/api/profile', async (req, res) => {
    try {
        const user = await User.findOne(); // Fetch the first user for demo
        res.json(user);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// Update profile
app.post('/api/updateProfile', async (req, res) => {
    const { name, phone, email, age, gender, role } = req.body;
    try {
        let user = await User.findOne();
        if (!user) {
            user = new User({ name, phone, email, age, gender, role });
        } else {
            Object.assign(user, { name, phone, email, age, gender, role });
        }
        await user.save();
        res.json({ message: 'Profile updated successfully!' });
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// Start the server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
