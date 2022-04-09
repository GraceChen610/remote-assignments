//導入express
const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));



app.get('/', (req, res) => {
    res.send('<h1>Hello, My Server!</h1>');
});

app.get('/getData', (req, res) => {
    res.send("Lack of Parameter");
});


// app.get('/getData/:num', (req, res) => {
//     let { num } = req.params;
//     let number = parseInt(num); //type number
//     function sum(n){
//         if(n==1) return 1;
//         return sum(n-1)+n;
//     }
//     res.send({ans:sum(number)});
// });

//用監聽方法創建服務器port:3000
app.listen(3000,() =>{
    console.log('The application is running on localhost:3000!');
});