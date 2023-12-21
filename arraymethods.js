//Implement Array.prototype functions: map, reduce, filter, sort


Array.prototype.customMap = function(callback) {
    const newArray = [];
    for (let i = 0; i<this.length; i++){
        newArray.push(callback(this[i], i, this));
    }
    return newArray;
}

Array.prototype.customFilter = function(callback) {
    const newArray = [];
    for (let i =0; i<this.length; i++){
        if (callback(this[i], i, this)){
            newArray.push(this[i]);
        }
    }
    return newArray;
}

Array.prototype.customReduce =  function(callback, initialValue){
    let accumulator = initialValue !== undefined ? initialValue : this[0];
    let index = initialValue !== undefined ? 0 : 1; 

    for (let i = index; i<this.length; i++){
        accumulator = callback(accumulator, this[i], i, this);
    }
    return accumulator;
}

Array.prototype.customSort = function(compareFn){
    const arrayCopy = [...this];
    for (let i = 0; i<this.length; i++){
        if (!compareFn){

        }else{
            
        }
    }
}
