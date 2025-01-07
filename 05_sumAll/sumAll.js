const sumAll = function(a, b) {
    let sum = 0;

    if(a%1 != 0 || b%1 != 0){
        return 'ERROR';
    }

    if(a<0 || b<0){
        return 'ERROR';
    }
    
    if(typeof a != 'number' || typeof b != 'number'){
        return 'ERROR'
    }

    if(a>b){
        for(b; b<=a; b++){
            sum += b;
        }
    }else{
        for(a; a<=b; a++){
            sum += a;
        }
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
