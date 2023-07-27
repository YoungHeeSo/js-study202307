
//multi parameter: 매개변수의 개수가 n개일 경우
// n갤ㄹ 하나의 박스(배열, 객체)에 담아서 전달하자!

//정수 n개의 총합(ES5)
function addall(numbers) {
    let total=0;
    for(let n of numbers){
        total+=n;
    }
    return total;
}
let r1 = addall([10, 20, 30]);
console.log(r1);

//정수 n개의 총합(ES6) - 스프레드
function addallEs6(...numbers) {
    
    let total=0;
    
    for(let n of numbers){
        total+=n;
    }
    
    return total;
    
}

let r2 = addallEs6(10, 20, 30, 40, 60);
console.log(r2);

//배열을 두개를 보낼때는 (number, other) 
//([10, 20, 30], [50, 60, 80]) 이런식으로 나눠서 써주자

//다중 반환값
//함수의 반환값은 언제나 하나여야 한다!
//f(x) = 3a + 5b + 4c;

//2개의 정수를 전달하면 두 수의 덧셈, 뺄샘, 곱셈, 나눗셈을 반환받고 싶다.
function operateAll(n1, n2) {

    return {
        plus: n1+n2,
        minus: n1-n2,
        multi: n1*n2,
        divide: n1/n2
    };

}//그렇다면 배열이나 객체로 묶어서 리턴하라!

let results = operateAll(10, 20);
console.log(results);
// console.log(results[0]); //덧셈만 받고싶다면? 배열의 0번 인덱스를 가져와라!
// console.log(operateAll(4, 5)[2]); 

//사실 배열은 적합한 방법이 아님, 우린 인덱스 번호를 알아서 불러올 수 있지만 다른사람들은?
//또한 배열이 바뀌면 인덱스번호가 바뀌면 깨질 수 있다




