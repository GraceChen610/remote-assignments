//Assignment 1: 
function delayedResult(n1, n2, delayTime, callback){
    // your code here
    window.setTimeout( 
        (result) => {
            result = n1 + n2 ;
            console.log(result);
            window.alert(result);
        }
        , delayTime
    );
}

delayedResult(4, 5, 3000, function(result){
    console.log(result);
}); // 9 (4+5) will be shown in the console after 3 seconds

delayedResult(-5, 10, 2000, function(result){
    window.alert(result);
}); // 5 (-5+10) will be shown in an alert dialog after 2 seconds