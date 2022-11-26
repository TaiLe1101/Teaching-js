/*
    - +     --> "Cộng"
    - -     --> "Trừ"
    - *     --> "Nhân"
    - **    --> "Lũy thừa"
    - /     --> "Chia"
    - %     --> "Chia lấy dư"
    - ++    --> "Tăng một giá trị số"
    - --    --> "Giảm một giá trị số"
*/

// Cộng

var a = 1;
var b = 2;

var c = a + b; // c = 3

// Trừ

var a = 1;
var b = 2;

var c = a - b; // c = -1

// Nhân

var a = 1;
var b = 2;

var c = a * b; // c = 2

// Lũy thừa

var a = 1;
var b = 2;

var c = a ** b; // c = 1

// Chia

var a = 6;
var b = 2;

var c = a / b; // c = 3

// Chia Lấy Dư

var a = 6;
var b = 2;

var c = a + b; // c = 0 --> Vì 6 / 3 = 2 dư 0

// Toán tử ++

var a = 1;

a++; // Tương đương:  a = a + 1

console.log(a); // => a = 2

// Toán tử --

var a = 1;

a--; // Tương đương:  a = a - 1

console.log(a); // => a = 0
