var body = document.body;

function goRocket(e) {
    // 利用這行來確認按下的按鍵 keycode 是多少
    // console.log(e.keyCode)
    // 根據 keyCode 來選擇 case
    switch (e.keyCode) {
        // 按下數字 1 時
        case 49:
            // 選擇第一個火箭，並修改 css
            document.querySelector('.rocket-1').style.bottom = '2000px';
            break;
        case 50:
            document.querySelector('.rocket-2').style.bottom = '2000px';
            break;
        case 51:
            document.querySelector('.rocket-3').style.bottom = '2000px';
            break;
        case 32:
            document.querySelector('.rocket-1').style.bottom = '0';
            document.querySelector('.rocket-2').style.bottom = '0';
            document.querySelector('.rocket-3').style.bottom = '0';
            break;
    }
}

body.addEventListener('keydown', goRocket);