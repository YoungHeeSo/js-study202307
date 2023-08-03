



//모달 엘리먼트
const $addMovieModal = document.getElementById("add-modal");
const $deleteMovieModal = document.getElementById("delete-modal");

//영화추가버튼
const $addMovieButton = document.querySelector("header button");
const $backdrop = document.getElementById("backdrop");

//영화 추가 모달안에 있는 확인, 취소버튼
const $cancelAddMovieButton = $addMovieModal.querySelector(".btn--passive");
const $confirmAddMovieButton = $cancelAddMovieButton.nextElementSibling;

//영화 추가 모달 안에 있는 입력엘리먼트들
const $userInputs = [
  ...$addMovieModal.querySelectorAll("input")
];

const [$titleInput, $imgUrlInput, $ratingInput] = $userInputs;
const $entryTextSection = document.getElementById('entry-text');

//영화 삭제 모달 안에 있는 close, Yes버튼
const $closedeletButton= $deleteMovieModal.querySelector('.btn--passive'); //close버튼
const $deletMovieButton= $closedeletButton.nextElementSibling; //yes버튼


// 영화목록 ul태그
const $movieList = document.getElementById('movie-list');

const CLASS_VISIBLE='visible';

//영화 정보 목록 배열
const movies=[];

//유틸함수, 일반함수 정의 //

//모든 인풋을 리셋하는 함수
const clearMovieModalInput=()=>{
    $userInputs.forEach($input=>$input.value='');
};

//영화추가모달을 닫는함수
const closeAddModal=()=>{
    $backdrop.classList.remove(CLASS_VISIBLE);
    $addMovieModal.classList.remove(CLASS_VISIBLE);

    //모달닫기
    clearMovieModalInput();
};

//영화삭제모달을 여는 함수
const oftendeletModal=()=>{
    $backdrop.classList.add(CLASS_VISIBLE);
    $deleteMovieModal.classList.add(CLASS_VISIBLE);
};

//영화삭제모달을 닫는 함수
const closedeletModal=()=>{
    $backdrop.classList.remove(CLASS_VISIBLE);
    $deleteMovieModal.classList.remove(CLASS_VISIBLE);
};

let movieId;
let deleteMoviePosition;

//화면에 새로운 영화 정보를 렌더링하는 함수
const rendernewMovie=({id, title, image, rating})=>{
        
        const $newMovie = document.createElement('li');
        $newMovie.classList.add('movie-element');
        $newMovie.dataset.movieId = id;
    
        $newMovie.innerHTML = 
        `<div class="movie-element__image">
          <img src="${image}" alt="${title}">
        </div>
        <div class="movie-element__info">
          <h2>${title}</h2>
          <p>${rating} / 5</p>
        </div>`;
        
        //삭제 모달을 여는 핸들러
        const oftendeletModalHandler=e=>{

            oftendeletModal();
            deleteMoviePosition=e.target.closest('.movie-element');

            movieId = e.target.closest('.movie-element').dataset.movieId;
            console.log(movieId);
        };
        
        $newMovie.addEventListener('click', oftendeletModalHandler);  
        
        //삭제를 진행하는 핸들러
        const deleteMovieHandler = e =>{
            
            //배열에서도 영화 정보를 지워야함
            //클릭한 태그의 근처 li의 movie-id값 가져오기
            // let movieId = e.target.closest('.movie-element').dataset.movieId;
            // const movieId = e.dataset.movieId;

            console.log(movieId);
            
            //배열에서 해당 아이디값을 가지는 객체를 찾아내고, 인덱스 알아내기
            // let index=-1;
            // for(let i=0; i<movies.length; i++){
                //     if(movies[i].id === movieId){
                    //         index =i;
                    //         break;
                    //     }
                    // }
                    
                    //대상의 인덱스 찾기
                    //중요!!!
                    //indexof: 원시타입 (숫자, 문자열)만 찾을 수 있어, 객체는 못찾음
                    //findIndex: 배열 고차함수, 반복문을 돌려서 처리해준다
                    const index= movies.findIndex(m=>m.id===movieId);
                    console.log(index);
                    
                    //그 객체를 배열에서 지우기 < 인덱스를 알아야 지울 수 있음
                    movies.splice(index, 1);
                    
                    //실제 li지우기
                    deleteMoviePosition.remove();
                    
                    //삭제모달 닫기
                    closedeletModal();
                };
                
                //삭제 클릭 이벤트
                // $newMovie.addEventListener('click', deleteMovieHandler);
                
                $movieList.appendChild($newMovie);
                
                //delet Movie모달 yes버튼 클릭 이벤트
                $deletMovieButton.addEventListener('click', deleteMovieHandler);       
                
            };
            
            //영화 정보 입력란 검증
            const validateMovieinput=({title, image, rating})=>{
                if(
                    title.trim()==='' ||
                    image.trim()===''||
        rating.trim()===''||
        +rating < 1 || +rating > 5){
        return false;
    }
    return true;
}

// 이벤트 핸들러 및 이벤트 바인딩 //

// 영화 추가버튼 기능을 수행하는 핸들러
const addMovieHandler = e => {
    const titleValue = $titleInput.value; // 제목입력란값
    const imgUrlValue = $imgUrlInput.value; // 이미지경로
    const ratingValue = $ratingInput.value; // 평점입력값
  
    // 객체로 묶기
    const newMovie = {
      id: Math.random().toString(),
      title: titleValue,
      image: imgUrlValue,
      rating: ratingValue
    };
  
    // 검증
    if (!validateMovieinput(newMovie)) {
      alert('입력값이 유효하지 않습니다!');
      return;
    }
  
    // console.log(newMovie);
    movies.push(newMovie);
    console.log(movies);
  
    // 모달 닫기
    closeAddModal();
    // 화면에 입력한 영화정보 렌더링하기
    rendernewMovie(newMovie);
};

//영화 추가 모달창을 띄우는 핸들러
const showMovieModalHandler =e =>{
    $addMovieModal.classList.add(CLASS_VISIBLE);
    $backdrop.classList.add(CLASS_VISIBLE);
};

//백드롭 영역을 클릭하면 모달이 닫히는 핸들러
const backdropHandler =e=>{
    closeAddModal();
};

//영화추가 모달창의 취소버튼이 누르면 모달이 닫히는 핸들러
const closeMoiveModalHandler=e=>{
    closeAddModal();
};

//Add movie버튼 클릭 이벤트
$addMovieButton.addEventListener('click', showMovieModalHandler);

//backdrop영역 클릭이벤트
$backdrop.addEventListener('click', backdropHandler);

//add Movie 모달 취소버튼 클릭 이벤트
$cancelAddMovieButton.addEventListener('click', closeMoiveModalHandler);

//Add Movie모달 추가버튼 클릭 이벤트
$confirmAddMovieButton.addEventListener('click', addMovieHandler);

//delet Movie모달 취소 버튼 클릭 이벤트
$closedeletButton.addEventListener('click', closedeletModal);




