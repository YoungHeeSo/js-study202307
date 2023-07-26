let num =1234567;

//num이 과연 몇자리 수인가?
num=num.toString();
console.log(`자리수: ${num.length}`);

// let count=0;
// while(true){
//     num=Math.floor(num/10);
//     count++;
//     let rest=num%10;
//     if (rest ===0) break;
// }
// console.log(`자리수: ${count}`);

let x=30, y=40;

//문자로 변환
let result = String(x) + y.toString();
console.log(`result=${result}`);

//숫자로 변환
let z='100';
let result2= +z + 200;
console.log(`result2: ${result2}`);

//논리로 변환
let money=7000;
let hasMoney= !!money; 
//!7000에서 7000은 true이므로 !(not)으로 바꿔 false가 된다
//!!7000은 논리변환으로 7000은 true이므로 true
console.log(`돈이 있는가? ${hasMoney}`);

