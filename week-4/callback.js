//Assignment 1: Callback Function
/**
function delayedResult(n1, n2, delayTime, callback){
    // your code here
    window.setTimeout( 
        function(){
            result = n1 + n2 ;
            console.log(result);
            window.alert(result);
        }
        , delayTime
    );
}
 */

function delayedResult(n1, n2, delayTime, callback){
    // your code here
    window.setTimeout(  
        function(){ 
            result = n1 + n2;
            callback(result);
        }
        , delayTime
    );
};

delayedResult(4, 5, 3000, function(result){
    console.log(result);
}); // 9 (4+5) will be shown in the console after 3 seconds

delayedResult(-5, 10, 2000, function(result){
    window.alert(result);
}); // 5 (-5+10) will be shown in an alert dialog after 2 seconds



//Assignment 2: Callback Function and Advanced HTML DOM
function ajax(src, callback){
    // your code here
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4){
            const jsonToStr = JSON.parse(xhr.responseText);
            callback(jsonToStr);
        }
    }
    xhr.open("GET",src);
    xhr.send();
};

function render(jsonToStr){
// your code here. // document.createElement() and appendChild() are preferred. // No innerHTML or something alike
    for(let i = 0; i<jsonToStr.length; i++){
        let name = jsonToStr[i].name;
        let price = jsonToStr[i].price;
        let description = jsonToStr[i].description;
        const tr = document.querySelectorAll("tr")[i];
        const td = document.createElement("td");
        let text = document.createTextNode(`name: ${name}, price: ${price}, description: ${description}`);
        tr.appendChild(td).appendChild(text);
    }
}

ajax(
"https://appworks-school.github.io/Remote-Aassigiment-Data/products",
function(response){
    render(response);
}); // you should get product information in JSON format and render data in the page
    