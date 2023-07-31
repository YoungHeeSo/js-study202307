const traders = [
    {
      trader: {
        name: "김철수",
        city: "대전",
      },
      year: 2023,
      value: 500000,
    },
    {
      trader: {
        name: "박영희",
        city: "서울",
      },
      year: 2022,
      value: 600000,
    },
    {
      trader: {
        name: "김철수",
        city: "대전",
      },
      year: 2022,
      value: 1200000,
    },
    {
      trader: {
        name: "박영희",
        city: "서울",
      },
      year: 2023,
      value: 650000,
    },
    {
      trader: {
        name: "뽀로로",
        city: "부산",
      },
      year: 2023,
      value: 800000,
    },
    {
      trader: {
        name: "루피",
        city: "대전",
      },
      year: 2022,
      value: 780000,
    },
  ];
  
  // 연습 1: 2022년에 발생한 모든 거래를 찾아 
  //   거래자 정보(이름, 도시)를 배열에 매핑해주세요 
  const tua = traders
  .filter(tras => tras.year===2022)
  .map(tras => tras.trader);

  console.log(tua);
  console.log('==============================');
  
  // 연습 2: 거래자가 근무하는 모든 도시이름을 배열에 담아주세요.
  const uar=traders
  .map((uct)=> uct.trader.city );

  const cities = [...new Set(uar)]; //중복제거
  // cities.push('청양');

  console.log(cities);
  console.log('==============================');
  
  // 연습 3: 대전에 근무하는 
  // 모든 거래자를 찾아 거래자정보를 배열에 매핑해주세요.
  traders
  .filter(uct=>uct.trader.city==='대전')
  .map(uct=> uct.trader)
  .forEach(user=>console.log(user));
  console.log('==============================');
  
  // 연습 4: 모든 거래자의 이름을 배열에 모아주세요.
  const userNames = traders
  .map((userAll)=>userAll.trader.name);

  const names= [... new Set(userNames)];
  console.log(names);
  console.log('==============================');
  
  // 연습 5: 서울에 사는 거래자의 모든 거래액의 총합 출력.
  let total=0;

  const sumval=traders
  .filter(uct=>uct.trader.city==='서울')
  .map(valSeo=> valSeo.value)
  .forEach(val=>total+=val);

  //reduce함수 : 배열을 반복해서 각 요소에 콜백함수를 
  //            적용한 결과를 누적하는 함수
  traders
  .filter(trs=>trs.trader.city==='서울')
  .reduce((acc, curr)=>acc+curr.value, 0); 
  
  // for(const tr of sumval){
    //   total += tr.value;
    // }
    
  console.log(total);
  
  // function add(val){
  //   let sum=0;
  //   for(let i in val){
  //       sum+=val[i];
  //   }
  //   return sum;
  // }

  // console.log(sumval);
  // console.log(add(sumval))

  
  
  