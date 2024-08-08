//alert("hello world");


//var arr = [1,6,5,3,5];
//console.log(arr)
//arr.push(8) //add karta hai
//console.log(arr)
//arr.pop() //pop delete karta hai value last se
//console.log(arr)

//arr [8] = 100
//console.log(arr)

////arr.unshift("faizan")
//console.log(arr) // unshifr multiple value ko add karta hai

//arr.shift()
//console.log(arr)

//arr.splice(1,2 ,"faizan" ,"ahmed") // multiple value add kar sakhte hai
//console.log(arr)

//var arr2 = arr.slice(1,3);
//console.log(arr2)

//var srt =arr.sort();
//console.log(srt)
//var rev =srt.reverse();
//console.log(rev)



//let numbers = [5, 3, 8, 1, 2];

//numbers.sort((a, b) => a - b);
//console.log("Ascending:", numbers);

//numbers.sort((a, b) => b - a);
//console.log("Descending:", numbers);


//var cities = ["lahore", "islamabad", "okara", "gujraat"];

//function checkCity() {
 // var userInput = prompt("Enter a city:");
  //if (cities.includes(userInput)) {
    //console.log("Clear");
  //} else {
    //console.log("Unclear");
  //}
//}

//checkCity();
        // Yeh function addElement define karta hai jo ek array (arr) aur ek element (element) ko input ke roop mein leta hai aur us element ko array ke end mein add karta hai.

      //  Explanation
     //   bubbleSortAscending Function: Array ko ascending order mein sort karta hai.
     //   bubbleSortDescending Function: Array ko descending order mein sort karta hai.
     //   temp Variable: Swapping ke liye temporary storage.


//accesssing method

     var numbers = [1, 5, 7, 9, 2, 3, 6, 8];

 var a = numbers[0]; 
var b = numbers[1]; 
var c = numbers[2]; 
var d = numbers[3]; 
var e = numbers[4]; 
var f = numbers[5]; 
var g = numbers[6]; 
var h = numbers[7];

if (a > b) { [a, b] = [b, a]; }
if (a > c) { [a, c] = [c, a]; } 
if (a > d) { [a, d] = [d, a]; } 
if (a > e) { [a, e] = [e, a]; }
if (a > f) { [a, f] = [f, a]; } 
if (a > g) { [a, g] = [g, a]; } 
if (a > h) { [a, h] = [h, a]; }  

if (b > c) { [b, c] = [c, b]; }
if (b > d) { [b, d] = [d, b]; }
if (b > e) { [b, e] = [e, b]; }
if (b > f) { [b, f] = [f, b]; }
if (b > g) { [b, g] = [g, b]; }
if (b > h) { [b, h] = [h, b]; }



numbers = [a, b, c, d, e, f, g, h];


console.log("Ascending Order: " + numbers); 



// descendigating method

var mynumbers = [1, 5, 7, 9, 2, 3, 6, 8];

var a1 = mynumbers[0]; 
var b2 = mynumbers[1]; 
var   c3 = mynumbers[2]; 
var d4 = mynumbers[3]; 
var e5 = mynumbers[4]; 
var f6 = mynumbers[5]; 
var g7 = mynumbers[6]; 
var h8 = mynumbers[7]; 

 if (a1 < b2) { [a1, b2] = [b2, a1]; }
if (a1 < c3) { [a1, c3] = [c3, a1]; }
if (a1 < d4) { [a1, d4] = [d4, a1]; }
if (a1 < e5) { [a1, e5] = [e5, a1]; }
if (a1 < f6) { [a1, f6] = [f6, a1]; }
if (a1 < g7) { [a1, g7] = [g7, a1]; }
if (a1 < h8) { [a1, h8] = [h8, a1]; }

if (b2 < c3) { [b2, c3] = [c3, b2]; }
if (b2 < d4) { [b2, d4] = [d4, b2]; }
if (b2 < e5) { [b2, e5] = [e5, b2]; }
if (b2 < f6) { [b2, f6] = [f6, b2]; }
if (b2 < g7) { [b2, g7] = [g7, b2]; }
if (b2 < h8) { [b2, h8] = [h8, b2]; }



numbers = [a1, b2, c3, d4, e5, f6, g7, h8];
console.log("Descending Order:" + numbers); 
