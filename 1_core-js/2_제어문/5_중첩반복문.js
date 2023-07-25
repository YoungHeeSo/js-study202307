
//구구단출력
let level;
for(level=2; level<=9; level++){
    console.log(`=== 구구단 ${level}단 ===`);
    for(let line =1; line<=9; line++){
    console.log(`${level} x ${line} = ${level*line}`);
}
console.log(`===================`);
}

let count=0;
for(let i=0; i<3; i++){ //3회
    for(let j=0; j<2; j++){ //2회
        for(let k=0; k<4; k++){
            console.log(`${i}, ${j}`); //3*2=6회
            count++;
        }
    }
}
console.log(`총 반복횟수: ${count}`);
