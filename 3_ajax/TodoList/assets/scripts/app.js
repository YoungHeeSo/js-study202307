
const URL = 'http://localhost:5000/todos';

const $todoList = document.querySelector('.todo-list');

// 할 일 목록 렌더링 - db.json에 있는 todos를 get요청으로 fetch해서 가져와서 렌더링
//db.json에 있는 todos를 화면에 렌더링하기
const fetchTodos=(url, method='GET', payload=null)=>{

    const requestInit={
        method: method,
        headers:{'Content-Type': 'application/json'},   
    };

    if(payload){
        requestInit.body=JSON.stringify(payload);
    }

     return fetch(url, requestInit);
};

// 3. 헤더 일정관리 텍스트에   '  일정 관리 (3 / 6개 완료됨) '

// #1
// const $headtodo = document.querySelector('.app-title'); 

// fetch(URL)
//     .then(res=>res.json())
//     .then(list=>{
//         console.log(list);
//         let count=0;
//         list.forEach((tag)=>{
//             if(tag.done===true)
//                 count++;

//             return count;
//         })
//         $headtodo.textContent+=`(${count}/${list.length} 완료됨)`;
//     });

// #2
const renderRestTodo = todoList => {
    // 총 할 일 개수
    const totalTodos = todoList.length;
    // 완료된 할 일의 개수
    const restTodos = todoList.filter(todo => todo.done).length;
  
    // 렌더링 처리
    const $rest = document.querySelector('.rest-todo');
    if (totalTodos > 0) {
      $rest.textContent = `( ${restTodos} / ${totalTodos} )`;
    }
  };
  

//화면에 todos를 렌더링 하는 함수
const retherTodos = (todoList)=>{
    //할 일 완료 개수 렌더링
    renderRestTodo(todoList);

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

        done && $checkbox.parentNode.classList.add('checked');

        $todoList.appendChild($newLi);
    });
};


//async await//
const inserTodo= async function(payload){

    fetchTodos(URL, 'POST', payload);
    
    const res = await fetchTodos(URL, 'POST', payload);
    
    if(res.status===200|| res.status===201){
        console.log('등ㄹ록');
    }else{
        console.log('노등ㄹ록');
    }
};


// 새로운 할 일 추가 - 할 일을 쓰고 더하기 누르면 post요청으로 db.json에 객체 추가, 렌더링
const addTodoHandler=e=>{
    //클릭 이벤트 확인
    // console.log('클클릭');
    
    //클릭하면 input text를 읽어야 해
    const $textInput = document.getElementById('todo-text');    
    
    //input안에 text 꺼내기
    const inputText= $textInput.value;

    // 2. 아무것도 입력안하거나 스페이바만 쭉치고 입력했을 때 등록 거절
    //    ( alert을 띄워도좋고, 모달을 띄워도 좋고, 스타일을 변경해도 좋음 )    
    if(inputText.trim()==='') {
        alert('빈칸!');

        $textInput.style.background='red';
        $textInput.setAttribute('placeholder', '공백은 안돼');

        return;
    }

    //서버에 데이터 보내고 저장
    //fetch기 필요해, 저장이므로 POST
    //payload api스펙에 맞게 만들어 데이터를 보내야 해
    const payload={
        text: inputText,
        done: false
    };

    fetchTodos(URL, 'POST', payload)
    .then(res => {
      if (res.status === 200 || res.status === 201) {
        console.log('등록 성공!');
      } else {
        console.log('등록 실패!');
      }
    });

    // inserTodo(payload);
};


// 1. 할 일 입력 후 엔터쳐도 등록이 되도록… 구현
// const addTodoEnterHandler=e=>{
//     if(e.key==='Enter'){
//         $addBtn.click();        
//     }
// };

//addinput enterkey
// const $addInput = document.getElementById('todo-text');
// $addInput.addEventListener('keydown', addTodoEnterHandler);


//할 일 등록 기능
//addBtn click
const $addBtn=document.getElementById('add');
$addBtn.addEventListener('click', addTodoHandler);


// 엔터이벤트
const $textInput = document.getElementById('todo-text');
$textInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    $addBtn.click();
  }
});

//form의 submit이벤트 중단시키자
document.querySelector('.todo-insert').addEventListener('submit', e=>{
    e.preventDefault();
});




// 할 일 삭제 - 삭제 버튼을 누르면 delete요청으로 db.json에서 객체 제거, 렌더링
const deleteTodoHandler=e=>{
    if(!e.target.matches('.remove span')) return;
    if(!confirm('일정을 삭제해요?')) return;
    // console.log('삭제클릭');
    
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
//할 일 완료 체크 처리
const checkTodoHandler=e=>{
    // console.log('체크 박스 누름', e.target);
    
    //서버에 수정요청을 보내서 누른 할 일의
    //done을 반대값으로 수정해야하는데...
    //체크값이 t,f인지 알아야 해
    console.log('이전 상태가 아닌 현재 상태의 체크', e.target.checked);
    
    const id = e.target.closest('.todo-list-item').dataset.id;

    (async ()=>{
        const res = await fetchTodos(`${URL}/${id}`,'PATCH',{
            done: e.target.checked
        });
    })();
    
};

$todoList.addEventListener('change', checkTodoHandler);

// 인풋창에 새로운 텍스트를 쓰고 확인을 누르면 put,patch요청이 나가고 db.json에서도 수정
// 할 일 수정 기능 - 초록색버튼을 누르면 수정모드로 진입(인풋창 활성화)
//할 일 수정 처리

//수정 모드 진입하는 함수
const enterModifyMode=($undo)=>{
    //클래스 이름을 변경하여 아이콘을 바꾸자
    //클릭한 span태그의 노드를 가져와야해

    // $undo.classList.remove('lnr-undo',);
    // $undo.classList.add('lnr-checkmark-circle');
    $undo.classList.replace('lnr-undo', 'lnr-checkmark-circle');

    //$undo근처에 있는 span.text를 가져와
    const $textSpan = $undo.closest('.todo-list-item').querySelector('.text'); //undo의 조상중에 후손이 text인걸 찾아
    // console.log($textSpan);
    
    //교체할 input을 생성
    const $modInput = document.createElement('input');
    $modInput.classList.add('modify-input');
    $modInput.setAttribute('type', 'text');
    $modInput.value=$textSpan.textContent;
    
    //span을 input으로 교체
    const $label = $textSpan.parentNode;
    $label.replaceChild($modInput, $textSpan);
};

const modifyTodo=($checkMark)=>{
    const $li = $checkMark.closest('.todo-list-item');
  const id = $li.dataset.id;
  const newText = $li.querySelector('.modify-input').value;
  
  fetchTodos(`${URL}/${id}`, 'PATCH', {
    text: newText
  });

};

//수정 이벤트 처리 핸들러
const modifyTodoHandler=e=>{
    if(e.target.matches('.modify span.lnr-undo')) {
        enterModifyMode(e.target); //수정 모드 진입하기
    }else if(e.target.matches('.modify span.lnr-checkmark-circle')){
        modifyTodo(e.target); //서버에 수정 요청 보내기
    }
};

$todoList.addEventListener('click', modifyTodoHandler);

// ============= 앱 실행 ================ 
const init=()=>{
    fetchTodos(URL)
    .then(res=>res.json())
    .then(todos=>{
        retherTodos(todos); 
    });
};

init();