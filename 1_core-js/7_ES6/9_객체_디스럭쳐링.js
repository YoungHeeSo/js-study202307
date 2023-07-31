
const emp ={
    empNmae: '뽀로로',
    age: 4,
    hireDate: '2020-01-01',
    birthDay: '2020-01-01'
};

const {empNmae, birthDay, age}=emp;
console.log(`내 이름은 ${empNmae}이고, 나이는 ${age}살 입니다. 그리고 생일 ${birthDay} 입니다`);

//변수 이름이 안겹치게 다른 별칭을 지어줄 수 있어~
const {empNmae:en , birthDay: bd, age: a}=emp;
console.log(`내 이름은 ${en}이고, 나이는 ${a}살 입니다. 그리고 생일 ${bd} 입니다`);

const {birthDay: bDay, ...others} = emp;
console.log('=========================');
console.log(others);

//객체 복사
console.log('=========================');
//카피본의 변경사항이 원본에도 공유되지 않는 상태

const copyEmp = { 
    ...emp,
    address: '청양군',
    hobbies: ['산책', '수영'],
    age: 17
};
copyEmp.empNmae = '잔망루피';

console.log(copyEmp);
console.log('============================');
console.log(emp);



























