//defer
//비동기 코드
//




const $btn = document.querySelector('button');

function trackHandler(params) {
    console.log('Click!!');
}

$btn.addEventListener('click', trackHandler);

setTimeout(()=>{
    console.log('1번 code');
},5000);
setTimeout(()=>{
    console.log('2번 code');    
},3000);
setTimeout(()=>{
    console.log('3번 code');    
},1000);

// let total=0;
// for(let i=0; i<10**8; i++ ){
//     total+=i;
// }
// console.log(total);
















