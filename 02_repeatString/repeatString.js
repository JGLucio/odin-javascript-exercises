const repeatString = function(text, num) {
    if(num<0){
        return 'ERROR';
    }

    let str = '';
    for(let n = 0; n<num; n++){
        str = str + text;
    }
    return str;

};

// Do not edit below this line
module.exports = repeatString;
