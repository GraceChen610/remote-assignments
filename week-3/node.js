//導入express
const express = require('express');
const app = express();


// .get()處理對某個 URL 的 get 請求。
app.get('/', (req, res) => {
    res.send('<h1>Hello, My Server!</h1>');
});

//用監聽方法創建服務器port:3000
app.listen(3000,() =>{
    console.log('The application is running on localhost:3000!');
});