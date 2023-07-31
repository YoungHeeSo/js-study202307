
function addNumber(n1, n2) {
    //반환값: 함수 호출이 끝나면 함수 호출부터 전달될 값
    return n1+n2;

    //반환문 함수의 탈출문, return을 만나면 함수 코드들이 중단된다
    //return 이후의 코드들은 실행되지 않는다
}

let r1 = addNumber(5, 7)
console.log(r1);
console.log(addNumber(10, 20));

//함수의 중첩 호출
//안쪽부터 실행, 같은 레벨이면 왼쪽부터 실행!
let r2 = addNumber(addNumber(addNumber(3, 2), 10), addNumber(5, 8));
console.log(`r2: ${r2}`);

//리턴이 없는 함수: void함수
function multi(n1, n2) {
    let result = n1*n2;
    console.log(`${n1}*${n2}=${result}`);    
}

//void함수는 다른 함수에 담지도 말고
//다른 함수의 매개값으로 쓰지도 말아라
let r3 = multi(4,6);
console.log(`r3: ${r3}`); //undefined

//return의 탈출의 의미
function callName(nickName) {

    //금지어 목록
    let prohibits = ['돌아이', '멍청이', '빠가'];

    if(prohibits.includes(nickName)){
        console.log('♥');
        return;
    }
    console.log(`${nickName}님 하이~~`);
}

console.log('===============');
callName('빠가');

function stopLoop(params) {
    
    while(true){
        let flag = prompt('명령어를 입력하세요!');
        if(flag ==='스톱'){
            return;
        }
        alert(flag);
    }

    alert('수고');
}

//반복문(while, for)만 끝낼려면 break;
//코드자체를 끌낼래면 return을 쓰시우~

stopLoop();
