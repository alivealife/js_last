var el = document.querySelector('.btn');
                //選擇事件,帶入匿名 function, true/false
el.addEventListener('click',function(e){
    var textTest = document.querySelector('#test').value;
    console.log(textTest);
    alert(textTest);
},false)

