
function calculate(func) {
    console.log('계산기입니다');
    const result = func(10,20);
    return result;
}

function add(n1, n2){
    return n1+n2;
}

const r = calculate(add);
console.log(`r: ${r}`);

const r2 = calculate(function(n1, n2){
    return n1-n2;
});

console.log(`r2: ${r2}`);

const r3 = calculate((n1, n2)=> n1*n2);
console.log(`r3: ${r3}`);
console.log(`========================`);

//정수 n을 전달하면 1~n까지의 모든 짝수를 출력하는 함수
function showEvenNumer(n) {
    for(let i=1; i<=n; i++){
        if(i%2===0){
            console.log(i);
        }
    }
}

function showOddNumer(n){
    for(let i=1; i<n; i++){
        if(i%2===1){
            console.log(i);
        }
    }
}

function showOddOrEvenNumer(n, isOdd){
    const delim = isOdd ? 1:0;

    for(let i=1; i<n; i++){
        if(i%2===delim){
            console.log(i);
        }
    }

}

//콜백을 적용한 솔류션
function showNumber(n, code) {
    for(let i=1; i<=n; i++){
        if(code(i)){ //함수형태로 호출
            console.log(i);
        }
    }
}

showNumber(10, i => i%2==0);
showNumber(10, function(i){ return i%2==0;} );

// showEvenNumer(7);
// showOddNumer(7);
// showOddOrEvenNumer(10, false);