
/*
Problem:1  radianToDegree

ফাংশন নেম দিতে হবে radianToDegree । এই ফাংশনে প্যারামিটার হিসেবে নিবে রেডিয়ান (radian)। তারপর সেটাকে ডিগ্রীতে (degree) কনভার্ট করে কত ডিগ্রী (degree) হয় সেই সংখ্যা রিটার্ন করবে। রিটার্ন করার সময় তোমাকে দশমিক এর পর দুই ঘর রিটার্ন করতে হবে।

Sample Data:

Input : 10,             25,               199

Output : 572.96,       1432.39,          11401.86



// ================================================================================================================================

Problem:2  isJavaScriptFile

ফাংশন নেম দিতে হবে isJavaScriptFile । এই ফাংশনে প্যারামিটার হিসেবে নিবে একটি স্ট্রিং(String) যেটি হবে একটি ফাইল নেম (যেমনঃ ‘index.js’)। যদি এটি জাভাস্ক্রিপ্ট ফাইল হয় তোমাকে true রিটার্ন করতে হবে আর যদি না হয় তাহলে false রিটার্ন করতে হবে ।


Sample Data

Input : 'app.js',       'js.png',           'image.js.png',          'image.jpg.js'

Output : true,            false,              false,                    true

//========================================================================================================================================

Problem 3: oilPrice

ফাংশন নেম দিতে হবে oilPrice। এই ফাংশন তিনটা প্যারামিটার নিবে।

প্রতি লিটার ডিজেলের এর দাম – 114 টাকা

প্রতি লিটার পেট্রোল এর দাম – 130 টাকা

প্রতি লিটার অকটেনের এর দাম – 135 টাকা


এখন সে যদি বিভিন্ন লিটারের ডিজেল,পেট্রোল,অকটেনের অর্ডার দেয় তাহলে টোটাল কত টাকা খরচ হবে হলো সেই সংখ্যা রিটার্ন করতে হবে।

.

Sample Data

Input

Output

1, 1, 1

30, 20, 10

1,0,2

0,2,3

379

7370

384

665



Problem 4: publicBusFare


একটি বড় সংখ্যাক মানুষজন পিকনিকে যাবে। বাসের সংখ্যা মানুষের সংখার উপর নির্ভর করবে। ধরো আমাদের বাস ও মাইক্রো আছে ।প্রতিটি বাসের ক্যাপাসিটি ৫০ জন এবং প্রতিটি মাইক্রবাসের ক্যাপাসিটি ১১ জন এবং পাবলিক বাসের প্রতিটি টিকেটের মূল্য ২৫০ টাকা করে। এখন তোমাকে একটি ফাংশন লিখতে হবে যার নাম হবে publicBusFare যেটি প্যরামিটার হিসেবে একটা সংখ্যা (কতজন যাবে )  নিবে । মোট কতটাকা পাবলিক বাস ফেয়ারে যাবে সেটি তোমাকে রিটার্ন করবে ।


উদাহরণ১ঃ

 যদি ১১৭ জন মানুষ পিকনিকে যায় তাহলে আমাদের বাস লাগবে ২ টি ও মাইক্রোবাস লাগবে ১ টি । বাকি মানুষ পাবলিক বাসে যাবে। এই কয়জন মানুষগুলোর জন্য পাবলিক বাসের ভাড়া মোট কত হবে সেটি রিটার্ন করতে হবে।

উদাহরণ২ঃ

 যদি ২৩৫ জন মানুষ পিকনিকে যায় তাহলে আমাদের বাস লাগবে ৪ টি ও মাইক্রোবাস লাগবে ৩ টি এবং বাকি মানুষ পাবলিক বাসে যাবে। এই কয়জন মানুষগুলোর জন্য পাবলিক বাসের ভাড়া মোট কত হবে সেটি রিটার্ন করতে হবে।


Sample Data

Input

Output

50

55

112

235

365

0

1250

250

500

1000


Problem 5: isBestFriend

তোমাকে একটি ফাংশন লিখতে হবে isBestFriend যেটি প্যরামিটার হিসেবে দুইটি অবজেক্ট নিবে । তোমাকে অবজেক্ট দুইটি নিয়ে দেখতে হবে এরা দুইজন একে অপরের বেস্টফ্রেন্ড কিনা । যদি বেস্ট ফ্রেন্ড হয় তাহলে true রিটার্ন করবে , না হলে false রিটার্ন করবে ।

Sample Data:

Input

Output

{ name: "abul", friend: "babul" },

{ name: "babul", friend: "abul" }


{ name: "abul", friend: "kabul" },

{ name: "kabul", friend: "sabul" }


{ name: "doe", friend: "alex" },

{ name: "john", friend: "doe" }

true

false

false


কিছু কমন প্রশ্ন:

প্রশ্ন-১: ফ্যাংশন এর ভিতরে কি console.log লিখবো নাকি রিটার্ন করবো?

উত্তর: তুমি চাইলে তোমার নিজের জন্য বা বুঝার জন্য console.log লিখতে পারো। সেটা অপশনাল। তবে ফাংশনের রেজাল্ট অবশ্যই রিটার্ন করতে হবে। সেটা console.log করলে কাজ হবে না।


প্রশ্ন-২: সবসময় কি সংখ্যা বা স্ট্রিং রিটার্ন করবো।

উত্তর: সব প্যারামিটার ঠিক থাকলে সঠিক সংখ্যা বা সঠিক ভ্যালু রিটার্ন করবে। যদি এক বা একাধিক ইনপুট খারাপ থাকে তাহলে কোন error স্ট্রিং হিসেবে রিটার্ন করে দিবে।


যদি সংখ্যা রিটার্ন করার কথা সেখানে সংখ্যা রিটার্ন করবে। যদি বুলিয়ান ভ রিটার্ন করার কথা সেখানে true/false রিটার্ন করবে।


অর্থাৎ টোটাল খরচ কত হবে সেখানে জাস্ট সংখ্যা রিটার্ন করবে। সেখানে জোর করে সংখ্যাকে স্ট্রিং এ কনভার্ট করে। বা your total cost is 200 taka এমন করা যাবে না। জাস্ট 200 রিটার্ন করে দিবে।

প্রশ্ন-৩: ফাংশনের বাইরে কি console.log করতে হবে?

উত্তর: ফাংশনের বাইরে console.log লেখা বা না লেখা অপশনাল। তুমি চাইলে তোমার কোড চেক করার জন্য। বা যে রেজাল্ট দেয়ার কথা সেটা ঠিক মতো দিচ্ছে কিনা সেটা ভেরিফাই করার জন্য ওই ফাংশনকে কল করে তার রিটার্ন যে ভ্যালু আছে সেটা console.log করে চেক করতে পারো। তবে আমাদের এসাইনমেন্ট এর জন্য এইটা করা জরুরি না। আমরা শুধু মেইন ফাংশনটা নিয়ে সেটাকে চালিয়ে দেখবো ঠিকমতো কাজ করছে কিনা।


প্রশ্ন-৪: var ব্যবহার করা যাবে?

উত্তর: না। let/const ব্যবহার কর।

প্রশ্ন-৫: ইউজারের কাছ থেকে কোন ইনপুট নিতে হবে? [ IMPORTANT ]

উত্তর: এসাইনমেন্ট এর জন্য ইউজারের কাছ থেকে কোন ইনপুট নেয়া লাগবে না। জাস্ট ফাংশন লিখলেই হবে। আমরা তোমার কোড নিয়ে সেটার ফাংশনকে কল করবো।


তুমি চেক করার সময় ইনপুট প্যারামিটার দিয়ে চেক করতে পারো। তারপর চেক করা শেষ হলে সেই কোড অবশ্যই কমেন্ট করে ফেলতে হবে অথবা মুছেই ফেলতে পার।আমরা শুধু ফাংশনের ভিতরে ঠিক আছে কিনা দেখব । তাই সাবমিট কড়ার সময় তোমাদের console.log গুলো অবশ্যই মুছে ফেলবা।

 ফাংশনকে আমরা বিভিন্ন সংখ্যা -- ভালো এবং খারাপ সংখ্যায় দিয়ে কল করবো। তখন যদি ঠিক রেজাল্ট দেয় তাহলেই হবে। তোমাদের সুবিধার্থে নিচে একটি ডেমো দেওয়া হলঃ



// ========= problem 1

function makeDouble(number){

 // do not write anything like this, just return the result

 return "Problem one result: " + number* 2;

}

const result = makeDouble(5);

// remove any console.log() or function call like this form here👆


CORRECT FORMAT

function makeDouble(number) {

 return number * 2;

}

প্রশ্ন-৬: আমি কিছু বুঝতেছি না কি করবো?

উত্তর: প্রব্লেমগুলা আলাদা আলাদা ভাবে চিন্তা করো। আমাদের মডিউলগুলো ঠিক মতো দেখলে মোটামুটি এই প্রব্লেমগুলা সলভ করে ফেলতে পারবে।

জাস্ট যে যে প্রবলেম সল্ভ করতে বলা হয়েছে সেগুলা একটু ধীরে ধীরে বুঝার চেষ্টা করো। দেখো বুঝতে পারো কিনা। হতে পারে আমাদের মডিউল এর কোন একটি ভিডিও এর সাথে ডাইরেক্ট বা ইনডাইরেক্ট মিল আছে। তাহলে সেই জিনিস খুঁজে বের করে তারপর সেটা অনুসারে করার চেষ্টা করো।


প্রশ্ন-৭: বোনাস মার্কসের জন্য কি করতে হবে

উত্তর: এসাইনমেন্ট এর ২য় ভিডিও (২৩.২) ভালো করে দেখো।
*/







// ----------------------------------------- problem - 01 --------------------------------------------- //

/*
    1rad * 57.2958 deg
*/

/*
 function radianToDegree(radian) {
    //error message for bonus part starts

    if (typeof radian !== 'number') {
        return 'please enter a number';
    }

    // radian to degree convert
    let radianConvert = radian * 57.2958;
    let twoNumber = radianConvert.toFixed(2);
    let output = parseFloat(twoNumber);
    return output;
};

// the radian input number 01
let number1 = 10;
let radianNumber = radianToDegree(number1);
console.log('radian output number - 01: ', radianNumber);

// the radian input number 02
let number2 = 25;
let radianNumber2 = radianToDegree(number2);
console.log('radian output number - 02: ', radianNumber2);

// the radian input number 03
let number3 = 199;
let radianNumber3 = radianToDegree(number3);
console.log('radian output number - 03: ', radianNumber3);
 */


// ----------------------------------------- Problem:2  isJavaScriptFile  --------------------------------------------- //

/*
function isJavaScriptFile(String) {

    // check the file name
    if (String.endsWith('.js')) {
        return true;
    }

    // get the error massage
    else {
        console.log('please enter the file name');
        return false;
    }
}


// put the file name 01
let file1 = 'app.js';
let output01 = isJavaScriptFile(file1);
console.log(output01);

// put the file name 02
let file02 = 'js.png';
let output02 = isJavaScriptFile(file02);
console.log(output02);

// put the file name 03
let file03 = 'image.js.png';
let output03 = isJavaScriptFile(file03);
console.log(output03);

// put the file name 04
let file04 = 'image.jpg.js';
let output04 = isJavaScriptFile(file04);
console.log(output04);
 */

/* ==================================== Problem 3: oilPrice ========================== */


//  function oilPrice(diesel, petrol, octen) {

//     /*
//     // Error massege for bonus mark
//     if (typeof diesel !== 'number') {
//         return true;
//     }
//     else if (typeof petrol !== 'number') {
//         return true;
//     }
//     else if (typeof octen !== 'number') {
//         return true;
//     }
//     else {
//         return 'Please Enter a Oil price';
//     }
//     */

//     // oil fixed price
//     let dieselPrice = 114;
//     let petrolPrice = 130;
//     let octenPrice = 135;

//     // oil price Calculation
//     let perDeieselPrice = dieselPrice * diesel;
//     let perPetrolPrice = petrolPrice * petrol;
//     let perOctenPrice = octenPrice * octen;

//     // get the total oil price
//     let totalPrice = perDeieselPrice + perPetrolPrice + perOctenPrice;
//     return totalPrice;
// }

// //------------ oil quantity part 01 -------------
// let dieselQuantity01 = 1;
// let petrolQuantity01 = 1;
// let octenQuantity01 = 1;

// // final output
// let totalCosting01 = oilPrice(dieselQuantity01, petrolQuantity01, octenQuantity01);
// console.log('get the total oil price one: ', totalCosting01);


// //---------- oil quantity part 02 -----------
// let dieselQuantity02 = 30;
// let petrolQuantity02 = 20;
// let octenQuantity02 = 10;

// // final output
// let totalCosting02 = oilPrice(dieselQuantity02, petrolQuantity02, octenQuantity02);
// console.log('get the total oil price two: ', totalCosting02);


// // ------------- oil quantity part 03 ---------
// let dieselQuantity03 = 1;
// let petrolQuantity03 = 0;
// let octenQuantity03 = 2;

// // final output
// let totalCosting03 = oilPrice(dieselQuantity03, petrolQuantity03, octenQuantity03);
// console.log('get the total oil price three: ', totalCosting03);


// // ---------- oil quantity part 04 ----------
// let dieselQuantity04 = 0;
// let petrolQuantity04 = 2;
// let octenQuantity04 = 3;

// // final output
// let totalCosting04 = oilPrice(dieselQuantity04, petrolQuantity04, octenQuantity04);
// console.log('get the total oil price four: ', totalCosting04);



/* ==================================== Problem 4: publicBusFare ========================== */

/* 
function publicBusFare(people) {
    // every car capacity person fixed
    const busCapacity = 50;
    const microCapacity = 11;

    // rest people will go by public bus
    const busRemaining = people % busCapacity;
    const microRemainig = busRemaining % microCapacity;

    // per person ticket price
    const publicBusPerPerson = 250;

    // per per ticket price calculation
    const publicBusCosting = publicBusPerPerson * microRemainig;
    return publicBusCosting;
}

//  person will go to car
const man1 = 65;
const totalPrice1 = publicBusFare(man1);
console.log('public bus fear total costing: ', totalPrice1);

//  person will go to car
const man2 = 129;
const totalPrice2 = publicBusFare(man2);
console.log('public bus fear total costing: ', totalPrice2);

//  person will go to car
const man3 = 263;
const totalPrice3 = publicBusFare(man3);
console.log('public bus fear total costing: ', totalPrice3);
 */


/* ==================================== Problem 5: isBestFriend ========================== */


/* 
function isBestFriend(object1, object2) {
    // object check
    if (object1.name == object2.friend && object1.friend == object2.name) {
        return true;
    }
    else {
        return false;
    }
}

const part1 = { name: 'doe', friend: 'alex' };
const part2 = { name: 'alex', friend: 'doe' };
const result = isBestFriend(part1, part2);
console.log(result);

 */






