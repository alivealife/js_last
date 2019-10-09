// 變數區
// 如果 localStorage 有資料就取出並轉成陣列形式，沒有就預設一個空陣列
var initList = JSON.parse(localStorage.getItem("BMIdata")) || [];
var inputHeight = document.querySelector('.input-height');
var inputWeight = document.querySelector('.input-weight');
var list = document.querySelector('.list');
var calculateResult = document.querySelector('.result');
var changeBtn = document.querySelector('.changeBtn');
var deleteData = document.querySelector('.btn-del');
// 初始化資料
var BMILv = '';
var color = '';
var bmiColor = '';
var BMIResult = 0;

// 更新頁面
function updateList() {
    // 將 listContent 設為空字串
    var listContent = '';
    // 讓 len = initList 陣列的長度
    var len = initList.length;
    for (var i = 0; i < len; i++) {
        // 將所有 initList 陣列的資料 += 到 listContent 裡
        listContent += `<li class="list-group-item mb-3 rounded-0 ${initList[i].weightLv} border-0 h5 py-3 d-flex justify-content-between align-items-center"><div class="font-width">${initList[i].BMILv}</div><div><span class="small-font">BMI </span>${initList[i].BMI}</div><div><span class="small-font">weight </span>${initList[i].Weight}kg</div><div><span class="small-font">height </span>${initList[i].Height}cm</div><span class="small-font">${initList[i].time}</span></li>`;
    }
    // 印出所有資料到頁面上
    list.innerHTML = listContent;
}

// 計算 BMI 後寫入資料
function calcuBMI(e) {
    e.preventDefault();
    var weight = parseInt(inputWeight.value);
    var height = parseInt(inputHeight.value);
    var bmi = weight / ((height / 100) * (height / 100))
    // 如果輸入框沒填資料就跳出不執行 利用.trim() 讓輸入空白也無法執行
    if (inputHeight.value.trim() === '' || inputWeight.value.trim() === '') {
        alert('請輸入數字');
        return;
        // 如果輸入負值也不執行
    } else if (height <= 0 || weight <= 0) {
        alert('請輸入正確數字');
        return;
    } else if (bmi < 18.5) {
        BMILv = '過輕';
        color = 'weightLv-2';
        BMIResult = bmi.toFixed(2);
    } else if (bmi >= 18.5 && bmi < 24) {
        BMILv = '理想';
        color = 'weightLv-1';
        BMIResult = bmi.toFixed(2);
    } else if (bmi >= 24 && bmi < 27) {
        BMILv = '過重';
        color = 'weightLv-3';
        BMIResult = bmi.toFixed(2);
    } else if (bmi >= 27 && bmi < 30) {
        BMILv = '輕度肥胖';
        color = 'weightLv-4';
        BMIResult = bmi.toFixed(2);
    } else if (bmi >= 30 && bmi < 35) {
        BMILv = '中度肥胖';
        color = 'weightLv-5';
        BMIResult = bmi.toFixed(2);
    } else if (bmi >= 35) {
        BMILv = '重度肥胖';
        color = 'weightLv-6';
        BMIResult = bmi.toFixed(2);
    }
    // 結束後執行
    // 1.把資料寫回 initList
    // 2.更新畫面
    changeBTN();
    addData();
    updateList();
}

// 寫入資料用函式
function addData() {
    var weight = parseInt(inputWeight.value);
    var height = parseInt(inputHeight.value);
    var BMIData = {
        weightLv: color,
        Height: height,
        Weight: weight,
        BMI: BMIResult,
        BMILv: BMILv,
        time: date()
    }
    // 把資料存到 initList 裡面
    initList.push(BMIData);
    // 把資料轉成字串存入 localStorage
    localStorage.setItem('BMIdata', JSON.stringify(initList));
}

// 切換按鈕
function changeBTN() {
    var str = `<div class="d-flex align-items-center newBtn-set">
    <div class="newBtn rounded-circle text-center">
        <p class="h2 mb-0 pt-3">${BMIResult}</p>
        <p>BMI</p>
        <a href="#" class="refresh text-center"><img src="./images/icons_loop.png" alt=""></a>
    </div>
    <p class="h2 ml-2">${BMILv}</p>
</div>`
    changeBtn.innerHTML = str;
    var newBtnColor = document.querySelector('.newBtn-set')
    var newBtn = document.querySelector('.newBtn');
    var refresh = document.querySelector('.refresh');
    // 用 switch 作為判斷標準
    switch (BMILv) {
        case '過輕':
            newBtnColor.setAttribute('style', 'color:#31BAF9');
            refresh.setAttribute('style', 'background-color: #31BAF9');
            newBtn.setAttribute('style', 'border: 6px solid #31BAF9');
            break
        case '理想':
            newBtnColor.setAttribute('style', 'color:#86D73F');
            refresh.setAttribute('style', 'background-color: #86D73F');
            newBtn.setAttribute('style', 'border: 6px solid #86D73F');
            break
        case '過重':
            newBtnColor.setAttribute('style', 'color:#FF982D');
            refresh.setAttribute('style', 'background-color: #FF982D');
            newBtn.setAttribute('style', 'border: 6px solid #FF982D');
            break
        case '輕度肥胖':
            newBtnColor.setAttribute('style', 'color:#FF6C03');
            refresh.setAttribute('style', 'background-color: #FF6C03');
            newBtn.setAttribute('style', 'border: 6px solid #FF6C03');
            break
        case '中度肥胖':
            newBtnColor.setAttribute('style', 'color:#FF6C03');
            refresh.setAttribute('style', 'background-color: #FF6C03');
            newBtn.setAttribute('style', 'border: 6px solid #FF6C03');
            break
        case '重度肥胖':
            newBtnColor.setAttribute('style', 'color:#FF1200');
            refresh.setAttribute('style', 'background-color: #FF1200');
            newBtn.setAttribute('style', 'border: 6px solid #FF1200');
            break
    }
    refresh.addEventListener('click', calcuBMI);
}

// 刪除所有資料
function delAll(e) {
    e.preventDefault();
    var msg = '確定要刪除所有資料嗎？';
    // 如果陣列沒有值就不執行
    if (initList.length == 0) {
        return;
    }
    // 如果陣列裡面有值就跳出詢問視窗
    else if (confirm(msg)) {
        initList = [];
        localStorage.setItem('BMIdata', JSON.stringify(initList));
        updateList();
    }
}

// 獲取今天日期
function date() {
    var day = new Date();
    var today = (day.getMonth() + 1) + '-' + day.getDate() + '-' + day.getFullYear();
    return today;
}

// 剛開始先執行一次更新頁面
updateList()
calculateResult.addEventListener('click', calcuBMI);
deleteData.addEventListener('click',delAll);