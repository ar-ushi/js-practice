//Implement Promise/Promise-related APIs: Promise, Promise.all, Promise.any

class customPromise{
    constructor(executor){
        this.state = 'pending';
        this.value = undefined;
        this.reason = undefined;
        onResolvedCallbacks = [];
        onRejectedCallbacks = [];
        const reject = (reason) => {
            if (this.state === 'pending'){
                this.state = 'rejected';
                this.reason = reason;
                this.onRejectedCallbacks.forEach((callback) => callback(this.value));
            }
        }
        const resolve = (value) => {
            if (this.state === 'pending'){
                this.state = 'fulfilled';
                this.value = value;
                this.onResolvedCallbacks.forEach((callback) => callback(this.value))
            }
        }

        try{
            executor(resolve, reject);
        } catch(error){
            reject(error);
        }
    }

        then(onFulfilled, onRejected){
            return new customPromise((resolve, reject) => {
                if (this.state === 'fulfilled'){
                    setTimeout(() => {
                        try {
                            const result = onFulfilled ? onFulfilled(this.value) : this.value;
                            resolve(result);
                        } catch (error) {
                            reject(error);
                        }
                    }, 0)
                } else if (this.state === 'rejected'){
                    setTimeout(() => {
                        try {
                        const result = onRejected ? onRejected(this.reason) : this.reason;
                        reject(result);
                        } catch (error) {
                            reject(error);
                        }
                    },0)
                } else {
                    this.onResolvedCallbacks.push((val) => {
                        setTimeout(() => {
                            try {
                                const result = onFulfilled ? onFulfilled(val) : val;
                                resolve(result);
                            } catch (error) {
                                reject(error);
                            }
                        }, 0)
                    });
                    this.onRejectedCallbacks.push((reason) => {
                        setTimeout(() => {
                            try {
                                const result = onRejected ? onRejected(reason) : reason;
                                reject(result);
                            } catch (error) {
                                reject(error);
                            }
                        }, 0)
                    });                
                }
            });
        }

        catch(onRejected) {
            return this.then(undefined, onRejected);
        }
}

customPromise.all = (promises) => {
    return new customPromise((resolve, reject) => {
        let results = [];
        let completedPromises = 0;

        checkCompletion = () => {
            if (completedPromises === promises.length){
                resolve(results);
            }
        }
        for (let i = 0; i<promises.length; i++){
            promises[i].then(
                (value) => {
                    results.push(value);
                    completedPromises++;
                }, 
                (reason) => {
                    reject(reason);
                }
            )
        }
        completedPromises();
    })
}

customPromise.any = (promises) =>{
    return new customPromise((resolve, reject) => {
        let reasons = [];
        let failedPromises = 0;

        checkIfAllFailed = () => {
            if (failedPromises === promises.length){
                reject(reasons);
            }
        }

        for (let i =0; i<promises.length; i++){
            promises[i].then(
                (value) => {
                    resolve(value)
                }, (reason) => {
                    reasons.push(reason);
                    failedPromises++;
                    checkIfAllFailed();
                }
            )
        }
        checkIfAllFailed();
    })
}

customPromise.race = (promises) =>{
    return new customPromise((resolve, reject) => {

        for (let i = 0; i<promises.length; i++){
           promises[i].then(
            (value) => resolve(value),
            (reason) => reject(reason)
           )
        }
    })   
}

