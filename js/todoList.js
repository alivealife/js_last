// 功能說明
// 待辦清單
// 1.輸入待辦事項按加入清單後會加入下方列表
// 2.輸入待辦事項按 enter 後會加入下方列表
// 3.按下列表前的刪除按紐可以把該列表刪除
// 4.如果沒輸入任何東西不會有動作
// 5.重開頁面資料一樣會在
// 6.按下刪除全部會把清單全部清除


// 變數區
// 將 todo 設為 localStorage 抓出來的資料轉換成的陣列或是空陣列
var todo = JSON.parse(localStorage.getItem("todoItem")) || [];
var addBtn = document.querySelector('.addBtn');
var list = document.querySelector('.list');
var todoContent = document.querySelector('.inputContent');
var clearBtn = document.querySelector('.clearBtn');

// 函式區
// 更新頁面資料用的函式
function updateList() {
    // 將 listContent 設為空字串
    var listContent = '';
    // 讓 len = todo 陣列的長度
    var len = todo.length;
    for (var i = 0; i < len; i++) {
        // 將所有 todo 陣列的資料 += 到 listContent 裡
        listContent += `<li class="list-group-item"><a href="#" class="btn btn-outline-danger mr-3"data-index=${i}>刪除</a>${todo[i].todoList}</li>`;
    }
    // 印出所有資料到頁面上
    list.innerHTML = listContent;
    // 將陣列轉換為字串
    var todoString = JSON.stringify(todo);
    // 將字串存入 localStorage
    localStorage.setItem('todoItem', todoString);
}
updateList();

// 追加資料並儲存至 localtorage 用函式(button 用)
function addList() {
    // 如果輸入框沒填資料就跳出不執行 利用.trim() 讓輸入空白也無法執行
    if (todoContent.value.trim() === '') {
        return;
    }
    // 將輸入框的值放進陣列的最後面
    todo.push({
        todoList: todoContent.value
    });
    // 寫在 updateList() 裡就好，這邊破棄
    // // 將陣列轉換為字串
    // var todoString = JSON.stringify(todo);
    // // 將字串存入 localStorage
    // localStorage.setItem('todoItem', todoString);
    updateList();
}

// 追加資料並儲存至 localtorage 用函式(enter 用)
function addListKey(e) {
    // 如果輸入框沒填資料就跳出不執行 利用.trim() 讓輸入空白也無法執行
    if (todoContent.value.trim() === '') {
        return;
    }
    // 根據按下的按鍵來執行動作
    switch (e.keyCode) {
        // 按下 enter 後執行內容
        case 13:
            // 將輸入框的值放進陣列的最後面
            todo.push({
                todoList: todoContent.value
            });
            // 寫在 updateList() 裡就好，這邊破棄
            // // 將陣列轉換為字串
            // var todoString = JSON.stringify(todo);
            // // 將字串存入 localStorage
            // localStorage.setItem('todoItem', todoString);
            updateList();
            break;
    }
}

// 刪除資料並儲存至 localtorage 用函式
function delList(e) {
    e.preventDefault();
    var msg = '確定要刪除嗎？';
    var delTarget = e.target.nodeName;
    if (delTarget !== 'A') {
        // 如果點到的不是 LI 就跳出判斷式，不繼續執行
        return;
    }
    // 確認是否真的要刪除，確定的話就刪掉該筆資料
    else if (confirm(msg)) {
        // 取得 HTML 標籤 data-index 的值
        var delNum = e.target.dataset.index;
        todo.splice(delNum, 1);
        // 寫在 updateList() 裡就好，這邊破棄
        // // 將陣列轉換為字串
        // var todoString = JSON.stringify(todo);
        // // 將字串存入 localStorage
        // localStorage.setItem('todoItem', todoString);
        updateList();
    }
}

// 我不記待辦事項啦 JoJo!!
function delAll(e) {
    var msg = '確定要刪除所有待辦事項嗎？';
    // 如果陣列沒有值就不執行
    if (todo.length == 0) {
        return;
    }
    // 如果陣列裡面有值就跳出詢問視窗
    else if (confirm(msg)) {
        todo = [];
        updateList();
    }
}

// 監聽區
// 點擊 button 增加清單
addBtn.addEventListener('click', addList);
// 按 enter 增加清單
todoContent.addEventListener('keydown', addListKey);
// 點刪除連結刪除清單
list.addEventListener('click', delList);
// 刪除所有的待辦事項
clearBtn.addEventListener('click', delAll);