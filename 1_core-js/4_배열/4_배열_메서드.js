
let foodList =['닭꼬치', '햄버거', '짜장면', '피자'];

let findTarget='닭꼬치';

// let index=-1;
// for(let i=0; i<foodList.length; i++){
//     if(findTarget===foodList[i]){
//         index=i;
//         break;
//     }
// }

//indexOf: 배열의 특정요소가 몇번째 인덱스에 있는지 탐색
//중복이라면 처음 발견된 인덱스 번호를 가져온다
let index=foodList.indexOf(findTarget);
console.log(`찾은 인덱스: ${index}`);

//include(): 배열의 특정 요소가 존재하는지 논리여부확인
let isPresent=foodList.includes('피자');
console.log(`존재여부: ${isPresent}`);

//slice(): 배열의 일정부분을 잘라내어, 복사본 배열을 반환
console.log('===========================');
foodList.push('오뎅', '국밥');
console.log(foodList);

//앞에서 3개만 추출하고 싶을때
let slicedFoodList=foodList.slice(1,3);//0이상 3미만
console.log(slicedFoodList);
console.log(foodList); //sliced는 원본을 잘라내지 않고 복사본을 불러내서 하기에 원본 손상이 없다

//3번 부터 끝까지
let sliced2 = foodList.slice(3);
console.log(sliced2);

//원본 배열을 그대로 복사
let copyArr = foodList.slice();
console.log(copyArr);

//reverse() :배열을 역순으로 정렬, 원본이 변하는것에 주의
console.log('==============');
let arr1=[10, 20, 30];
let arr2=[9,7,5,3,1];

arr1.reverse();
console.log(arr1);

let arr2Copy = arr2.slice();
arr2Copy.reverse();
console.log(arr2Copy);
console.log(arr2);

//concat(): 베열 2개를 결합, 결합한 사본을 리턴
console.log('=====================================');

let concated = arr1.concat(arr2);
console.log(concated);

//splice(): 배열의 특정요소 제거, 삽입...
console.log('==============================');
console.log(foodList);

foodList.splice(3, 1); //(인덱스 번호부터, 몇개 지워)
console.log(foodList);

foodList.splice(2, 1, '보쌈');
console.log(foodList);

foodList.splice(1, 0, '마라탕');
console.log(foodList);

// 배열 전체 삭제
// foodList.splice(0);
foodList=[];
console.log(foodList);