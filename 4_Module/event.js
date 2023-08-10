/* eslint-disable require-jsdoc */
// getDom.js에서 가져옴
import { $p } from './getDOM.JS';

// event.js에서 만든거
export const clickHandler = (e) => {
  $p.textContent = '하이';
};

// default를 넣으면 이름을 생략가능, 한개만 생성가능
export default class {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  info() {
    alert(`${this.name}: 저는 ${this.age}살 입니다`);
  }
}
