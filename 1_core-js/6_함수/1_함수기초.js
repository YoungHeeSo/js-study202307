/*
console.log(`김철수님 안녕하세요~`);
console.log(`오늘도 즐거운 하루 되세요~`);

console.log(`박영희님 안녕하세요~`);
console.log(`오늘도 즐거운 하루 되세요~`);

console.log(`홍길동님 안녕하세요~`);
console.log(`오늘도 수고하셨습니다`);
*/

//함수의 정의
//함수 이름 동사형 > say, play, ...
function sayHello(name, isMornning) {

    console.log(`${name}님 방가방가~`);

    if(isMornning){
        console.log(`오늘도 즐거운 하루 되세요~`);    
    }else{
        console.log(`오늘도 수고하셨습니다~`);
    }

}

//함수의 호출 - use
sayHello('김철수',true);
console.log('========================');
sayHello('박영희',true);
console.log('========================');
sayHello('홍길동',false);

function makeLine(params) {
    console.log('=======================');
}
makeLine();

//input이 주어졌을대 output데이터가 나와야해

//원의 넓이를 자주 구하는 상황
//함수가 가지고 있는 데이터는 함수 밖에서 사용할 수 없다!
//그러므로 return 을 사용해서 데이터를 밖으로 내보내준다
function calcAreaCircle(r) {
    const PI = 3.14159265;
    const area = PI * r**2;

    // console.log(area);
    return area;
}

//반지름
let result = calcAreaCircle(15);
console.log(`result: ${result}`);

