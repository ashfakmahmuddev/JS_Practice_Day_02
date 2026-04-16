// Arithmetic Operators :-

// Operator        কাজ               উদাহরণ       ফলাফল
//    +       যোগ (Addition)          5 + 3          8
//    -     বিয়োগ (Subtraction)       10 - 4          6
//    *     গুণ (Multiplication)       6 * 7          42
//    /       ভাগ (Division)          15 / 3          5
//    %      Modulus (ভাগশেষ)         17 % 5          2
//    **       Power (ঘাত)             2 ** 3         8


// Comparison Operators :-

// Operator             অর্থ                 উদাহরণ        ফলাফল
//    ==        সমান (Loose equality)      "5" == 5        true
//    ===     সমান + একই টাইপ (Strict)    "5" === 5       false
//    !=             সমান না                 5 != 3         true
//    !==      সমান না + টাইপ চেক,         "5" !== 5       true
//    >              বড় কিনা                 10 > 5         true
//    <              ছোট কিনা                3 < 7          true
//    >=          বড় অথবা সমান              5 >= 5         true
//    <=          ছোট অথবা সমান             4 <= 6         true


// Logical Operators (লজিক্যাল অপারেটর):

// && → AND (দুটোই সত্যি হলে true)
// || → OR (যেকোনো একটা সত্যি হলেই true)
// !  → NOT (সত্যি → মিথ্যা, মিথ্যা → সত্যি)


let num1 = 25;
let num2 = 4;

console.log("Sum:", num1 + num2);
console.log("Difference:", num1 - num2);
console.log("Product:", num1 * num2);
console.log("Division:", num1 / num2);
console.log("Remainder:", num1 % num2);

let age = 20;
let hasLicense = true;

console.log(age >= 18 && hasLicense);  
console.log(age >= 18 || hasLicense);   


let marks = 85;

if (marks >= 80) {
    console.log("Grade: A+");
} else if (marks >= 70) {
    console.log("Grade: A");
} else if (marks >= 60) {
    console.log("Grade: A-");
} else {
    console.log("Grade: Fail");
}



let x = 45;
let y = 78;
let z = 32;

if (x > y && x > z) {
    console.log("Largest:", x);
} else if (y > x && y > z) {
    console.log("Largest:", y);
} else {
    console.log("Largest:", z);
}