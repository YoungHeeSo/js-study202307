
const URL = 'http://localhost:5000/todos';

const $todoList = document.querySelector('.todo-list');

// 할 일 목록 렌더링 - db.json에 있는 todos를 get요청으로 fetch해서 가져와서 렌더링

// 새로운 할 일 추가 - 할 일을 쓰고 더하기 누르면 post요청으로 db.json에 객체 추가, 렌더링

// 할 일 삭제 - 삭제 버튼을 누르면 delete요청으로 db.json에서 객체 제거, 렌더링
// 할 일 체크 기능 - 체크박스를 누르면 put, patch요청으로 db.json에 done값을 반대값으로 수정,changeEvent걸기
// 할 일 수정 기능 - 초록색버튼을 누르면 수정모드로 진입(인풋창 활성화)
// 인풋창에 새로운 텍스트를 쓰고 확인을 누르면 put,patch요청이 나가고 db.json에서도 수정

//db.json에 있는 todos를 화면에 렌더링하기
const fetchTodos=(url, method='GET', payload=null)=>{

    const requestInit={
        method: method,
        Headers:{'Content-Type': 'application/json'},   
    };

    if(payload){
        requestInit.body=JSON.stringify(payload);
    }

     return fetch(url, requestInit);
};

//화면에 todos를 렌더링 하는 함수
const retherTodos = (todoList)=>{
    //li태그의 템플릿을 가져온다
    const $liTemplate = document.getElementById('single-todo');
    todoList.forEach(({id, text, done}) => {
        // console.log(todo);        
        const $newLi = document.importNode($liTemplate.content, true); //하나의 li태그를 가져올 수 있어
        $newLi.querySelector('li').dataset.id=id; //date-id속성부여
        $newLi.querySelector('.text').textContent=text;

        //체크박스 가져오기
        const $checkbox = $newLi.querySelector('.checkbox input[type=checkbox]');
        // console.dir($checkbox);
        $checkbox.checked=done;

        if(done) {
            done && $checkbox.parentNode.classList.add('checked');
        }

        $todoList.appendChild($newLi);
    });
};

// ============= 앱 실행 ================ 
const init=()=>{
    fetchTodos(URL)
    .then(res=>res.json())
    .then(todos=>{
        retherTodos(todos); 
    });
};

init();