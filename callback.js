function register(cb){
        setTimeout(() => {
    console.log("register here");
cb();
}, 5000);
}
function login(cb){
    setTimeout(() => {
        console.log("login here");
          cb();
    }, 10000);
  
}

function getData(cb){
    setTimeout(() => {
        console.log("Fetch data here");
        cb();
    }, 6000);

}

function displayData(){
     setTimeout(() => {
        console.log("view user data");
    }, 8000);
}
//callback hell problem
register(() => {
    login(() => {
        getData(() => {
            displayData();
            
        });
    });
});
  console.log("call another application");
