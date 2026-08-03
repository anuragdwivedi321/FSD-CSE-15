function register() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("register here");
            resolve();
        }, 5000);
    });
}

function login() {

    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("login here");
            resolve();
        }, 10000);
    });
}

function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Fetch data here");
            resolve();
        }, 6000);
    });
}

function displayData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("view user data");
            resolve();
        }, 8000);
    });
}

// Promise Chaining
register()
    .then(() => {
        return login();
    })
    .then(() => {
        return getData();
    })
    .then(() => {
        return displayData();
    })
    .then(() => {
        console.log("All tasks completed");
    })
    .catch((error) => {
        console.log("Error:", error);
    });

console.log("call another application");