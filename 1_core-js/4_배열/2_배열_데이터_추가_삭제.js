
let pets=['멍멍이', '냐옹이', '쩝쩝이'];
console.log(pets);

//배열 맨 끝에 데이터 추가
pets.push('징징이');
pets.push('어흥이','거부기','콩콩이');
console.log(pets, pets.length);

//맨 끝에 데이터 지우기
let r1=pets.pop();
pets.pop();
let r3=pets.pop();
console.log(pets);
console.log(`r1=${r1}`);
console.log(`r3=${r3}`);

//별로 추천은 안함
//배열의 맨 첫 위치에 데이터 추가
pets.unshift('구구긔');
console.log(pets);

//맨 첫 데이터 제거
pets.shift();
console.log(pets);
