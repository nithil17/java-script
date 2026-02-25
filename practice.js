const myPromise = new Promise((resolve, reject)=>{
    resolve(5);
});

myPromise.then(result=>{
    console.log(result);
});

const delayThing = new  Promise((resolve, reject)=>{
    setTimeout(() => {
        reject("Nothings right");
    },1000);
});

delayThing
.then(result2=>{
    console.log(result2);
}).
catch(error=>{
    console.log(error);
    }
);

function checkEven(number){
    return new Promise((resolve, reject)=>{
        if(number%2==0){
            resolve("Number is even");
        }else {
            reject("Number is odd");
        }
    });

}

checkEven(9)
.then(result3=> {console.log(result3);})
.catch(err=>{console.log(err);});

function getNumber(){
    return new Promise(resolve=>{
        setTimeout(()=>resolve(100),500);
    });
}

async function showNumber() {
    const collect = await getNumber();
    return console.log(collect);
}

showNumber();

Promise.resolve(10)
.then(numb=> numb*2)
.then(numb=> numb+2)
.then(result=> console.log(result))

class TimeLimitedShit {
    constructor(){
        this.cache = new Map();
    }

    set(key, value, duration){
        const now = Date.now();
        const expiresAt = now + duration;

        const exists = this.cache.has(key)&&this.cache.get().expiresAt>now;

        this.cache.set(key, {
            value: value,
            expiresAt: expiresAt
        });
        return exists;
    }

    get(key){
        const now = Date.now();
        if(!this.cache.has(key)) return -1;
        const entry = this.cache.get(key);

        if (entry.expiresAt<=now){
            this.cache.delete(key);
            return -1;
        }

        return entry.value;
    }

    count(){
        const now = Date.now();
        const total = 0;

        for(const [key, entry] of this.cache.entries()){
            if(entry.expiresAt>now){
                total++;
            }else{
                this.cache.delete(key);
            }
            
        }
        return total;
    }


}

