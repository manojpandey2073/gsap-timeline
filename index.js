function asynchronous_operational_method() {
    let first_promise = new Promise((resolve, reject) => resolve("Hello"));
    let second_promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(" GeeksforGeeks..");
        }, 1000);
    });

    let combined_promise = Promise.all([first_promise, second_promise]);
    return combined_promise;
}

let kuchbhi = asynchronous_operational_method();
console.log(kuchbhi);
kuchbhi.then(([firstResult, secondResult]) => {
    console.log("First promise result:", firstResult);
    console.log("Second promise result:", secondResult);
}).catch(error => {
    console.log("Error:", error);
});

// async function display() {
//     let data = await asynchronous_operational_method();
//     console.log(data);
// }

// display();