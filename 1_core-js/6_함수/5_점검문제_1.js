/* 
Q. n의 약수의 개수를 구하기
1. 정수 n을 전달받아 n의 약수들을 출력하고 
약수의 개수를 리턴하는 함수 calcDivisor를 정의하세요.
2. 약수의 출력은 함수 내부에서 이뤄져야 합니다.
3. 힌트) 전달받은 n을 1부터 n까지 지속적으로 나누어
 나누어 떨어졌을 시 약수의 개수 카운트를 1증가시키고 출력.
*/

//약수를 저장할 배열
let divisor = [];

//약수의 개수가 저장되는 변수
// let count=0;

function calcDivisor(number) {

    for(let i=1; i<=number; i++){

        if(number%i===0){
            divisor.push(i);
            // count++;
        }
        else continue;
    }
    
    console.log(`${number}의 약수: ${divisor}`);

    // return count;
    return divisor.length; //약수의 개수를 저장하는 변수를 만들지 않고 배열의 길이를 세어 반환한다
}

// 호출부
let divCount = calcDivisor(50);
console.log(`약수의 개수: ${divCount}개`);

