const db = require('../Config/database');


// Create a new user
exports.createUser = (req, res) => {
    const { Username, Phone_Number, Address } = req.body;
    const INSERT_USER_QUERY = `INSERT INTO User (Username, Phone_Number, Address) VALUES (?, ?, ?)`;
    db.query(INSERT_USER_QUERY, [Username, Phone_Number, Address], (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).send('User created successfully');
        }
    });
};

// Get all users
exports.getAllUsers = (req, res) => {
    const SELECT_ALL_USERS_QUERY = `SELECT * FROM User`;
    db.query(SELECT_ALL_USERS_QUERY, (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).json(result);
        }
    });
};

// Update a user by UserID
exports.updateUser = (req, res) => {
    const UserID = req.params.id;
    const { Username, Phone_Number, Address } = req.body;
    const UPDATE_USER_QUERY = `UPDATE User SET Username=?, Phone_Number=?, Address=? WHERE UserID=?`;
    db.query(UPDATE_USER_QUERY, [Username, Phone_Number, Address, UserID], (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send('User updated successfully');
        }
    });
};

// Delete a user by UserID
exports.deleteUser = (req, res) => {
    const UserID = req.params.id;
    const DELETE_USER_QUERY = `DELETE FROM User WHERE UserID=?`;
    db.query(DELETE_USER_QUERY, [UserID], (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send('User deleted successfully');
        }
    });
};