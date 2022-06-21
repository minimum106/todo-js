/**
 * const、let等の変数宣言
 */

// // 以前はvarで宣言していた
// var val1  = "var変数";
// console.log(val1);

// //var変数は上書き可能
// val1  = "var変数を上書き";
// console.log(val1);

// // var変数は再宣言可能
// var val1  = "var変数を再宣言";
// console.log(val1);

// //let変数
// let val2 = "let変数";
// console.log(val2);

// //letは上書きが可能
// val2 = "let変数を上書き";
// console.log(val2);

// //let変数は再宣言不可能
// let val2 = "let変数を再宣言";
// console.log(val2);

//constを宣言

// const val3 = "const変数";
// console.log(val3);

// //constを宣言は上書き不可
// val3 = "const変数を上書き";
// console.log(val3);

//constを宣言は再宣言不可
// const val3 = "const変数を再定義";
// console.log(val3);

//constのオブジェクトはプロパティの変更が可能

// const val4 = {

//   name: "今村",
//   age:"38"
// }
// val4.name = "今村隆一"

// console.log(val4)

//constの配列はプロパティの変更が可能
// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monky");
// console.log(val5);

/**
 * テンプレート文字列
 */

// const name = "今村";
// const age = 38;

// //私の名前は今村です。38歳ですと表示。
// const massage1 = "私の名前は" + name + "です。年齢は" + age + "歳です。";
// console.log(massage1);

// //テンプレート文字列

// const massage2 = `私の名前は${name}です。年齢は${age}歳です。`;
// console.log(massage2);

/**
 * アロー関数
 */

// 従来の記載方法1
// function func1(str) {
//   return str;
// }

// 従来の記載方法2
// const func1 = function(str){
//   return str;
// }

/**
 *
 * アロー関数
 */

// const func2 = (str) => {
//   return str;
// };

// const func3 = (str) => str;

// const func4 = (num1, num2) => {
//   return num1 + num2;
// };

// console.log(func4(1, 2));

/**
 * 分割代入
 */

// const myProfile = {
//   name: "今村",
//   age: 38
// };

// const massage1 = `私の名前は${myProfile.name}です。年齢は${myProfile.age}歳です`;

// const { name, age } = myProfile;
// const massage2 = `私の名前は${name}です。年齢は${age}歳です`;

// console.log(massage2);

// const myProfile2 = ["今村", "38", "猫"];

// const [name, age] = myProfile2;
// const massage3 = `私の名前は${name}です。年齢は${age}歳です`;

// console.log(massage3);

/**
 * デフォルト値、引数など
 */

// const syaHello = (name = "ゲスト") => console.log(`こんにちわ。${name}さん。`);

// syaHello("今村");

/**
 * スプレット構文　...
 */

//配列の中身を展開
// const arr1 = [1, 2, 3];
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// //　配列の中身をまとめる;
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(arr3);

// //元の配列に影響を与えずに配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// arr6[0] = 0;
// console.log(arr6);
// console.log(arr4);

// const arr7 = [...arr4,...arr5];
// console.log(arr7);

//　イコールでは配列のポインタが与えられる
// const arr8 = arr4;
// arr8[0] = 0;
// console.log(arr4);
