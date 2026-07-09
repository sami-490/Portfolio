const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, 'backend', 'src');

const filesToCreate = {
  'config/db.js': `const mongoose = require('mongoose');\n\nconst connectDB = async () => {\n  try {\n    await mongoose.connect(process.env.MONGO_URI);\n    console.log('MongoDB Connected');\n  } catch (error) {\n    console.error('MongoDB connection error:', error);\n    process.exit(1);\n  }\n};\nmodule.exports = connectDB;`,
  'config/cloudinary.js': `// Cloudinary config placeholder`,
  'config/email.js': `// Email config placeholder`,
  
  'middleware/auth.js': `// Auth middleware`,
  'middleware/validation.js': `// Validation middleware`,
  'middleware/error.js': `// Error handler middleware`,
  'middleware/logging.js': `// Logging middleware`,
  
  ...['User', 'Project', 'Skill', 'Experience', 'Certificate', 'Testimonial', 'Blog', 'Message', 'Settings'].reduce((acc, model) => {
    acc[`models/${model}.js`] = `const mongoose = require('mongoose');\n\nconst ${model.toLowerCase()}Schema = new mongoose.Schema({},\n{ timestamps: true });\n\nmodule.exports = mongoose.model('${model}', ${model.toLowerCase()}Schema);`;
    return acc;
  }, {}),
  
  ...['auth', 'projects', 'skills', 'experience', 'contact', 'blogs', 'testimonials', 'certificates'].reduce((acc, name) => {
    acc[`controllers/${name}Controller.js`] = `// ${name} controller\nexports.getAll = async (req, res) => { res.json({ message: 'Get all' }); };\nexports.getOne = async (req, res) => { res.json({ message: 'Get one' }); };\nexports.create = async (req, res) => { res.json({ message: 'Create' }); };\nexports.update = async (req, res) => { res.json({ message: 'Update' }); };\nexports.delete = async (req, res) => { res.json({ message: 'Delete' }); };`;
    return acc;
  }, {}),
  
  ...['auth', 'projects', 'skills', 'experience', 'contact', 'blogs', 'testimonials', 'certificates'].reduce((acc, name) => {
    acc[`routes/${name}Routes.js`] = `const express = require('express');\nconst router = express.Router();\nconst controller = require('../controllers/${name}Controller');\n\nrouter.get('/', controller.getAll);\nrouter.get('/:id', controller.getOne);\nrouter.post('/', controller.create);\nrouter.put('/:id', controller.update);\nrouter.delete('/:id', controller.delete);\n\nmodule.exports = router;`;
    return acc;
  }, {})
};

for (const [filePath, content] of Object.entries(filesToCreate)) {
  const fullPath = path.join(baseDir, filePath);
  const dir = path.dirname(fullPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(fullPath, content);
}
console.log('Backend files generated successfully!');
