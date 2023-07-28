
const NOT_FOUND = -1;

let foods = ['짬뽕','초밥', '김치찌개', '족발'];

//배열에서 특정요소가 어디 인덱스에 있는지 인덱스 반환
function myIndexOf(array, searchElement) {    
    for(let i=0; i<array.length; i++){
        if(searchElement===array[i]){
            return i;
        }
    }
    return NOT_FOUND; //if에 한번이라도 안걸리면 걸리게된다 
}

//특정 요소가 존재하는지 유무 확인
// function myIncludes(array, searchElement) {
//     for(let i=0; i<array.length; i++){
//         if(searchElement===array[i]){
//             return true;
//         }
//     }
//     return false;
// }

function myIncludes(array, searchElement){
    return myIndexOf(array, searchElement) !== NOT_FOUND;
}


let index = myIndexOf(foods, '돈가스덮밥'); //없는 메뉴를 입력하면 undefined
console.log(`찾은 인덱스: ${index}`);

let isPresent = myIncludes(foods, '포도');
console.log(`존재유무: ${isPresent}`);