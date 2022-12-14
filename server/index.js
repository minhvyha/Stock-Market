const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(
	cors({
		origin: 'https://localhost:3000',
		methods: 'GET,POST,PUT,DELETE',
		credentials: true,
	})
);
app.use(express.json());

const port = process.env.PORT || 8080;

app.listen(port, () => {
	console.log('app listening');
});
