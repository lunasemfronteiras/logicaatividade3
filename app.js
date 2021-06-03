const livros = require('./database')

livros.sort((a,b)=> {
    return a.paginas - b.paginas
})

const book = require("readLine-sync")
const livrosCategorias = book.question("Voce deseja esncontrar um livro por categoria?(S/N")

if(livrosCategorias.toLocaleUpperCase() == "S"){
    console.log("Essas são as opções disponíveis")
    console.log("Autobiogra", "Terapia Alternativas", "Biografia", "Autoajuda")

    const qualCategoria = book.question("Qual categoria voce escolhe?")
    const categoria = livros.filter(livros => livros.categoria == qualCategoria)

    console.log(categoria)
}else{

    console.log("Esses são todos os livros disponíveis:")
    console.log(livros)

}

