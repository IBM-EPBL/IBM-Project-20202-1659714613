var data = [
    {
        username:"jaswanth",
        password:"jash123"    
    },
    {
        username:"sahan",
        password:"sahan123"
    },
    {
        username:"tarini",
        password:"tarini123"
    },
    {
        username:"vignesh",
        password:"vignesh123"
    },
	{
        username:"ramani",
        password:"ramani123"
    }
]
function login(){
    var uname = document.getElementById("username").value
    var pass = document.getElementById("password").value

    for (i = 0; i<data.length; i++){
        if (uname == data[i].username && pass == data[i].password){
            window.location.replace("index.html")
            return false
        }
    }
    alert("Incorrect password")
}
function register(){
    var runame = document.getElementById("username").value
    var rpass = document.getElementById("password").value
    var rpass1 = document.getElementById("password1").value
    if (rpass == rpass1){
        var rdata = {
            username: runame,
            password: rpass
        }
    }else{
        alert("password doesn't match")
        return
    }
    
    for (i = 0; i<data.length; i++){
        if (runame == data[i].username){
            alert("Username not available")
            return false
        }
    }
    data.push(rdata)
    window.location.replace("index.html")
}