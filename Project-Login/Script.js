function validasiLogin() {
    let usernameBenar = "Admin";
    let passwordBenar = "12345";

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username !== usernameBenar) {
        alert("Username salah!");
        return false;
    }

    if (password !== passwordBenar) {
        alert("Password salah!");
        return false;
    }

    alert("Login berhasil!");
    return true;
}