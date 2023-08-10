//getDom.js에서 가져옴
import {$p as $para} from './getDOM.js';

//event.js에서 만든거
const $p = document.querySelector('p');

export const clickHandler=e=>{
    $para.textContent='하이';
};

//default를 넣으면 이름을 생략가능, 한개만 생성가능
export default class { 
    constructor(name, age){
        this.name=name;
        this.age=age;
    }
    info(){
        alert(`${this.name}: 저는 ${this.age}살 입니다`);
    }
}

$btn.addEventListener('click', clickHandler);