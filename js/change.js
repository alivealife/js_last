var area = document.getElementById('areaId');
var list = document.querySelector('.list');
var country = [{
        farmer: '農夫',
        place: 'OO'
    },
    {
        farmer: '不是農夫',
        place: 'OO'
    },
    {
        farmer: '你才農夫',
        place: 'XX'
    },
]
var countryLen = country.length;

// function updateList(e){
//     var select = e.target.value;
//     var str = '';
//     for(i=0;i<countryLen;i++){
//         當下拉式選單的內容等於物件 country[i].place 的內容時
//         if(select == country[i].place){
//             str += '<li>' + country[i].farmer + '</li>'            
//         }
//     }
//     list.innerHTML = str;
// }


function updateList(e) {
    var select = e.target.value;
    // 清空 list 的值
    list.innerHTML = "";
    for (var i = 0; i < countryLen; i++) {
        var li = document.createElement('li');
        if (select == country[i].place) {
            // 把農夫資料丟到 li 裡
            li.textContent = country[i].farmer;
            // 把資料丟到頁面上生成
            list.appendChild(li);
            // 另一種寫法
            // 存下地址符合的農夫名稱
            // var addList = country[i].farmer;
            // 創造一個文字節點
            // var text = document.createTextNode(addList);
            // 把文字資料放到 li
            // li.appendChild(text);
            // 把 li 丟到頁面上生成
            // list.appendChild(li);
            // console.log(typeof(list));
        }
    }
}

area.addEventListener('change', updateList)