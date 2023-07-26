
let one = + prompt('첫번째 숫자 입력');
let two = + prompt('두번째 숫자 입력');
let sum=0;

if(one>two){
    let t = one;
    one = two;
    two = t;
}

for(let i=one; i<=two; i++){
    sum+=i;
}
alert(`${one}~${two}까지의 누적합: ${sum}`);

    
