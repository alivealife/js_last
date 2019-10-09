// var el = document.querySelector('.box');
// el.addEventListener('click',function(e){
//     e.stopPropagation();
//     alert('box');
// },false)

// var elBody = document.querySelector('.body');
// elBody.addEventListener('click',function(e){
//     e.stopPropagation();
//     alert('你沒有點到 box');
// },false)

var el = document.querySelector('.header');
el.addEventListener('click',function(e){
    console.log(e.target.nodeName);
})




// if(e.target.nodeName == 'A'){
//     alert('這是連結');
// }else{
//     alert('點錯了');
// }