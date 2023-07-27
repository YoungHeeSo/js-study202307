
// 매개변수(parameter)
// 함수를 정의할 때 함수 바깥쪽에서 안쪽으로 들어오는 
// 데이터를 저장하는 변수

// x~y까지의 누적합을 구하는 함수 정의
// 함수, 변수 이름 잘짓기

/*
    description: x~y까지의 누적합을 구하는 함수 정의
    parameter:
        - begin: 누적합을 구할 시작값
        - end: 누적합을 구할 끝값
    return: begin과 end사이의 정수의 총합

     example:
     calcRangeSum(1, 10)  ->  55 return

*/

function calcRangeSum(begin, end) {
    console.log(`begin: ${begin}, end:${end}`);
    let total = 0;

    for(let i=begin; i<=end; i++){
        total+=i;
    }

    return total;
}

let r1 = calcRangeSum(1,100);
console.log(`r1 = ${r1}`);

let r2 = calcRangeSum();
console.log(`r2 = ${r2}`);

//매개변수의 기본값
function sayHello(lang='한국어') {    

    if(lang === '한국어'){
        console.log(`안녕하세요! `);
    }

    else if(lang === '영어'){
        console.log(`hello! `);
    }

    else if(lang === '중국어'){
        console.log(`따자하오! `);
    }
    else{console.log('ㅋ');}

}
console.log('================================');
sayHello();
