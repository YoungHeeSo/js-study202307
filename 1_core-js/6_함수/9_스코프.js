
let x=10; //전역 변수: 프로그램에 전체에서 사용가능

function foo(z) {
    // console.log(`지역변수 x선언전:${x}`);
    let x=30;
    let y=20+x; //지역변수: 함수 안에서만 사용가능

    console.log(y-z);
    // x=30;
    console.log(`지역변수 x 선언후: ${x}`);
}

foo(17);
// console.log(y);
// console.log(z);
console.log(`함수 바깥쪽 x: ${x}`); //함수내부터에서 변수를 수정할 수 있다
//전역변수, 지역변수 각각에서 선언한 변수 x는 
//지역에서 선언하면 지역변수 x를 가지고오고 
//전역에서 선언하면 전역변수 x를 가지고 와서 사용한다

console.log('=========================================');
//중첩함수: 함수 안에 함수를 정의한 형태
function outer(m) {
    let n='outer local n';
    let v='outer local v';
    console.log(m);
    console.log(n);
    console.log(v);

    //헬퍼 함수
    function inner() {
        console.log(n);
        let m = 'inner local m';
        let v = 'inner local v';
        console.log(m);
        console.log(v);
    }
    inner();
}

let m ='global m';
outer('outer param m')
console.log(m);

//블록 스코프
let k=100;

for(let k=0; k<3; k++){ //for안에서의 k를 사용하고, for는 끝나면 사용할 수 없다
    console.log(`for문 안에서 k: ${k}`);
}

console.log(`for문 밖에서의 k: ${k}`);


