var xhr = new XMLHttpRequest;
var registerEmail = document.querySelector('#registerEmail');
var registerPassword = document.querySelector('#registerPassword');
var registerBtn = document.querySelector('.registerBtn');
var registerMsg = document.querySelector('.registerMsg');
var loginEmail = document.querySelector('#loginEmail');
var loginPassword = document.querySelector('#loginPassword');
var loginBtn = document.querySelector('.loginBtn');
var loginMsg = document.querySelector('.loginMsg');

// 註冊
function registerCheck(e) {
    e.preventDefault();
    var msg = `email=${registerEmail.value}&password=${registerPassword.value}`
    xhr.open('post', 'https://hexschool-tutorial.herokuapp.com/api/signup', true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.send(msg);
    xhr.onload = function () {
        var registerResult = JSON.parse(xhr.responseText);
        registerMsg.textContent = '*' + registerResult.message;
    }
}

// 登入
// 表單格式
// function loginCheck(e) {
//     e.preventDefault();
//     var msg = `email=${loginEmail.value}&password=${loginPassword.value}`
//     // 利用 POST 的方法傳送資料
//     xhr.open('post', 'https://hexschool-tutorial.herokuapp.com/api/signin', true);
//     // 設定內容格式
//     xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
//     // 將 msg 的內容 send 到 api 去做確認
//     xhr.send(msg);
//     xhr.onload = function () {
//         // 將 api 回傳的字串存成物件
//         var loginResult = JSON.parse(xhr.responseText);
//         loginMsg.textContent = '*' + loginResult.message;
//     }
// }

// JSON 格式
function loginCheck(e) {
    e.preventDefault();
    // 先宣告一個 JSON 物件
    var account = {
        email:loginEmail.value,
        password:loginPassword.value
    }
    // 利用 POST 的方法傳送資料
    xhr.open('post', 'https://hexschool-tutorial.herokuapp.com/api/signin', true);
    // 設定內容格式為 JSON
    xhr.setRequestHeader('Content-type', 'application/json');
    // 將 account 的內容轉為字串後 send 給 api 檢查
    var data = JSON.stringify(account)
    xhr.send(data);
    xhr.onload = function () {
        // 將 api 回傳的字串存成物件
        var loginResult = JSON.parse(xhr.responseText);
        loginMsg.textContent = '*' + loginResult.message;
    }
}

registerBtn.addEventListener('click', registerCheck);
loginBtn.addEventListener('click', loginCheck);







