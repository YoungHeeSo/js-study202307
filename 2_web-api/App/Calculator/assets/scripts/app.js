
//index.html에서 활용할 이벤트 처리, 핸들러 ...

//연산 타입을 상수로 관리
const ADD = 'ADD';
const SUB = 'SUB';
const MULTI = 'MULTI';
const DIVID = 'DIVID';

//계산 이력을 모아둘 배열
const logEntries=[];

//현재 게산기에 그려질 숫자
let currentResult = 0;
let seq=0;

//operation 기호 받는 함수
const convertOperationToMark = (operation) =>{
    let mark;
    switch (operation) {
        case ADD:
            mark='+';
            break;
        case SUB:
            mark='-';
            break;
        case MULTI:
            mark='*';
            break;
        case DIVID:
            mark='/';
            break;
    }
    return mark;
}

//로그 이력을 렌더링하는 함수
const renderToLog=({operation, prevResult: firstNumber, number:secondNUmber, result})=>{
    //li태그 생성
    const $newLi = document.createElement('li');
    $newLi.classList.add('log-entries__item');
    $newLi.textContent=`#${++seq}. ${firstNumber} ${convertOperationToMark(operation)} ${secondNUmber} = ${result}`;

    //ul태그 추가
    $logEntries.appendChild($newLi);   
}

//로그 이력을 만드는 함수
const writeToLog=( operation, prevResult, number, result)=>{
    //하나의 로그 객체(연산, 이전결과, 연산숫자, 연산결과)
    const logObject={
        operation, //mark
        prevResult, 
        number,
        result
    };
    logEntries.push(logObject);
    console.log(logEntries);

    renderToLog(logObject);
};

//사용자의 입력값을 읽어오는 함수
const getUserNumberInput =()=> + $userInput.value;

//계산 로그를 만들고 화면에 렌더링하는 함수
const createLogAndRenderOutput=(operateMark, originResult, calcNumber)=>{
    //로그 생성
    const calcDescriptionLog = `${originResult} ${operateMark} ${calcNumber}`;
    //화면에 렌더링
    outputResult(currentResult, calcDescriptionLog);
}

//계산 기능 헬퍼 함수
const calculate = (type)=>{
    //계산 전 값 백업
    const originResult = currentResult;
    //입력창에 입력한 숫자 읽기
    const enteredNumber = getUserNumberInput();      

    let mark;
    if(type === 'ADD'){
        mark='+';
        //실제 계산 결과 반영
        currentResult+=enteredNumber;
    }
    else if(type === 'SUB'){
        mark='-';
        currentResult-=enteredNumber;
    }
    else if(type === 'MULTI'){
        mark='*';            
        currentResult*=enteredNumber;
    }
    else {
        mark='/';
        currentResult/=enteredNumber;
    }

    console.log(`${mark} button click`);

    // const getUserNumberInput =()=> + $userInput.value;
    createLogAndRenderOutput(mark,originResult, enteredNumber);
    //로그이력쌓기
    writeToLog(type, originResult, enteredNumber, currentResult);

    // const createLogAndRenderOutput=(operateMark, originResult, calcNumber)=>{   
    //     const calcDescriptionLog = `${originResult} ${operateMark} ${calcNumber}`;
    //     outputResult(currentResult, calcDescriptionLog);
    // };
};

//더하기 버튼 이벤트 핸들러
const addHandler = () =>{
    calculate('ADD');
 
};

//빼기 substractHandler
const substractHandler = () =>{
    calculate('SUB');
};

//곱하기 multiplyHandler
const multiplyHandler = () =>{
    calculate('MULTI');
};
//나누기 divideHandler
const divideHandler = () =>{
    calculate('DIVID');
};

//======================이벤트 핸들러 바인딩======================
$addBtn.addEventListener('click', addHandler);
$subtractBtn.addEventListener('click', substractHandler);
$multiplyBtn.addEventListener('click', multiplyHandler );
$divideBtn.addEventListener('click', divideHandler);




