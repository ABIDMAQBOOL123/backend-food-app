const express = require('express');
const menuRouter = require('./Routes/menu');
const restaurantRouter = require('./Routes/restaurant'); 
const userRoute = require('./Routes/user')
const path = require("path");

const app = express();






// Routes
app.use('/api/menu', menuRouter);
app.use('/api/restaurant', restaurantRouter); 
app.use('/api/user', userRoute);


// Error handling middleware
// app.use(errorHandler);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
