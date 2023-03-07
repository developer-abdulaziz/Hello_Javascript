// var number = [12, 45, 54, 67, 44, 18];

//------------------
/*
number [3] = 55;
console.log(number);
*/


//------------------
// var indexOfNumber = number.indexOf(54);
// console.log(indexOfNumber);


//------------------
/*
var sortNumber = number.sort();
console.log(sortNumber);

var reverseNumber = number.reverse();
console.log(reverseNumber);
*/


//------------------
/*
 number.push(500);
console.log(number);

 number.pop();
console.log(number);
*/


//------------------
/*
 number.unshift(50);
console.log(number);

 number.shift();
console.log(number);
*/

//-----------
// var joinNumber = number.join();
// console.log(joinNumber);


//-----------
// var check =number.includes(54);
// console.log(check);




//--------------
/*
var number = [12, 45, 54, 67, 44, 18];
if(number[1] === 45){
   console.log('i am number');
}
else{
   console.log('i am not number');
}
*/


//-----------------------
/*
var number = [12, 45, 54, 67, 44, 18];
for(var i = 0; i < number.length; i++){
   var index = i;
   var element = number[index];
   console.log(index, element);
}
*/


//-----------------------
// sobcheye boro number ber koro
/*
function largestNumber(num){
   var largest = num[0];
   for(var i = 0; i < num.length; i++){
      var index = i;
      var element = num[index];
      if(element > largest){
         largest = element;
      }
   }
   return largest;
}
var number = [12, 45, 54, 67, 44, 18];
var large = largestNumber(number)
console.log(large);
*/



// sobcheye soto number ber koro
/*
function smallestNumber (numbers){
   var small = numbers[0];
   for(var i = 0; i < numbers.length; i++){
      var index = i;
      var element = numbers[index];
      // console.log(index, element);
      if(element < small){
         small = element;
      }
   }
   return small
}
var number = [100, 12, 45, 54, 67, 44, 18, 4];
var smallNumber = smallestNumber(number);
console.log(smallNumber);
*/
