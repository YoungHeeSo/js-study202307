let count=1;
let userAns;
let ans;
let numran;
let level;
let corr=0;
let wron=0;

alert('즐겁게 문제를 푸시다가 지겨우면 0을 누르세요~');
level= +prompt(`1. 상(1~100) | 2. 중(1~50) | 3.하(1~20)`);
if(level===1) {
    numran = 100;
}

else if(level===2){
    numran=50;  
}

else if(level===3){
    numran=20;
} 

while(true){
//Math.floor(Math.random()*(y-x+1))+x;
    let x = Math.floor(Math.random()*(numran-1+1))+numran;
    let y = Math.floor(Math.random()*(numran-1+1))+numran;
    let z = Math.floor(Math.random()*3-1+1)+1;  
    alert(`${z}`);

    if(z==1) {
        ans = x+y;
        userAns= +prompt(`Q${count}. ${x} + ${y} = ??`);
    }
    else if(z==2) {
        ans = x-y;
        userAns= +prompt(`Q${count}. ${x} - ${y} = ??`);
    }
    else if(z==3) {
        ans = x*y;
        userAns= +prompt(`Q${count}. ${x} * ${y} = ??`);
    }count++;

    
    if(userAns === ans){
        alert('정답 입니다~');
        corr++;
    }
    
    else if(userAns !== ans){
        if(userAns===0){
            alert('게임을 종료합니다!');
            alert(`정답횟수: ${corr}, 틀린횟수: ${wron}`);
            break;
        }
        alert('틀렸어요~');
        wron++;
    }
    
}
