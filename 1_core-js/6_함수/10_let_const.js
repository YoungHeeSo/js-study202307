
let x;
console.log(x);

const y='hello'; 
// y=100; //const는 값변경이 불가능하다
console.log(y);

//상수는 이름을 대문자로 지어서 상수임을 알 수 있도록 한다
const COLOR_YELLOW ='#FF0';
const COLOR_GREEN ='#0F0';
const COLOR_BLACK ='#000';

// $span.style.background=COLOR_YELLOW;
// $div.style.background=COLOR_GREEN;
// $div.style.background=COLOR_GREEN;

const kim = {
    name: '김철수', age:30
};

kim.name='찰스 킹';
// kim={
//     name: '박영희', age:40
// };

//객체,배열,함수는 불변성 있어야 한다, 그러므로 let보다는 const로 선언하라!
console.log(kim);

//그냥 const 기본값으로 쓰고 바꾸어야할거 같은면 let으로 쓰세요
//for안에서는 let으로 써야합니다 i++로 계속 i가 바뀌는 구조이기 때문!!