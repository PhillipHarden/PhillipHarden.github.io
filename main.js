console.log("Welcome to The47Spot.Com! ")

function ShowLogin() {
    document.getElementById("myForm").style.display = "block";
}

function HideLogin() {
    document.getElementById("myForm").style.display = "none";
    document.getElementById('userNameInput').value = '';
    document.getElementById('passwordInput').value = '';
}

let users = [
    {
        userName: "Phil123",
        password: "123"
    },
    {
        userName: "Tom1234",
        password: "1234"
    },
    {
        userName: "Karen12345",
        password: "12345"
    }
]

function SignUp(){
    let newUser = {
        userName: document.getElementById('userNameInput').value,
        password: document.getElementById('passwordInput').value
    }
    users.push(newUser)
    document.getElementById('welcome-user').innerHTML = ("Welcome "+newUser.userName+"!")
    document.getElementById('userNameInput').value = '';
    document.getElementById('passwordInput').value = '';
    HideLogin()

}

function LogIn() {
    let username = document.getElementById('userNameInput').value
    let password = document.getElementById('passwordInput').value

    for(let i = 0; i < users.length; i++) {
        if(username == users[i].userName && password == users[i].password) {
            document.getElementById('welcome-user').innerHTML = ("Welcome "+username+"!")
            document.getElementById('userNameInput').value = '';
            document.getElementById('passwordInput').value = '';
            HideLogin()
            return
        }
    }
    alert("incorrect username or password")
}