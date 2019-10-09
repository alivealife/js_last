var farms = [{
    farmer: '卡斯柏',
    dogs: ['張母是', '旁的'],
}, {
    farmer: '查理',
    dogs: ['皮皮'],
}];

var el = document.querySelector('.list');
var farmLen = farms.length;
var str = ''; //用來儲存 for 迴圈跑出的資料
for (var i = 0; i < farmLen; i++) {
    var content = '<li>' + farms[i].farmer + '</li>';
    //錯誤作法，因為 innerHTML的特性
    //會把前面的資料清空再渲染，因此這樣寫只會顯示最後一筆資料
    el.innerHTML = content;
    str += content; //每次回圈跑完之後存進 str 
}
el.innerHTML = str; //用 innerHTML 去插入 li 的內容並渲染

// 利用 createElement('em') 動態增加一個 <em> </em> 標籤
var addEl = document.createElement('em');
// 在 em 標籤裡加入字串
addEl.textContent = '我是被加入的';

//增加子節點在 Class = "title" 的標籤下
//appendChild 的內容會被放在原本的內容後
//所以原本的 <em>我是原本的 </em> 還會在
document.querySelector('.title').appendChild(addEl);


