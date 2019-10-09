var list = document.querySelector('.list')

// 點擊顯示 li 內容
list.addEventListener('click', function (e) {
    console.log(e.target.textContent);
})

// if (e.target.nodeName !== 'LI') {
//     return;
// }