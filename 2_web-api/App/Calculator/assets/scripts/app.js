
//index.html에서 활용할 이벤트 처리, 핸들러 ...

//계산 이력을 모아둘 배열
const logEntries=[];

//현재 게산기에 그려질 숫자
let currentResult = 0;

//로그 이력을 만드는 함수
const writeToLog=( operation, prevResult, number, result)=>{
    //하나의 로그 객체(연산, 이전결과, 연산숫자, 연산결과)
    const logObject={
        operation,
        prevResult, 
        number,
        result
    };
    logEntries.push(logObject);
    console.log(logEntries);
};

//더하기 버튼 이벤트 핸들러
const addHandler = () =>{
    console.log('+ button click');

    //사용자의 입력값을 읽어오는 함수
    const getUserNumberInput =()=> + $userInput.value;

    //계산 로그를 만들고 화면에 렌더링하는 함수
    const createLogAndRenderOutput=(operateMark, originResult, calcNumber)=>{
        //로그 생성
        const calcDescriptionLog = `${originResult} ${operateMark} ${calcNumber}`;
        //화면에 렌더링
        outputResult(currentResult, calcDescriptionLog);
    }
    
    
    //입력창에 입력한 숫자 읽기
    const enteredNumber = getUserNumberInput();      
    //계산전 값을 백업
    const originResult = currentResult;
    //실제 게산 결과 반영
    currentResult +=enteredNumber;
    createLogAndRenderOutput('+',originResult, enteredNumber);
    //로그이력쌓기
    writeToLog('ADD', originResult, enteredNumber, currentResult);

};

//빼기 substractHandler
const substractHandler = () =>{
    console.log('- button click');

    const enteredNumber = getUserNumberInput();
    const originResult = currentResult;
    currentResult -=enteredNumber;
    outputResult('-',originResult, calcDescriptionLog);
    writeToLog('SUB', originResult, enteredNumber, currentResult);
};

//곱하기 multiplyHandler
const multiplyHandler = () =>{
    console.log('* button click');

    const enteredNumber = getUserNumberInput();
    const calcDescriptionLog = `${currentResult} * ${enteredNumber}`;
    currentResult *=enteredNumber;
    outputResult(currentResult, calcDescriptionLog);
    writeToLog('MULTI', originResult, enteredNumber, currentResult);
};
//나누기 divideHandler
const divideHandler = () =>{
    console.log('/ button click');

    const enteredNumber = getUserNumberInput();
    const calcDescriptionLog = `${currentResult} / ${enteredNumber}`;
    currentResult /=enteredNumber;
    outputResult(currentResult, calcDescriptionLog);
    writeToLog('DIVID', originResult, enteredNumber, currentResult);
};

//======================이벤트 핸들러 바인딩======================
$addBtn.addEventListener('click', addHandler);
$subtractBtn.addEventListener('click', substractHandler);
$multiplyBtn.addEventListener('click', multiplyHandler );
$divideBtn.addEventListener('click', divideHandler);















