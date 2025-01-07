const removeFromArray = function(text, ...args) {
    
    for(let i = 0; i<args.length; i++){
        for(let j = 0; j<text.length; j++){
            if(text[j] === args[i]){
                text.splice(j, 1);
                j--;
            }
        }
    }
    return text;
};

// Do not edit below this line
module.exports = removeFromArray;
