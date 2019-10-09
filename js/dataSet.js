// 定義陣列
var country = [{
        farmer: '卡斯柏'
    },
    {
        farmer: '查理'
    }
]
var list = document.querySelector('.list');
// 更新頁面資料
function updateList(){
    var str = '';
    var len = country.length;
    for(var i=0;i<len;i++){
        str+='<li data-num="'+i+'">'+country[i].farmer+'</li>'
    }
    list.innerHTML=str;
}
updateList();

// 確認是不是真的點到 LI ，點到了才執行內容
function checkList(e){
    var num = e.target.nodeName;
    if(num !== 'LI'){
        // 如果點到的不是 LI 就跳出判斷式，不繼續執行
        return;
    }
    // 取得 HTML 標籤 data-num 的值
    var farmerNum =e.target.dataset.num;
    console.log('點到'+country[farmerNum].farmer);
}

list.addEventListener('click',checkList);