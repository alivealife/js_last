document.getElementById('countId').onclick = function () {
    var hungry = document.getElementById('inHungry').value;
    if (hungry <= 3) {
        document.getElementById('eatWhat').textContent = '什麼都不吃';
    } else if (hungry <= 7 && hungry > 3) {
        document.getElementById('eatWhat').textContent = '吃點沙拉好了';
    } else {
        document.getElementById('eatWhat').textContent = '吃披薩!!';
    }
}
document.getElementById('lightId').onclick = function () {
    var light = document.getElementById('lightColor').value
    switch (light) {
        case 'red':
            alert('紅色警戒，不要出門');
            break;
        case 'yellow':
            alert('黃色警戒，注意安全');
            break;
        default:
            alert('綠色警戒，沒有問題');
            break;
    }
}
// 括號內容→(初始狀態 ; 條件 ; 更新內容)
for (var i = 0; i < 3; i++) {
    console.log(i);
}

// 定義 farms 陣列
var farms = [{
    farmer: '卡斯柏',
    dog: 10,
    filed: 6,
    apple: 5431,
}, {
    farmer: '查理',
    dog: 6,
    field: 8,
    apple: 9801,
}, {
    farmer: '布朗',
    dog: 3,
    field: 9,
    apple: 6245,
}]

// 我要找一個農場，買6000顆蘋果
var farmsTotal = farms.length;
for (var i=0; i<farmsTotal;i++){
    if(farms[i].apple>6000){
        console.log('我要跟' + farms[i].farmer + '買蘋果');
        // 買完蘋果後，農場蘋果數量減 6000
        farms[i].apple -= 6000;
        break;
    }    
}


// 將所有農場的 apple 產量加總
var farmsTotal = farms.length; //農場總數
var appleTotal = 0; 
for (var i=0;i<farmsTotal;i++){
    appleTotal += farms[i].apple;
    //appleTotal = famrs[0].apple + famrs[1].apple + famrs[2].apple    
}
console.log('今年蘋果產量總共' + appleTotal + '顆');

// 撈出5隻狗以上的資料
var farmsDog = farms.length;
for (var i=0 ; i<farmsDog ; i++){    
    if(farms[i].dog > 5){
        console.log(farms[i].farmer + '的狗超過五隻');
    }
}


// 定義 farmersTotal = 陣列數量
var farmersTotal = farms.length;
// 當 i < farmersTotal 時重複執行
for (var i = 0; i < farmersTotal; i++) {
    // 印出所有陣列裡的 farmer 資料
    console.log('第'+ (i+1)+'個農場主人是'+farms[i].farmer);
}

// 選擇 Class 時的寫法
document.querySelector('.testClass');

// 選擇 ID 時的寫法
document.querySelector('#testID');
