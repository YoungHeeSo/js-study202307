
//ul태그
const $postUl = document.querySelector('.posts');

const $addForm= document.querySelector('#new-post form');
// console.log($addForm);

//서버에서 게시물들을 가져와서 화면에 렌더링하는 함수
const fetchGetPosts = ()=>{
    //서버와 통신하기(게시물 정보 100개 불러오기)
    const xhr = new XMLHttpRequest();
    // console.log(xhr);
    
    //통신정보 전달
    /*
    HTTP method
    - GET: 리스트를 조회(게시물 조회, 마이페이지 회원정보 조회)
    - POST: 리소스를 등록(게시물 쓰기, 회원가입, 장바구니 담기)
    - PUT: 리소스를 일괄수정(게시물의 모든 정보를 통채로 수정)
    - PATCH: 리소스를 일부수정(게시물의 제목만 수정)
    - DELETE: 리소스를 삭제(게시물 지우기, 회원탈퇴, 좋아요 취소)
    */
    
    //요청 정보 초기화(초기값 세팅)
    xhr.open('GET', 'http://localhost:5000/posts');
    
    //요청 보내기
    xhr.send();
    
    //응답 데이터 가져오기
    xhr.onload=e=>{
        //요청이 끝난후 xhr객체를 보면 응답 정보가 들어있어
        // console.log(xhr.response);  
    
        //서버에서 온 데이터는 js가 아니라 json이야
        //따라서 js에서 사용하려면 json을 js로 변환해야 해
    
        //json => js : JSON.parse()
        //js => json : JSON.stringify()    
        const postList = JSON.parse(xhr.response);
        // console.log(postList[0]);
    
        postList.forEach(post => {
            const $postLi = document.createElement('li');
            $postLi.classList.add('post-item');
            $postLi.innerHTML=`
            <h2>${post.title}</h2>
            <p>${post.body}</p>
            <button>DELETE</button>`;
    
            $postUl.appendChild($postLi);
        });
    
    };    
}

fetchGetPosts();

const fetchNewPosts=(e)=>{
    e.preventDefault(); //form태그의 새로고침 기능 중단
    // console.log('form이 제출됨');

    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:5000/posts');

    const payload = JSON.stringify({
        title: document.getElementById('title').value,
        body: document.getElementById('content').value
    });

    xhr.setRequestHeader('content-type', 'application/json');
    xhr.send(payload);

    //응답 상황 처리
    xhr.onload=e=>{
        if(xhr.status === 200 || xhr.status === 201){
            alert('게시물 등록 성공~');
        }else{
            alert('게시물 등록 실패!');            
        }
    };
};

//form태그에 전송이벤트 등록
$addForm.addEventListener('submit', fetchNewPosts);

document.getElementById('go-link').addEventListener('click', e=>{
    const flag = confirm('진짜 이동합니까?');
    if(!flag){
        console.log('안돼');
        e.preventDefault() //태그의 기본 기능을 없앰.
        //기본기능: a -> 링크이동 기능
        //        checkbox -> 체크기능
        //        form -> 서버에 데이터를 주면서 새로고침 
    }
});










