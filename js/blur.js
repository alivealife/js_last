// 變數
var countClick = document.querySelector('#countId');
var ham = document.getElementById('hamNumId');
var coke = document.getElementById('cokeNumId');
var warningText = document.querySelector('.warningText');

// 函式
// 計算價錢
function count() {
    var hamPrice = 50;
    var cokPrice = 20;
    var hamNum = parseInt(document.getElementById('hamNumId').value);
    var cokNum = parseInt(document.getElementById('cokeNumId').value);
    // 判斷是不是兩格都輸入 0 
    if (hamNum == 0 && cokNum == 0) {
        warningText.textContent = '今天不餓嗎？';
        document.getElementById('totalId').textContent = '';
        // 判斷是不是有負數
    } else if (hamNum <= 0 || cokNum <= 0) {
        warningText.textContent = '不能輸入負數喔！';
        document.getElementById('totalId').textContent = '';
        // 判斷有沒有確實輸入數字
    } else if (isNaN(hamNum) || isNaN(cokNum)) {
        warningText.textContent = '請確實輸入數字';
        document.getElementById('totalId').textContent = '';
        // 都沒問題就算出總價
    } else {
        var total = (hamNum * hamPrice) + (cokNum * cokPrice);
        document.getElementById('totalId').textContent = '總共 ' + total + ' 元';
        warningText.textContent = '';
    }
}


// 判斷離開 input 之後有沒有輸入東西在裡面
function checkContent(e) {
    // 取得那一格的值
    var str = e.target.value;
    // 判斷如果是空的就跳警告
    if (str == '') {
        warningText.textContent = '請輸入數字';
        document.getElementById('totalId').textContent = '';
    } else {
        warningText.textContent = '';
    }
}


// 監聽區
ham.addEventListener('blur', checkContent);
coke.addEventListener('blur', checkContent);
countClick.addEventListener('click', count);