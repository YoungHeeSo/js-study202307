
import {$btn} from './getDOM.js';
import ABC, {clickHandler as ch} from './event';

const init=()=>{
    $btn.style.background='aqus';
    $btn.addEventListener('click', ch);

    const dog = new ABC('초코', 3);
    dog.info();
};
init();