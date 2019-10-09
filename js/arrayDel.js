// 定義陣列
var country = [{
        farmer: '卡斯柏'
    },
    {
        farmer: '查理'
    }
]
var list = document.querySelector('.list');
var addBtn = document.querySelector('.addName');
var delBtn = document.querySelector('.delName');
// 下拉式選單用參數
var selectName = document.querySelector('.farmerName');
// 更新頁面資料用的函式
function updateList() {
    var str = '';
    var nameList = '';
    var len = country.length;
    for (var i = 0; i < len; i++) {
        str += '<li data-num="' + i + '">' + country[i].farmer + '</li>'
        // 追加內容至下拉式選單
        nameList += '<option value="' + i + '">' + country[i].farmer + '</option>'
    }
    list.innerHTML = str;
    selectName.innerHTML = nameList;
}
updateList();

// 追加資料用的函式
function addList() {
    var inputName = document.querySelector('.inputName').value;
    // 如果輸入框沒填資料就跳出不動作
    if (inputName.length == 0) {
        return
    }
    // 將輸入框的值放進陣列的最後面
    country.push({
        farmer: inputName
    });
    updateList();
}

// 刪除資料用的函式(運用下拉式選單的方式)
function delList() {
    // 取得下拉式選單的內容字串
    var selectNameText = selectName.options[selectName.selectedIndex].text;
    var len = country.length;
    for (var i = 0; i < len; i++) {
        // 如果內容字串等於陣列內的字串的話就刪除
        if (country[i].farmer == selectNameText) {
            country.splice(i, 1);
        }
    }
    updateList();
}
// 刪除資料用的函式(運用輸入框的方式)
// function delList(){
//     var inputName = document.querySelector('.inputName').value;
//     var len = country.length;
//     for(var i=0;i<len;i++){
//         if(country[i].farmer == inputName){
//             country.splice(i,1);
//         }
//     }
//     updateList();
// }
addBtn.addEventListener('click', addList);
delBtn.addEventListener('click', delList);


// // 確認是不是真的點到 LI ，點到了才執行內容
// function checkList(e){
// var num = e.target.nodeName;
// if(num !== 'LI'){
//     // 如果點到的不是 LI 就跳出判斷式，不繼續執行
//     return;
// }
// // 取得 HTML 標籤 data-num 的值
// var farmerNum =e.target.dataset.num;
// console.log('點到'+country[farmerNum].farmer);
// }

// function delData(e){
//     var clen = country.length;
//     var num = e.target.nodeName;
//     if(num !== 'LI'){
//         // 如果點到的不是 LI 就跳出判斷式，不繼續執行
//         return;
//     }
//     // 取得 HTML 標籤 data-num 的值
//     var farmerNum =e.target.dataset.num;    
//     country.splice(clen-1,1);
//     updateList();
//     }
// list.addEventListener('click',delData);
