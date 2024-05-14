const express = require('express');
const restaurantController = require('../Controllers/user');

const router = express.Router();

router.post('/users', userController.createUser);

// Get all users
router.get('/users', userController.getAllUsers);

// Update a user by UserID
router.put('/users/:id', userController.updateUser);

// Delete a user by UserID
router.delete('/users/:id', userController.deleteUser);

module.exports = router;

