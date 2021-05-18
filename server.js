const express = require('express');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(_dirname, 'public')))

// app.listenerCount(PORT, () => console.log('Now Listening'));
sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, () => console.log('Now Listening'))
});