//your JS code here. If required.




let myform = document.getElementById("userForm");

myform.addEventListener("submit", (event) => {
    event.preventDefault();
    let username = document.getElementById("name").value.trim();
    let userage = document.getElementById("age").value;

    // Validate inputs
    if (!userage || isNaN(userage) || parseInt(userage) <= 0 || !username) {
        alert("Please enter valid details.");
        return;
    }

    const age = parseInt(userage, 10); // Convert userage to a number

    // Create a promise
    let promise = new Promise((resolve, reject) => {
           setTimeout(()=>{
            if (parseInt(userage)>= 18) {
                resolve(`Welcome, ${username}. You can vote.`);
            }
            else if(parseInt(userage)<18){
                reject(`Oh sorry ${username}. You aren't old enough.`);
            }
           },4000)
    });

    // Handle promise
    promise
        .then((data) => {
            alert(data);
        })
        .catch((err) => {
           alert(err)
        });

        document.getElementById('userForm').reset();
});
