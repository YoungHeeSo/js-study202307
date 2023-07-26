
for(let i=1; i<=10; i++){
    if(i===5)continue;
    console.log(i);
}
console.log('반복문 끄읕');

while(true){
    let n= +prompt('숫자를 입력해유');

    if(n===0) break;
    else if(n===1) continue;

    alert('아직 안끝났으유');
}
alert('끝났으유');
