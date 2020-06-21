const express = require('express');
const cors = require('cors')
const connectDB = require('./config/DB');

const app = express();
connectDB();

// Middleware
app.use(cors())
app.use(express.json());


app.get('/', (req, res) => { res.send('API Running') });
app.use('/api_v1/products', require('./routes/api/products'));





const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on Port ${PORT}`))