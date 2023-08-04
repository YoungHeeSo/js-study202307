
//화살표함수와 this
const dog={

    name: '뽀삐',
    regularfn:function name(params) {
        console.log('ragular: ',this); //자기자신객체
    },
    arrwFn:()=>{
        console.log('arrow:',this); //window객체
    }
};
dog.regularfn();
dog.arrwFn();

console.log('====================');
const cat={
    name:'나비',
    introduce: function name(params) {
        console.log(`intro this:`, this);
        setTimeout(()=>{        
            console.log(`setTime this:`, this);
            console.log(`안녕 제 이름은 ${this.name}이에요`);
        },3000);    
    }
};

cat.introduce();
$modal.add