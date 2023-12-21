function debounce(func, time){
    let timeoutid; 
    return function(...args){
        clearTimeout(timeoutid);

        timeoutid = setTimeout(() => {
            func.call(this, ...args);
        }, delay)
    }
}

//func represents value that should be executed after the time has passed

function basicThrottle(func, time, ){
    let isThrottled;
    return function(...args){
        if (!isThrottled){
            func.call(this, ...args);
            isThrottled = true;

            setTimeout(() => {
                isThrottled = false;
            }, delay)
        }
    }
}

function advdThrottle(func, time){
    let isThrottled;

    function throttledFunction(...args){
        if (!isThrottled){
            func.call(this, ...args);
            isThrottled = true;

            setTimeout(() => {
                isThrottled = false;
            }, delay)
        }
    }

    throttledFunction.cancel = () => {
        clearTimeout(timeoutid);
        isThrottled = false;
    }

    throttledFunction.flush = () => {
        func.apply(this, ...args);
        setTimeout(() => {
            !isThrottled
        }, time);
    }
}

//deep clone copies a value and creates a new reference to it
function cloneDeep(value) {
    if (value == null || typeof value !== 'object'){
        return value;
    }
    //need to handle for array and object
    if (Array.isArray(value)){
        //map returns a new array
        return value.map((item) => cloneDeep(item));
    }

    const clonedObj = Object.create(Object.getPrototypeOf(value));
    for (const key in value){
        if (value.hasOwnProperty(key)){
            clonedObj[key] = value[key];
        }
    }
    return clonedObj;
}

function groupBy(collection, iteratee){
    return collection.reduce((result, item) => {
        const key = typeof iteratee === 'function' ? iteratee(item) : item[iteratee];
        (result[key] || (result[key] = [])).push(item);
        return result;
      }); 
}