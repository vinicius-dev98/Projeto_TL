
function adicionarlivros(){

   let modal = document.querySelector('.modalCadastroLivros');

   modal.style.display = 'block';
}



function fechar(){
    let modal = document.querySelector('.modalCadastroLivros');

    modal.style.display = 'none';
 }

 
 var botaoCadastrarLivros = document.querySelector('.btn-cadastroLivro');
 botaoCadastrarLivros.addEventListener("click", function(event){
    event.preventDefault();

    var form = document.querySelector(".form-adiciona-livro")

    var nome = form.nome.value;
    var autor = form.autor.value;
    var genero = form.genero.value;

    var livroTr = document.createElement("tr");

    var nomeDoLivroTd = document.createElement("td");
    var autorTd = document.createElement("td");
    var generoTd = document.createElement("td");

    nomeDoLivroTd.textContent = nome;
    autorTd.textContent = autor;
    generoTd.textContent = genero; 

    livroTr.appendChild(nomeDoLivroTd);
    livroTr.appendChild(autorTd);
    livroTr.appendChild(generoTd);

    var tabela = document.querySelector("#tabela-livros");

    tabela.appendChild(livroTr);

    nomeDoLivroTd.style.textAlign = 'center';
    autorTd.style.textAlign = 'center';
    generoTd.style.textAlign = 'center';

    nomeDoLivroTd.style.fontWeight = 'bold';
    autorTd.style.fontWeight = 'bold';
    generoTd.style.fontWeight = 'bold';


 });

 var formModalCadastroLivro = document.querySelector(".form-adiciona-livro");

