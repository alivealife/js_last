// var
// const listLen = document.querySelectorAll('.list li').length;
// for (var i= 0 ;listLen > i ;i ++){
//     document.querySelectorAll('.list li')[i].addEventListener('click',function(){
//         alert(i+1);
//     })
// }

// let
const listLen = document.querySelectorAll('.list li').length;
for (let i = 0; listLen > i; i++) {
    document.querySelectorAll('.list li')[i].addEventListener('click', function () {
        alert(i + 1);
    })
}

// const obj = {
//     abc: 'abc'
// };
// Object.freeze(obj);
// obj.abc = '123';
// // console.log(obj.abc);


// let a = 1;
// // let a = 2;

// const imgURL = 'logo.png';
// `<li><img src="${imgURL}"></li>`
