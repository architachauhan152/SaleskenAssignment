document.getElementById("loginBtn").addEventListener("click", () => {
    event.preventDefault();
    let users = JSON.parse(localStorage.getItem("userdata")) || []
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    let emailcheck = false

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        emailcheck = true
    }
    else {
        alert("Enter valid email")
    }

    for (let i = 0; i < users.length; i++) {
        if (email == users[i].email) {
            emailcheck = false
            alert("Account already exists");
            break;
        }
    }

    if (name.length == 0) {
        alert("Enter your name")
    }

    else if (password.length == 0) {
        alert("Enter your password")
    }

    else if (name && emailcheck && password) {
        if (password.length < 6) {
            alert("Password should have minimum 6 character")
        }
        else {
            let userdata = {
                name,
                email,
                password
            }
            users.push(userdata)
            console.log(users)
            localStorage.setItem("userdata", JSON.stringify(users))
            alert("Account created. go to login page")
            setTimeout(() => {
                location.href = "index.html"
            }, 1000)
        }

    }

})