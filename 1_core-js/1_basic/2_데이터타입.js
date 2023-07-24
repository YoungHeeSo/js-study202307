
let ageNum=5; //10진수: 5, 2진수: 101
let ageTxt='5'; //10진수 85, 2진수:1010101 
// 데이터 타입이 다르면 연산에 문제가 생김> console.log(ageNum+ageTxt)

//js는 정수, 실수 구분하지 않고 모두 실수 처리
let num=2
console.log(typeof num);
console.log(5/num);

//문자 타입
let s1='str1'; 
let s2="str2"; 
let s3=`str3`; //백틱
console.log(typeof s3);

let tag ='<ul><li><a href="#">link</a></li></ul>'
let tagT=`<ul>
    <li>
        <a href="$">link</a>
    </li>
</ul>`
// ''보단 ``사용을 권장
console.log(tagT);

let userName='루피';
let userAge=5;

let message ='제 이름은 '+userName+' 이고, 나이는 '+userAge+'살 이에요~';
message = `제 이름은 ${userName}이구요~ 나이는 ${userAge}살 이에요~22`;
console.log(message);

// 논리 타입
let flag = false;
//True, FALSE라고 쓰지 말것
console.log(typeof flag);

//undefined타입과 null타입
//unbefined: 변수 만들고 값 안넣어놓은 상태(실수)
//null: 의도적으로 값이 없다는 표현을 하는 상태(고의)
let address='충도대';
address=null;
console.log(address);




