const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cors = require('cors');
const methodOverride = require('method-override');
const handlebars = require('express-handlebars');
const route = require('./routes');
const db = require('./configs/db.config');
const dotenv = require('dotenv');
dotenv.config()
// Connect to db
db.connectDatabase();

const app = express();
const port = process.env.PORT || 3333;
// Cấp quyền cho phép sử dụng PUT DELETE
app.use(methodOverride('_method'))

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json()); // gửi từ code javascript
app.use(express.static(path.join(__dirname, 'public'))); // Cấp quyền cho phép người dùng có thể xem được những thứ trong folder public
app.use(express.urlencoded({
    extended: true
}));
//Template engine ( đặt tên cho file)
app.engine('hbs', handlebars({
    extname: ".hbs",
    helpers: {
        sum: (a, b) => a + b
    }
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

//Routes init
route(app);

app.get("/api", (req, res) => {
    res.json({
        message: "Hello Hiếu" 
    })
})

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})