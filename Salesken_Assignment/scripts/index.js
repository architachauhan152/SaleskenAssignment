document.getElementById("loginBtn").addEventListener("click", () => {
    event.preventDefault();
    let users = JSON.parse(localStorage.getItem("userdata")) || []
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value

    let emailcheck = false;
    let passcheck = false;
    let username = "";



    users.forEach((elem) => {
        if (elem.email == email) {
            username = elem.name
            emailcheck = true;
            if (elem.password == password) {
                passcheck = true;
            }
        }
    })

    if (email.length == 0) {
        alert("Enter your email")
    }

    else if (password.length == 0) {
        alert("Enter your password")
    }

    else if (emailcheck) {
        if (passcheck) {
            let curntUser = {
                username,
                email
            }
            localStorage.setItem("currentuser", JSON.stringify(curntUser))
            localStorage.removeItem("currentAns")
            localStorage.removeItem("currentPage")
            localStorage.removeItem("correct_ans")
            location.href = "quiz.html"
        }
        else {
            alert("wrong password");
        }
    }
    else {
        alert("wrong email");
    }

})