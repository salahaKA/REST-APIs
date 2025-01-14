const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./config/db');
const userRoutes = require('./routes/userRoutes');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/api', userRoutes);

// Connect to MySQL database
sequelize.sync()
    .then(() => {
        app
            .listen(3000, () => {
                console.log('Server is running on http://localhost:3000');
        
    })
    .catch((err) => {
        console.error("Unable to connect to database", err);
    });
});