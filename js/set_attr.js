// 使用 setAttribute 來動態改變連結的網址
var el = document.querySelector('.titleClass a');
el.setAttribute('href','http://google.com');
// 使用 getAttribute 來獲取連結的網址
el.getAttribute('href');

// 使用 setAttribute 動態增加 id='strId'
var el2 = document.querySelector('.str');
el2.setAttribute('id','strId');

var el3 = document.getElementById('main');
el3.innerHTML = '<h1>這是測試</h1>'

