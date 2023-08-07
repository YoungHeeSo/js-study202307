
//일반 함수에서 this는...

//nodejs환경에서는 global객체 할당
//브라우저 환경에서는 window객체 할당
//전체 객체를 담고 있는 것

function foo(params) {    
    console.log(this); 
}
// foo();

//객체에서의 this는...
//'나'
// const car={
//     madeBy:'현대',
//     model:'그랜져',
//     showCarInfo: function (params) {
//         console.log(this);
//         console.log(`제조사: ${this.madeBy}, 모델명: ${this.model}`);
//     }
// };
// car.showCarInfo();

//이벤트 핸들러의 this는
//function으로 선언할 경우 이벤트를 건 요소
// const $btn = document.getElementById('btn');

// const buttonHandler=function (params) {
//     console.log(this);
//     this.style.background='red';
// };

// $btn.addEventListener('click', buttonHandler);

console.log('========================');
//this를 조직하는 메서드 bind, call, apple

//call
function sayHello(lang1,lang2) {
    console.log(this);
    console.log(`hello, i am ${this.name}, i can speak ${lang1} and ${lang2}`);
}

const kim={
    name:'김철수',
    age:33
};

const park={
    name:'박양희',
    age:55
};

//this 조직힐 수 있는 call
//param1: 조작할 this를 전달
// ...pram2: 원래 함수가 받아야할 파라미터를 전달
sayHello.call(kim, 'English', 'Korean');

//this 조직힐 수 있는 apply
//call이랑 같은데 param2를 배열에 묶어서 줘야한다

sayHello.apply(kim, ['English', 'Korean']);

//this 조직힐 수 있는 bind
//call,apply는 함수를 바로 실행시킨다
//그러나 bind는 this를 조직한 새로운 함수를 반환하고 실행은 시키지 않는다.
const bindedSayHello=sayHello.bind(park,'korean','spanish');
bindedSayHello();

//ex
const eventJandler=function(fruit,e){
    console.log('event 객체:', e);
    console.log('과일명:', fruit);
    console.log(this);
};
const $input=document.querySelector('input');
// document.getElementById('btn').addEventListener('click',eventJandler.bind($input));
document.getElementById('btn').addEventListener('click',eventJandler.bind(null, 'apple'));

