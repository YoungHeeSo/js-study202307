


class Pet{
    constructor(name, age){
        this.name=name;
        this.age=age;
    }
    introduce(){
        console.log(`나의 이름: ${this.name}, 나이: ${this.age}`);
    }
}

class Dog extends Pet{
    constructor(name, age, hobby){
        super(name, age);
        this.hobby=hobby;
    }
}

class Cat extends Pet{
    constructor(name, age, sleep){
        super(name, age);
        this.sleep=sleep;
    }    
}

const dog = new Dog('해피', 4, '산책');
const cat = new Cat('나비', 6, '잠자기');

dog.introduce();
cat.introduce();






