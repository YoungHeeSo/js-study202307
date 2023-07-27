/*
  Q. n개의 정수를 전달하면 해당 정수들의 총합과 평균을 
     반환하는 함수 calcNumbersTotalAndAverage를 작성하세요.
*/

let total = 0;

function calcNumbersTotalAndAverage(...numbers){

  for(let i of numbers){
    total+=i;
  }

  let avg = total/numbers.length;

  return {total: total, avg: avg}; 
  //키랑 값을 저장한 변수랑 같은 이름으로 사용해도 되는듯 하다
}

let result = calcNumbersTotalAndAverage(90, 80, 100, 90); //360과 90이 리턴되어야 함!
console.log(`총합: ${result.total}, 평균: ${result.avg}`);