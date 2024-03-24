const express = require("express");
const path = require("path");
const { sequelize } = require("./models");
const { rootRouter } = require("./routers");
const app = express();

//cài ứng dụng sử dụng kiểu json 
app.use(express.json());

//su dung router

app.use("/api/v1",rootRouter);

//cai static file 
const publicPathDirectory = path.join(__dirname, "./public");
app.use(express.static(publicPathDirectory));

//lang nghe su kien ket noi
app.listen(7000, async () => {
    console.log("app dang chay tren local host:7000");
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
});