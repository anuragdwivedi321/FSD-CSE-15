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
            reject(new Error("Login failed"));
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
async function test() {
    try {
        await register();
        await login();
        await getData();
        await displayData();

    }
    catch (error) {
        console.log(error.message);
    }
}
test();
console.log("call another application");