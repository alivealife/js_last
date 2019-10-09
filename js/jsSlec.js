var testId = document.querySelectorAll('#testId');

// 全部的陣列都塞值
var testIdTotal = testId.length;
for(var i=0;i<testIdTotal;i++){
    testId[i].textContent='我成功了嗎?';
}

// 塞給單一陣列
testId[0].textContent='我成功了嗎?';


