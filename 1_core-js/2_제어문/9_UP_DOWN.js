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

let rn = Math.floor(Math.random()*50)+1;
let userNum;
let count;

let level = +prompt('1. 상(기회 3번) | 2. 중(기회 6번) | 3. 하(기회 10번)');

if(level===1) count=3;
else if(level===2) count=6;
else count=10;

userNum= +prompt(`1부터 50사이의 무작위 숫자를 ${count}번 안에 맞춰보세요`);

while(true){
    if(userNum>=1||userNum<=50 ){
        if(rn !== userNum){
            count--;
            if(rn>=userNum) {
                userNum= +prompt(`UP! 
                기회가 ${count}번 남았습니다.`);  
            }
            else userNum= +prompt(`DOWN! 
            기회가 ${count}번 남았습니다.`);
        }
        else if(userNum == rn){
            alert(`딩동댕 정답은 ${rn}입니다~`);
            break;
        }
        if(count===0){
            alert(`기회를 모두 소진했습니다. GAME OVER!!`)
            break;
        }
    } 
    if(userNum>50 || userNum<0){
        alert('범위 안에 숫자를 입력해주세요.');
        continue;
    }    
}
