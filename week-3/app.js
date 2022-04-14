//導入express
const express = require('express');
const app = express();
app.set('view engine', 'pug');
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));


//Assignment 1:
app.get('/', (req, res) => {
    res.send('<h1>Hello, My Server!</h1>');
});

//Assignment 2:
app.get('/getData', (req, res) => {
    const { number } = req.query;
    if ( number === undefined){
        //getData，show the "Lack of Parameter" message
        res.render('getData',{ ans: "Lack of Parameter"});
    }else{
        if((/(^[0-9]*[1-9][0-9]*$)/.test(number))){  //判斷是正整數
            //getData?number=正整數，得到計算結果
            const typeNum = parseInt(number);
            function sum(n){
                if(n==1) return 1;
                return sum(n-1)+n;
            }
            const ans = sum(typeNum)
            res.render('getData',{ ans: ans});
    
        }else{
            //getData?number=xyz，show the "Wrong Parameter" message 
            res.render('getData',{ ans: "Wrong Parameter"});
        }
    }

});


//用監聽方法創建服務器port:3000
app.listen(3000,() =>{
    console.log('The application is running on localhost:3000!');
});