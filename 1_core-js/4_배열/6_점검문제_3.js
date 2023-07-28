/*
- Quiz. 
아래 요구사항에 맞는 코드를 작성하고 
브라우저에서 실행하여 테스트하세요.
- 요구사항
1. 변수에 배열 ['유노윤호', '최강창민', '영웅재중', '믹키유천', '시아준수']을 저장하세요.   
2. 사용자에게 수정할 멤버 이름과 새로운 이름을 입력받고 
  해당 멤버를 수정한 뒤 수정 완료 후의 배열을 출력해서 보여주세요.
3. 배열에 없는 이름을 입력하면 'xxx는 잘못된 이름입니다.'라고 출력한 후 
   다시 수정할 이름을 입력할 수 있도록 하세요.
4. 한 명의 멤버를 정확하게 수정할때까지 프로그램은 계속되어야 합니다.
*/

let member = ['유노윤호', '최강창민', '영웅재중', '믹키유천', '시아준수'];
let tryMember;
let newMember;

while(true){

  tryMember = prompt(`멤버: [${member}]\n수정할 멤버 이름을 입력해주세요.`);
  let index = member.indexOf(tryMember);  
  
  if(tryMember==='-1'){
    alert('프로그램을 종료합니다');
    break;
  }
  else if(tryMember!==member[index]){
    alert(`${tryMember}는 잘못된 이름입니다.`);
  }  

  else if(tryMember===member[index]){
    newMember = prompt(`새로 추가할 멤버 이름을 입력해주세요.`);
    let newNum = member.splice(index, 1, newMember);
  }

  
}

//풀이
// let tvxq = ["유노윤호", "최강창민", "영웅재중", "믹키유천", "시아준수"];

// let updateTarget = prompt(
//   `현재 멤버: [${tvxq}]\n수정할 멤버의 이름을 입력하세요!`
// );

// // delTarget을 수정
// if (tvxq.includes(delTarget)) {
//   // 수정 진행
//   // 새로운 이름을 입력받아야 함
//   let newName = prompt(`새로운 이름을 입력해주세요!`);
//   let index = tvxq.indexOf(updateTarget);
  
//   tvxq[index] = newName;

//   alert(`수정 완료!\n현재 멤버: [${tvxq}]`);
// } else {
//   alert(`${updateTarget}은(는) 잘못된 이름입니다.\n다시 입력하세요!`);
// }
