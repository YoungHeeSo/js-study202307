
// && : 양쪽이 모두 참일 경우 참 and
// || : 둘 중 하나만 참이어도 참 or

//아이디검증 &&패스워드 검증
// true true => true
// true false => false
// false true => false
// false false => false

let t= true;
let f= false;
console.log(t||t);
console.log(t||f);
console.log(f||t);
console.log(f||f);

//논리 반전(not)
console.log('=============');
console.log(!t); //false

let money=0;
if(money){
    console.log('쇼핑을 할거야');
}else{
    console.log('집에서 쉴거야');
}

//조건 연산자(3항)
money=700;
console.log('=========');
let food; //먹고싶은음식
// if(money>6000){
//     food='돈까스'
// }else{
//     food='라면'
// }
console.log(`선택된 음식: ${money > 6000 ? '돈까스' : '라면'}`);
// 조건식 ? true값 : false값