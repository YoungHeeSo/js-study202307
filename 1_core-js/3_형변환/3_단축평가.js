//단축평가
//f&&t일 때 한쪽이 f이면 한쪽이 f이므로 t는 볼 필요가 없어진다
//그래서 f이다
/* 
    t&&t -> t
    t&&f -> f
    f&&t -> f 
    f&&f -> f

    t||t -> t
    t||t -> t
    t||t -> t
    t||t -> t
    t||t -> t
*/

//or 연산: 첫번째 truthy를 반환
console.log('hello' || 'world'); //'hello'-> true이므로 오른쪽 world는 무시하고 hello 반환
console.log(0 || '언뇽');

//and 연산: 첫번째 falsy를 반환
console.log('HELLO'&&'WORLD');
console.log(null&&'메롱');

/*
    <h1>웰컴 투 홈페이지</h1>
    isLogin && <h2>xxx님 환영합니다.</h2>

    coupon && sendCoffee();
*/