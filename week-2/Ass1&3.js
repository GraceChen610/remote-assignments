//Assignment 1: Function and Array
function max(numbers){
    // your code here, for-loop method preferred

    let ans = numbers[0];
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] > ans){
            ans = numbers[i]
        }
    }
    console.log(ans);
}

max([1, 2, 4, 5]); // result to 5
max([5, 2, 7, 1, 6]); // result to 7

console.log("-----------------------------")

//Assignment 3: Function, Array, and Object
function avg(data){
    // your code here

    let sum = 0;
    for( i = 0 ; i < data.products.length ; i++){

        sum += data.products[i].price
    }

    ans = sum/data.products.length;
    console.log(ans);
}
    avg({
        size:3,
        products:[
            {             
                name:"Product 1",
                price:100
            },

            {
                name:"Product 2",
                price:700
            },

            {
                name:"Product 3",
                price:250
            }
        ]
    }); // show the average price of all products