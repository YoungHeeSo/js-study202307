
//구조분의할당?
userNames = ['김철수','강감찬','박영희'];

//userNames에서 각각의 요소들을 다시 변수로 저장하고 싶어
// const kim = userNames[0];
// const kang = userNames[1];
// const park = userNames[2];
// console.log(kim);
// console.log(kang);
// console.log(park);

const [kim,kang,park] = userNames;
console.log(`a:${kim}, b:${kang}, c:${park},`);

const[kk, ,gg]=userNames;
console.log(`kk: ${kk}, gg:${gg}`);

//변수값 교환하기
let first = 10;
let second = 20;

[second, first]=[ first, second];
console.log(`1st: ${first}, 2st: ${second}`);

//맨 앞 2개는 각각의 변수에 저장하고
//나머지는 묶어서 배열로 만들기
// const numbers = [1, 3, 5, 7, 9, 11];
const [one, three, ...rest] = [1, 3, 5, 7, 9, 11];
console.log(rest);
console.log(`one: ${one}, three: ${three}`);

//스프레드를 활용한 배열 간편 복수
console.log(`===================`);

const foods = [`감자튀김`, `햄버거`, `콜라`];
// const copyFoods=foods; //배열 포인터!!! 복사!
//원본과 카피본이 공유되고 있어,
//원본이나 카피본 중 하나가 바뀌어도 둘 다 바뀌는 상황이 나타난다

//배열 값 복사 방법
// const copyFoods = foods.map(f=>f); 
// const copyFoods = foods.slice(); 
//스프레드 복사
//복사하면서 값을 더 추가할 수 있다!!!
const copyFoods = ['닭강정', ... foods, '치킨너겟']; 


foods[1]='치킨버거';
copyFoods[2]='사이다'

console.log(`foods: ${foods}`);
console.log(`copy: ${copyFoods}`);


