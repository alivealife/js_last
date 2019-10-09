var xhr = new XMLHttpRequest();

// 格式、要讀取的網址、同步非同步
// 格式： get (讀取資料)、 post (傳送資料到伺服器)
xhr.open('get', 'https://hexschool.github.io/ajaxHomework/data.json', true);

// 因為只是 get 資料，並沒有要 post 去驗證，因此填入 null
xhr.send(null);


xhr.onload = function () {
    // 如果 HTTP 狀態(status)碼 == 200(用戶端要求成功)才執行內容
    if (xhr.status == 200) {
        console.log(xhr.responseText);
    } else {
        console.log('資料錯誤');
    }
}