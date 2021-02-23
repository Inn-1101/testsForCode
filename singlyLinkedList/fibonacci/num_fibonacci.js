(function(){
    function fib(num){
        let a = 0;
        let b = 1;
        let nf;

        for (let i = 1; i <= num; i++){
            nf = a + b;
            a = b;
            b = nf;
        }
        if(num === nf) {
            return true;
        }else{
            return false;
        }
       
    }
     
     console.log(fib(4));
})()