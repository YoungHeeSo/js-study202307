let a=5;
let b='5';

console.log(a === b);
console.log(a !== b); //a와 b의 값과 타입이 다르니? true
// ==값이 같음, === 갑과 타입이 같음을 나타냄

console.log('====================');
// ==연산자는 예측이 어려우므로 사용 금지;
console.log('0'==='');
console.log(0==='');
console.log('0'===0);
console.log(false==='false');
console.log(false==='');

//문자 대소 비교
console.log('========================');
console.log('cobra'<'zebra');

//대문자<소문자
console.log('ace'<'Ade');
//한글 가-힣(44032), 한글과 영어 대소비교 시 한글이 무조건 큼
//영어 대문자< 소문자< 한글
//같은 영어나 같은 한글끼리는 사전 순으로 크기 결정, a<z


