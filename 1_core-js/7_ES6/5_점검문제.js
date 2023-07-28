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
  traders
  .filter(users => users.year===2022)
  .map(user => user.trader)
  .forEach(u => console.log(u));
  console.log('==============================');
  
  // 연습 2: 거래자가 근무하는 모든 도시이름을 배열에 담아주세요.
  const uar=traders
  .map((uct)=> uct.trader.city );
  console.log(uar);  
  //filter는 조건이 없고 모든 근무자의 도시이름을 알려주기만 하면되서 사용할 필요 없음
  //forEach는 하나씩 매핑시켜서 배열화 시킬 수 없음
  console.log('==============================');
  
  // 연습 3: 대전에 근무하는 
  // 모든 거래자를 찾아 거래자정보를 배열에 매핑해주세요.
  traders
  .filter(uct=>uct.trader.city==='대전')
  .map((userAll)=> userAll)
  .forEach(user=>console.log(user));
  console.log('==============================');
  
  // 연습 4: 모든 거래자의 이름을 배열에 모아주세요.
  const userName = traders
  .map((userAll)=>userAll.trader.name);
  console.log(userName);
  console.log('==============================');
  
  // 연습 5: 서울에 사는 거래자의 모든 거래액의 총합 출력.
  const sumval=traders
  .filter(uct=>uct.trader.city==='서울')
  .map(valSeo=> valSeo.value);

  function add(val){
    let sum=0;
    for(let i in val){
        sum+=val[i];
    }
    return sum;
  }

  console.log(sumval);
  console.log(add(sumval))

  
  
  