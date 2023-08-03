


//모달 엘리먼트
// const $addMovieModal = document.getElementById("add-modal");
// const $addMovieButton = document.querySelector("header button");

// //영화추가버튼
// const $backdrop = document.getElementById("backdrop");
// //영화 추가 모달안에 있는 확인, 취소버튼
// const $cancelAddMovieButton = $addMovieModal.querySelector(".btn--passive");
// const $confirmAddMovieButton = $cancelAddMovieButton.nextElementSibling;
// const $userInputs = [
//   ...$addMovieModal.querySelectorAll("input"),
// ];
// const [$titleInput, $imgUrlInput, $ratingInput] = $userInputs;
// const $entryTextSection = document.getElementById('entry-text');
// const $deleteMovieModal = document.getElementById('delete-modal');

//모달 엘리먼트
const $addMovieModal = document.getElementById("add-modal");
const $addMovieButton = document.querySelector("header button");

//영화추가버튼
const $backdrop = document.getElementById("backdrop");

//영화 추가 모달안에 있는 확인, 취소버튼
const $cancelAddMovieButton = $addMovieModal.querySelector(".btn--passive");
const $confirmAddMovieButton = $cancelAddMovieButton.nextElementSibling;

const $userInputs = [
  ...$addMovieModal.querySelectorAll("input"),
];

const [$titleInput, $imgUrlInput, $ratingInput] = $userInputs;
const $entryTextSection = document.getElementById('entry-text');
const $deleteMovieModal = document.getElementById('delete-modal');

const CLASS_VISIBLE='visible'

// 이벤트 핸들러 및 이벤트 바인딩

//영화 추가 모달창을 띄우는 핸들러
const showMovieModalHandler =e =>{
    $addMovieModal.classList.add(CLASS_VISIBLE);
    $backdrop.classList.add(CLASS_VISIBLE);
};

//Add movie버튼 클릭 이벤트
$addMovieButton.addEventListener('click', showMovieModalHandler);