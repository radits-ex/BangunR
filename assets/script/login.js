function masuk() {
    let username = document.getElementById("Username").value;
    let password = document.getElementById("password").value;
    const konten = "konten.html"
    
    if (username == "tio" && password == "admins"){
        window.location = konten
        alert('Login Berhasil!')
    }
    if (username == "pingga" && password == "admin"){
        window.location = konten
        alert('Login Berhasil!')
    }
    if (username == "kila" && password == "jelek"){
        window.location = konten
        alert('Login Berhasil!')
    }

    else { 
        alert('Username/Password salah!')
    }
}

function regis(){
    
}