const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');

async function setup() {
  try {
    const account = await nodemailer.createTestAccount();
    console.log('Credentials obtained!');
    
    const envPath = path.join(__dirname, '../.env');
    let envContent = fs.readFileSync(envPath, 'utf8');
    
    envContent = envContent.replace(/EMAIL_HOST=.*/g, `EMAIL_HOST=smtp.ethereal.email`);
    envContent = envContent.replace(/EMAIL_PORT=.*/g, `EMAIL_PORT=587`);
    envContent = envContent.replace(/EMAIL_USER=.*/g, `EMAIL_USER=${account.user}`);
    envContent = envContent.replace(/EMAIL_PASS=.*/g, `EMAIL_PASS=${account.pass}`);
    
    fs.writeFileSync(envPath, envContent);
    console.log('Updated .env file with Ethereal email credentials.');
  } catch (error) {
    console.error('Error setting up ethereal email:', error);
  }
}

setup();
