function logar() {

    var login = document.getElementById('Username').value;
    var senha = document.getElementById('senha').value;

   if (login == "admin" && senha == "admin") {
       location.href = "home.html";

   } else {
    alert('Usuário ou senha incorreto!');
       }
   }
   