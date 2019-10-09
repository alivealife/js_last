// JSON 資料
// 定義一個空的陣列 data
var data = [];
// 用 AJAX 撈取資料
var xhr = new XMLHttpRequest();
xhr.open('get','https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97',true);
xhr.send(null);
// 撈到資料後執行
// 1.撈出乾淨的資料
// 2.設定下拉式選單
// 3.初始化頁面
xhr.onload = function(){
    data = JSON.parse(xhr.responseText);
    cleanData();
    setSelectbar();
    initContent();    
}


// 變數區
var disData = [];
var selectBar = document.querySelector('#districtOption');
var setList = document.querySelector('.setList');
var setTitle = document.querySelector('.setTitle');
var btnSet = document.querySelector('.btnSet');
var goTop = document.querySelector('.gotop');
// 切換頁面用
// 當前頁
var pageNum = 1;
// 每一個分頁顯示的數量 -> 6 筆
var contentNum = 6;
// 頁碼數量
var pageLeng = 0;
var pagination = document.querySelector('.pagination');

// 函式區

// 重作一個乾淨的資料
function cleanData() {
    for (var i = 0; i < data.result.records.length; i++) {
        // push 每筆 records 到 data
        disData.push(data.result.records[i]);
    }
}
// 設定下拉式選單內容
function setSelectbar() {
    var str = '';
    // 取得陣列長度
    var dataLen = disData.length; //
    // 設定一個空陣列等一下用來儲存地區資料
    var newData = [];
    // 先將所有的地區資料抓出來存在 newData 裡面
    for (var i = 0; i < dataLen; i++) {
        newData.push(disData[i].Zone); //
    }

    // 將所有不重複的資料放進 result 裡
    var result = Array.from(new Set(newData));
    // 取得 result 的陣列長度
    var zoneLen = result.length;
    // 將所有資料連同 HTML 標籤存入 str 裡
    for (var j = 0; j < zoneLen; j++) {
        str += `<option>${result[j]}</option>`;
    }
    // 把資料印到瀏覽器上
    selectBar.innerHTML = `<option disabled selected>--請選擇行政區--</option>` + str;
}

// 初始化頁面
function initContent() {
    // 初始化時把 h2 設定成 '高雄景點資訊' 並且把所有資料印到頁面上
    setTitle.textContent = '高雄景點資訊';
    // 執行顯示頁面用函式
    setContent();
}

//顯示頁面內容用
function setContent() {
    var str = '';
    var dataLen = disData.length;
    // 選取開始的陣列位置 -> 頁碼乘以每頁顯示數量
    var start = pageNum * contentNum;
    calPagesNum(dataLen);
    if (dataLen > start) {
        dataLen = start;
    } else {
        dataLen = disData.length;
    }
    for (var i = start - contentNum; i < dataLen; i++) {
        str += `<div class="col-md-6 mb-5">
                <div class="card rounded-0 border-0 card-shadow">
                    <img src="${disData[i].Picture1}" class="card-img-top img-height">
                    <div class="card-overlay w-100 d-flex justify-content-between text-white">
                        <h5 class="card-title mb-0">${disData[i].Name}</h5>
                        <p class="card-text">${disData[i].Zone}</p>
                    </div>
                </div>
                <ul class="list-group list-group-flush card-shadow">
                    <li class="list-group-item border-0 pb-0">
                        <div class="iconAlign d-inline mr-3"><img src="./images/icons_clock.png"></div>
                        ${disData[i].Opentime}
                    </li>
                    <li class="list-group-item border-0 pb-0">
                        <div class="iconAlign d-inline mr-3"><img src="./images/icons_pin.png"></div>
                        ${disData[i].Add}
                    </li>
                    <li class="list-group-item border-0 d-flex">
                        <div class="iconAlign d-inline mr-3"><img src="./images/icons_phone.png"></div>
                        ${disData[i].Tel}<img src="./images/icons_tag.png" class="ml-auto mr-3">${disData[i].Ticketinfo}
                    </li>
                </ul>
            </div>`
    }
    setList.innerHTML = str;
}

// 選擇後切換分頁
function changeList(e) {
    setTitle.textContent = e.target.value;
    var changeData = [];
    var dataLen = data.result.records.length;
    // 從 data 取相同地區的值，存到 distData 裡
    for (let i = 0; i < dataLen; i++) {
        if (e.target.value == data.result.records[i].Zone) {
            changeData.push(data.result.records[i]);
        }
    }
    disData = changeData;
    // 回到第一頁，避免換頁錯誤
    pageNum = 1;
    // 執行顯示頁面函式
    setContent();
}

// 點選熱門行政區後切換頁面
function changeListByButton(e) {
    // 將 h2 設定為點到的選項
    setTitle.textContent = e.target.textContent;
    var changeData = [];
    var btnTarget = e.target.nodeName;
    var dataLen = data.result.records.length;
    for (var i = 0; i < dataLen; i++) {
        // 如果不是點到按鈕就無動作
        if (btnTarget !== 'BUTTON') {
            return;
            // 點到按鈕後比對跟資料裡的哪一區相同然後執行
        } else if (e.target.textContent == data.result.records[i].Zone) {
            changeData.push(data.result.records[i]);
        }
    }
    disData = changeData;
    // 回到第一頁，避免換頁錯誤
    pageNum = 1;
    // 執行顯示頁面函式
    setContent();
}

// 計算頁數
function calPagesNum(counter) {
    if (counter > contentNum) {
        // Math.ceil() 最小整數：取大於這個數的最小整數
        pageLeng = Math.ceil(counter / contentNum);

        var prev = `<li class="page-item"><a class="page-link border-0 Prev" href="#">< Prev</a></li>`;
        var next = `<li class="page-item"><a class="page-link border-0 Next" href="#">Next ></a></li>`;
        var str = ``;


        for (var i = 1; i <= pageLeng; i++) {
            if (i == pageNum) {
                str += `<li class="page-item active"><a class="page-link border-0" href="#">${i}</a></li>`;
            } else {
                str += `<li class="page-item"><a class="page-link border-0" href="#">${i}</a></li>`;
            }
        }

        pagination.innerHTML = prev + str + next;
    } else {
        str = `<li class="page-item active"><a class="page-link border-0" href="#">1</a></li>`;
        pagination.innerHTML = str;
    }
}

// 切換頁面
function switchPages(e) {
    // 禁止原本點連結後的動作
    e.preventDefault();
    // 如果不是點到連結就不動作
    if (e.target.nodeName !== "A") {
        return;
    }

    // 切換頁碼
    if (e.target.textContent == "Next >") {
        if (pageNum == pageLeng) {
            pageNum = pageLeng;
        } else {
            pageNum++;
        }
    } else if (e.target.textContent == "< Prev") {
        if (pageNum == 1) {
            pageNum = 1;
        } else {
            pageNum--;
        }
    } else {
        pageNum = parseInt(e.target.textContent);
    }

    // 更新資料
    setContent();
}

// 回到頂部
function scrollTop(e) {
    e.preventDefault();
    scroll(0, 0);
}

// 監聽區 & 函式執行區
// 撈出乾淨的資料
// cleanData();
// 設定下拉式選單
// setSelectbar();
// 初始化頁面
// initContent();
// 更改下拉式選單選項後更新頁面
selectBar.addEventListener('change', changeList);
// 點選熱門行政區後更新葉面
btnSet.addEventListener('click', changeListByButton);
// 監聽有沒有按換頁按鈕
pagination.addEventListener('click', switchPages);
// 回到頁首用
goTop.addEventListener('click', scrollTop);


// 把每個功能撈出來的資料重新存到陣列裡
// 然後再執行一次 setContent 函式就可以不用一直寫重複的內容