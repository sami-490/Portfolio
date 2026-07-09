const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Load environment variables
dotenv.config();

// Connect to database is called below

const app = express();
const PORT = process.env.PORT || 5000;

// Seed default admin
const Admin = require('./models/Admin');
const bcrypt = require('bcryptjs');
const seedAdmin = async () => {
  const adminExists = await Admin.findOne({ username: 'admin' });
  if (!adminExists) {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash('admin123', salt);
    await Admin.create({ username: 'admin', password: hashedPassword });
    console.log('Default admin seeded (username: admin, password: admin123)');
  }
};
connectDB().then(() => seedAdmin());

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import Routes
const authRoutes = require('./routes/authRoutes');
const projectsRoutes = require('./routes/projectsRoutes');
const skillsRoutes = require('./routes/skillsRoutes');
const experienceRoutes = require('./routes/experienceRoutes');
const contactRoutes = require('./routes/contactRoutes');
const blogsRoutes = require('./routes/blogsRoutes');
const testimonialsRoutes = require('./routes/testimonialsRoutes');
const certificatesRoutes = require('./routes/certificatesRoutes');
const subscriptionRoutes = require('./routes/subscriptionRoutes');

// Mount Routes
app.use('/api/auth', authRoutes);
app.use('/api/projects', projectsRoutes);
app.use('/api/skills', skillsRoutes);
app.use('/api/experience', experienceRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/blogs', blogsRoutes);
app.use('/api/testimonials', testimonialsRoutes);
app.use('/api/certificates', certificatesRoutes);
app.use('/api/subscribe', subscriptionRoutes);

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Backend is running' });
});

// Basic Error Handler (Can be replaced by the error.js middleware)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
