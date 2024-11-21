const express = require('express');
const router = express.Router();

// POST route to create a team
router.post('/create', (req, res) => {
    const { name, description } = req.body;

    if (!name) {
        return res.status(400).json({ error: 'Team name is required!' });
    }

    res.status(201).json({ message: 'Team created successfully!', team: { name, description } });
});

module.exports = router;
