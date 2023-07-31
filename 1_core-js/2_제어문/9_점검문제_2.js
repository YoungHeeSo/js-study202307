// 1 ~ 100 사이의 랜덤한 숫자하나가 정답으로 주어진다.
// 사용자는 이 사이의 숫자를 입력할 수 있어야 한다.
// 시스템은 입력한 숫자를 판단하여 up인지 down인지 알려줘야 한다.
// 만약 정답을 맞추지 못하면 지속해서 입력을 받고 결과를 알려준다.
// 정답을 맞추면 맞췄다는 메시지와 함께 프로그램을 종료한다.

// 사용자들은 입력 기회가 5번으로 제한된다. 
// 즉, 5번 안에 정답을 맞추지 못할 경우 게임이 강제종료된다.

// 사용자는 게임 시작전에 난이도를 설정할 수 있다. 
// 난이도는 상, 중, 하 난이도가 존재하며 
// 난이도별 입력 횟수제한이 다르다.

//난이도 상수
const HIGH=1;
const MIDDLE=2;
const LOW=3;

//초기 난이도 설정 선택창 띄우기
let level = +prompt('난이도를 선택하세요!\n# [1. 상(3번의 기회) | 2. 중(6번의 기회) | 3. 하(10번의 기회)]');

//초기 카운트 수
let initCount;

if(level===HIGH){
    initCount=3;
}else if(level===MIDDLE){
    initCount=6;    
}else if(level===LOW){
    initCount=10;    
}else{
    alert(`난이도 상으로 자동 시작합니다~`);
    initCount=3;
}

//카운트다운 변수
let countDown = initCount;

//실제로 정답으로 사용할 랜덤정수 만들기
let secret =  Math.floor(Math.random()*100)+1

// 입력 최소, 최대값
let min=1, max=100;

while(true){

    // 사용자의 정답 입력값
    let answer = +prompt(`숫자를 입력하세요. ${min}~${max}`);

    //입력값 유효성 검사
    //지금 입력 범위 안의 값인가를 검사
    if(answer<min || answer>max){
        alert(`범위 안에 값을 입력하세요.`);
        continue;
    }
    
    //카운트 감소
    countDown--;
    
    //업 다운 판단
    //정답인 경우
    if(secret===answer){
        alert(`정답 입니다! ${initCount - countDown}번만에 맞췄습니다.`);
        break;
    }else if(secret > answer){
        alert(`UP!`);
        min=answer+1;
    }else {
        alert(`DOWN!`);
        max=answer-1;
    }

    //추가 게임 종료 조건
    if(countDown === 0){
        alert(`틀렸어요 정답은 ${secret}입니다.`);
        break;
    }else{
        alert(`${countDown}번의 기회가 남았습니다`);
    }

} // end while loop
alert(`게임 종료`);









// let rn = Math.floor(Math.random()*50)+1;
// let userNum;
// let count;

// let level = +prompt('1. 상(기회 3번) | 2. 중(기회 6번) | 3. 하(기회 10번)');

// if(level===1) count=3;
// else if(level===2) count=6;
// else count=10;

// userNum= +prompt(`1부터 50사이의 무작위 숫자를 ${count}번 안에 맞춰보세요`);

// while(true){
//     if(userNum>=1||userNum<=50 ){
//         if(rn !== userNum){
//             count--;
//             if(rn>=userNum) {
//                 userNum= +prompt(`UP! 
//                 기회가 ${count}번 남았습니다.`);  
//             }
//             else userNum= +prompt(`DOWN! 
//             기회가 ${count}번 남았습니다.`);
//         }
//         else if(userNum == rn){
//             alert(`딩동댕 정답은 ${rn}입니다~`);
//             break;
//         }
//         if(count===0){
//             alert(`기회를 모두 소진했습니다. GAME OVER!!`)
//             break;
//         }
//     } 
//     if(userNum>50 || userNum<0){
//         alert('범위 안에 숫자를 입력해주세요.');
//         continue;
//     }    
// }
