function register() {
    waitForSeconds(5000);
    console.log("Register here");
}

function login() {
    waitForSeconds(10000);
    console.log("Login here");
}

function getData() {
    waitForSeconds(6000);
    console.log("Fetch data here");
}

function displayData() {
    waitForSeconds(8000);
    console.log("View user data");
}

function waitForSeconds(delay) {
    const endTime = Date.now() + delay;

    while (Date.now() < endTime) {
        // Busy waiting
    }
}

register();
login();
getData();
displayData();

console.log("Call another application");