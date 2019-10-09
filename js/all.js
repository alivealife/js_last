// 點擊 id 為 countId 的元件時執行 function
document.getElementById('countId').onclick = function () {
    // 利用 parseInt 將 value 取出的字串轉換成數字
    var hamNum = parseInt(document.getElementById('hamNumId').value);
    var cokeNum = parseInt(document.getElementById('cokeNumId').value);
    var total = (hamNum * 10) + cokeNum;
    document.getElementById('totalId').textContent = total;
}

var cornField = [1, 2, 3];
cornField[0] = 1;
cornField[1] = 2;
cornField[2] = 3;

var cornField = [];
cornField[1] = 10;


cornField.push(100);


cornField.length

var farm = {
    farmer: 'name',
    dogs: ['black', 'white'],
    fornField: [8, 9, 5],
    goDinner: function () {
        console.log(farm.farmer + '回家吃飯');
    }
}

farm.goDinner();

farm.chick = 15;


var farms = [{
    farmer: 'name',
    dogs: ['jame', 'bun'],
    chick: 15,
    cornField: [2, 5, 8],
}, {
    farmer: 'chal',
    dogs: ['bob', 'tod'],
    chick: 22,
    cornField: [5, 1, 3],
}];

console.log(farms[0].farmer);

if (hungry == '飢餓'){
    
}