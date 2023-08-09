
const URL = 'http://localhost:5000/todos';

const $todoList = document.querySelector('.todo-list');

// 할 일 목록 렌더링 - db.json에 있는 todos를 get요청으로 fetch해서 가져와서 렌더링
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

// 새로운 할 일 추가 - 할 일을 쓰고 더하기 누르면 post요청으로 db.json에 객체 추가, 렌더링
const addtodoHandler=e=>{
    //클릭 이벤트 확인
    // console.log('클클릭');
    
    //클릭하면 input text를 읽어야 해
    const $textInput = document.getElementById('todo-text');
    // console.log($textInput);

    //input안에 text 꺼내기
    const inputText= $textInput.value;
    // console.log(inputText);

    //서버에 데터 보내고 저장
    //fetch기 필요해, 저장이므로 POST
    //payload api스펙에 맞게 만들어
    const payload={
        text: inputText,
        done: false
    };

    fetchTodos(URL, 'POST', payload)
    .then(res=>{
        if(res.status===200|| res.status===201){
            console.log('등ㄹ록');
        }else{
            console.log('노등ㄹ록');
        }
    });   
};

//할 일 등록 기능
const $addBtn=document.getElementById('add');
$addBtn.addEventListener('click', addtodoHandler);

// 할 일 삭제 - 삭제 버튼을 누르면 delete요청으로 db.json에서 객체 제거, 렌더링
const deleteTodoHandler=e=>{
    if(!e.target.matches('.remove span')) return;
    console.log('삭제클릭');
    
    //특정 할 일을 지우기 위해선, 클릭한 할 일의 id값을 알아야 해
    //자식은 query 부모는 closest
    const id = e.target.closest('.todo-list-item').dataset.id;
    // console.log(id);

    //서버에 삭제 요청하기
    fetchTodos(`${URL}/${id}`, 'DELETE')
    .then(res=>{
        if(res.status===200|| res.status===201){
            console.log('등ㄹ록');
        }else{
            console.log('노등ㄹ록');
        }
    });    
};

$todoList.addEventListener('click', deleteTodoHandler);

// 할 일 체크 기능 - 체크박스를 누르면 put, patch요청으로 db.json에 done값을 반대값으로 수정,changeEvent걸기
// 할 일 수정 기능 - 초록색버튼을 누르면 수정모드로 진입(인풋창 활성화)
// 인풋창에 새로운 텍스트를 쓰고 확인을 누르면 put,patch요청이 나가고 db.json에서도 수정

// ============= 앱 실행 ================ 
const init=()=>{
    fetchTodos(URL)
    .then(res=>res.json())
    .then(todos=>{
        retherTodos(todos); 
    });
};

init();