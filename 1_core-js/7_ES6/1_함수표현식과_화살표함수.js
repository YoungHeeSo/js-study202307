
/*
    # 다음과 같은 조건을 만족하는 객체를 일급객체라고 한다.

    1. 무명의 리터럴로 생성할 수 있다. 즉, 런타임에 생성이 가능하다.
    2. 변수나 자료구조(객체, 배열 등)에 저장할 수 있다.
    3. 함수의 매개변수에 함수를 전달할 수 있다.
    4. 함수의 반환값으로 사용할 수 있다.
    # 자바스크립트의 함수는 위의 조건을 모두 만족하므로 
      일급 객체라 할 수 있다.
 */

//함수 정의문
function add(n1, n2) {
    console.log('함수 add가 호출됨');
    return n1+n2;
}

const plus=add; //!= add(10,20),
//함수 add를 통제로 상수 plus에 저장한다!!
console.log(plus);

const r1 = plus(10, 20);
console.log(r1);

// 익명함수: 함수 리터럴(값)
const foo = function(params) {
    console.log(`함수 foo호출!`);
};

foo();

//함수는 배열이나 객체에 저장 가능
const array =[10, 'hello', true, {}, [], add, function(){ console.log('배열 안에서 만든 함수 콜'); }];

const r2=array[5](7,8);
console.log(`r: ${r2}`);

array[6]();
console.log(`==============================`);

const dog = {
    name: '초코', age: 3, favorite: ['산책, 낮잠'], 
    play: function () {
        console.log(`${this.name} 멍멍이가 신나게 놉니다`);
    }
};

dog.play();

//ES6: 화살표 함수
//함수정의문(선언문)
// function multiply(n1, n2) {
//     return n1*n2;
// }

//함수 표현식
// const multiply = function(){ return n1*n2;};

//화살표 함수
//함수의 내부코드가 단 한줄이라면 중괄호 생략가능
//그 한 줄의 코드가 리턴문이면 return 키워드 생략가능
const multiply = (n1, n2) => n1*n2;
const r3=multiply(4, 7);
console.log(`r3: ${r3}`);

//매개변수가 단 한개라면 소괄호 생략 가능!!
const sayHello=name=>console.log(`${name}님 안녕하세요!`);

sayHello('김철수');
sayHello('박영희');
sayHello('김명수');

const kim={
    name:'김철수', age:30, greeting: sayHello, 
    dance: ()=> console.log('신나게 춤을 춥시다')
};

kim.greeting('대길이');
kim.dance();

//정수 1개를 전달하면 해당 정수의 제곱값을 리턴하는
//화살표함수 pow작성해보세요

const pow = n1 => n1**2;
const result =pow(6);
console.log(result);

//객체 myinput에서 name: '박소영'
//객체 안에서 키에 값을 저장할때 > :
//변수, 상수 name = '박소영' 저장할때 > = 







