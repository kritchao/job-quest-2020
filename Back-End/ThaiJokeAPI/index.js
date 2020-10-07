const express = require('express');
const app = express();
const cors = require('cors');
const db = require('./models/index');
const jokesRoutes = require('./routes/jokes')
const userRoute = require('./routes/users')

require('./config/passport/passport');

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', jokesRoutes);
app.use('/user', userRoute);

db.sequelize.sync().then(() => {
    app.listen(8000, () => {
        console.log(`Server is running at port 8000`);
    });
});