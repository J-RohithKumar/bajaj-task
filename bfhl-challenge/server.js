const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// POST endpoint
app.post('/bfhl', (req, res) => {
    const { data } = req.body;
    const user_id = "your_full_name_ddmmyyyy";
    const email = "your_email@example.com";
    const roll_number = "your_roll_number";

    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => isNaN(item));
    const highest_alphabet = alphabets.length ? [alphabets.sort().pop()] : [];

    res.json({
        "is_success": true, 
        "user_id":user_id,
        "email":email,
        "roll_number":roll_number,
        "numbers":numbers,
        "alphabets":alphabets,
        "highest_alphabet":highest_alphabet
    });
});

// GET endpoint
app.get('/bfhl', (req, res) => {
    res.json({ operation_code: 1 });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
