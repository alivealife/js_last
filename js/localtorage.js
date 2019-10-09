// 練習

// // 定義一個變數
// var str = 'Tom';
// // 將 localStorage 的 Key 設為 myName ，Value 設為變數 str
// localStorage.setItem('myName',str);

// console.log(localStorage.getItem('myName'));

// 102 節練習
// var text = document.querySelector('.textClass');
// var btn = document.querySelector('.btnClass');
// function setText(e){
//     localStorage.setItem('myName',text.value);
// }

// btn.addEventListener('click',setText);

// 103 節練習
// 定義一個陣列(JSON 格式)
var country = [{
    farmer: '卡斯柏'
}];
// 將陣列轉換為字串
var countryString = JSON.stringify(country);

// 將字串存入 localStorage 
localStorage.setItem('countryItem',countryString);

// 取出 localStorage 的資料
var getData = localStorage.getItem('countryItem');

// 將取出的資料轉換為陣列格式
var getDataAry = JSON.parse(getData);

