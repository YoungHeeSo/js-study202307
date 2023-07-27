let phone={
    company:'삼성',
    color:'펄 화이트',
    model:'갤럭시 S23',
    price: 1200000
}; //객체 형태> 변수={};

//프로퍼티 값 수정
phone.company = '애플';
phone['model'] = '아이폰 14';

console.log(phone);

//프로퍼티 동적 추가
phone.madeDate='2023-03-05';
console.log(phone); //프로퍼티가 없으면 추가, 있으면 수정된다!

//프로퍼티 동적 삭제
delete phone.price;
console.log(phone);

//객체의 반복문 for~in
for (let x in phone) { //for (변수 in 객체){}
    console.log('==============================');
    // console.log(typeof x); // string
    console.log(`key: ${x}`); //키가 반복
    console.log(`valur: ${phone[x]}`); //키값이 반복됨    
}

console.log('===============================');

//객체에 key존재 유무 확인
let flag='index' in phone; //phone 안에 index라는 키가 있는지 없는지 true, false값을 반환
console.log(flag);

let key = 'company';
if(key in phone){ //phone 안에 key(company)값이 있는지 없는지
    console.log('수정하시는거죠?');
}else{console.log('추가하시는거죠?');}