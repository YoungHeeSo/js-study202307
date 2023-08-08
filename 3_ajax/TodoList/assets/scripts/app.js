
const URL = 'http://localhost:5000/todos';

fetch(URL)
    .then(res=>res.json())
    .then(list=>{
        console.log(list);
});


// 할 일 목록 렌더링 - db.json에 있는 todos를 get요청으로 fetch해서 가져와서 렌더링
fetch(URL)
    .then(res=>res.json())
    .then(todo=>{
        const $todoList = document.querySelector('.todo-list');
        todo.forEach(({id, text}) => {
            const $todoLi = document.importNode($todoList, true);

            $todoLi.querySelector("li").dataset.postId = id;
            $todoLi.querySelector("span").textContent = text;

            console.log($todoLi);
            console.log(id, text);
        });

    });

// 새로운 할 일 추가 - 할 일을 쓰고 더하기 누르면 post요청으로 db.json에 객체 추가, 렌더링

// 할 일 삭제 - 삭제 버튼을 누르면 delete요청으로 db.json에서 객체 제거, 렌더링
// 할 일 체크 기능 - 체크박스를 누르면 put, patch요청으로 db.json에 done값을 반대값으로 수정,changeEvent걸기
// 할 일 수정 기능 - 초록색버튼을 누르면 수정모드로 진입(인풋창 활성화)
// 인풋창에 새로운 텍스트를 쓰고 확인을 누르면 put,patch요청이 나가고 db.json에서도 수정
