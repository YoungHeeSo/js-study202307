
let myPet={
    name:"뽀삐", 
    age:3, 
    favorite:["산책","간식"], 
    kind:"진돗개", 
    injection:true
};

let yourPet={
    name:"콩순이", 
    kind:"블랙러시안", 
    age:4, 
    favorite:["낮잠","털뭉치"], 
    injection:true,
    'hate-food': '양념게장'
    //특수기호나 한글로 키값을 만들 수 있다!!
};


console.log(typeof myPet); // object

// 객체에 저장된 데이터(프로퍼티) 참조
console.log(typeof myPet.kind);
console.log(yourPet.kind);
console.log(myPet.name);
console.log(typeof yourPet.favorite[0]); //object = array

myPet.favorite.push('꼬리흔들기');
console.log(myPet);
//데이터 타입에 따라 할 수 있는 작업이 달라진다
// yourPet.favorite이라면 배열이므로 push, yourPet.favorite[0]같은 기능을 사용할 수 있다

//키값쌍 == 프로퍼티, yourPet의 프로퍼티가 5개이다
// 프로퍼티 참조2
console.log('===========================');
console.log(myPet.injection);
console.log(myPet['injection']);// ★

console.log(yourPet['hate-food']);

let myPetName = 'name';
console.log(myPet[myPetName]); // == myPet['name']


