function register(cb){
    setTimeout(()=>{
         console.log("register end");
         cb();
    },5000);
}

function Login(cb){
setTimeout(() => {
    console.log("Login here");
    cb();
},4000);
}

function getData(cb){
setTimeout(() => {
    console.log("Fetch Data here");
    cb();
},6000);
}

function DisplayData(cb){
setTimeout(() => {
    console.log("view data here");
    
},10000);
}
register(() => {
    Login(() => {
        getData(() => {
            DisplayData();
        });
    });
});
console.log("call another application");

