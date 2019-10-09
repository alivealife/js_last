var farms = [{
    farmer: '卡斯柏',
    dogs: ['張母是', '旁的'],
}, {
    farmer: '查理',
    dogs: ['皮皮'],
}];

var el = document.querySelector('.list');
var farmLen = farms.length;
for(var i=0;i<farmLen;i++){
    // 利用 createElement 來增加 li 標籤
    var addEl = document.createElement('li');
    // 在增加的 li 標籤裡放入農夫的名字
    addEl.textContent = farms[i].farmer;
    // 將 <li>農夫名字</li> 放在原本的內容後
    el.appendChild(addEl);
    var dogLen = farms[i].dogs.length;
    for(var j=0;j<dogLen;j++){
        var addEl = document.createElement('li');
        addEl.textContent = farms[i].dogs[j];
        el.appendChild(addEl);
    }
}
