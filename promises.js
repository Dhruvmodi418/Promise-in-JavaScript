console.log("Hello world");
console.log(`Dhruv Modi`);


let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if(a>0.5){
        reject("Number generated below 0.5, This is reject")
    }
    else{
        setTimeout(() => {
            console.log("Yes this is in else part");
            resolve("This is resolve")
        }, 2000);
    }
}
)


prom1.then((a)=>{
    console.log("Hello this is then in promise")
}).catch((err)=>{
    console.log("Site is under maintaince, please wait")
})

