
//index.html에서 활용할 이벤트 처리, 핸들러 ...

//현재 게산기에 그려질 숫자
let currentResult = 0;








//더하기 버튼 이벤트 핸들러
const addHandler = () =>{
    console.log('+ button click');
    
    //입력창에 입력한 숫자 읽기
    const enteredNumber = + $userInput.value;    
    //로그 생성
    const calcDescriptionLog = `${currentResult} + ${enteredNumber}`;
    //실제 게산 결과 반영
    currentResult +=enteredNumber;
    //화면에 렌더링
    outputResult(currentResult, calcDescriptionLog);

};

//빼기 substractHandler
const substractHandler = () =>{
    console.log('- button click');

    const enteredNumber = + $userInput.value;
    const calcDescriptionLog = `${currentResult} - ${enteredNumber}`;
    currentResult -=enteredNumber;
    outputResult(currentResult, calcDescriptionLog);
};

//곱하기 multiplyHandler
const multiplyHandler = () =>{
    console.log('* button click');

    const enteredNumber = + $userInput.value;
    const calcDescriptionLog = `${currentResult} * ${enteredNumber}`;
    currentResult *=enteredNumber;
    outputResult(currentResult, calcDescriptionLog);
};
//나누기 divideHandler
const divideHandler = () =>{
    console.log('/ button click');

    const enteredNumber = + $userInput.value;
    const calcDescriptionLog = `${currentResult} / ${enteredNumber}`;
    currentResult /=enteredNumber;
    outputResult(currentResult, calcDescriptionLog);
};

//======================이벤트 핸들러 바인딩======================
$addBtn.addEventListener('click', addHandler);
$subtractBtn.addEventListener('click', substractHandler);
$multiplyBtn.addEventListener('click', multiplyHandler );
$divideBtn.addEventListener('click', divideHandler);















