function myReduce(nums, fn, init){
    let val = init;
    for (let i = 0 ; i<nums.length; i++ ){
        val = fn(val, nums[i]);
    }

    return val;
}

const num1 = [1,2,3,4];

const sumFunction = function(accum , curr){
    return accum+ curr;
}

const result1 = myReduce(num1, sumFunction, 0);
console.log("Sum Result:", result1);

const num2 = [1,2,3,4];
const multiplyNumbers = (accum , curr)=> accum*curr;
const result2 = myReduce(num2, multiplyNumbers, 1);
console.log("the multplyed number:", result2); 

var memoize = function(fn){
    const cache = new Map();
    const callCount = 0;
    const memoized = function(...args){
        const key = JSON.stringify(args);
        if (cache.has(key)){
            return cache.get(key);
        }

        callCount ++;
        const result = fn(...args);
        cache.set(key, result);
        return result;
    };

    memoized.getCallCount = function(){
        return callCount;
    }
    return memoized;
};