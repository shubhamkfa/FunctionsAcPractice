//Functions in JS

//Blocks of code that perform a specifix task can be invoked whenever needed

/*

function sum(a,b){
    return a+b;
     
}

var a = sum (12,5);
console.log(a)

*/
/*
//4.45 min Apana clg

function myFunction(){

    console.log("Shubham");
    console.log("Shinde");
}

myFunction(); //Invoke here 
myFunction();
myFunction();
myFunction();


//we need to do redundancy - code reapetation 

*/
/*
function myFunction1(msg){ //parameter--> Input
console.log(msg*n);
}

myFunction1("I love Javascript",100); //argument

//nan - Not a Number

*/

/*

//function --> 2 numbers, sum

function sum(a,b){
    console.log(a+b)
}

sum(10,52)
*/


/*
//Return - function can return a value ( values ko return bhejna return keywork only return one value at one time )

function sum(a,b){
    // local variable --> scope ( function paramerters ar local varible of fucntion and they are block scope limited to function as its local variable)
     s=a+b;
     return s;
     console.log("after return") // after return nothing will executed
}

let val= sum(10,52)
console.log(val);

*/



//Arrow function - compact way of writing a function 


// normal
// function sum(a,b){
//    return a*b;
   
// }

// let val= sum(10,52)
// console.log(val);

// same converted to arrow 

// const arrowSum =(a, b) => {
//     console.log(a + b);
// };

// const sum=arrowSum(5,10);



// const mul= (a,b) =>{
//     console.log(a * b);
// };

// const multi=mul(12,25);


// const mul= (a , b) => {
//     return(a * b);
// };

// const multi=mul(2,3);
// console.log(multi);




// const printhello = () => console.log("Hello shubham");

// const hello=printhello();
// console.log(hello);




//--------------------------------------------
//Practice Questions
/*

//Q1. Create a function using the function keywordd the takes a String as an argument & returns the number of vowels in the string 


function countVowels(str) {
    //Apanacollege,count=2
        let count=0;
    for (const char of str) {
        if (char==="a" || char ==="e" || char ==="i" || char==="o" || char==="u") {
            count++; 
        }
            // console.log("This is an vowels");
        // } else{
        //     console.log("This is not an vowels");
        // }
        
    }
    console.log(count);
    // return count;


};
//with calling function
countVowels("shubham");

//with rreturn
// const vo=countVowels("aeioudfgghaaee");
// console.log(vo);

*/

// Q2- Create a arrow Function takes a String as an argument & returns the number of vowels in the string 


const countvow = (str)=> {
    let count=0;
    for (const char of str) {
        if (char==="a" || char ==="e" || char ==="i" || char==="o" || char==="u") {
            count++; 
        }
    }
        return count;
};


const ret=countvow("abscdj");
console.log(ret);