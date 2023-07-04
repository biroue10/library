let myLibrary = [];
function Book(title, author, pages) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.info = function () {
    return `The ${title} by ${author}, ${pages} pages, not read yet`;
  };
}
const button = document.querySelector("#submit");
const table = document.querySelector(".table");
button.addEventListener("click", (event) => {
  event.preventDefault();
  const titre = document.getElementById("titre").value;
  const auteur = document.getElementById("auteur").value;
  const page = document.getElementById("page").value;
  const book = new Book(titre, auteur, page);
  if (myLibrary.push(book)) {
    const div1 = document.createElement("div");
    const delete_book = document.createElement('div')
    const read = document.createElement('div')
    read.classList.add('read')
    read.textContent='Read'
    delete_book.classList.add('delete_book')
    delete_book.textContent="remove"
    div1.append(delete_book,read)
    div1.classList.add("grid-element");
    table.append(div1);
  }
  const fields = document.querySelectorAll("input");
  fields.forEach(function (element) {
    element.value = "";
  });
});

//delete book from our bookstore

button.addEventListener('click',(e)=>{
e.preventDefault()
const supprimer2 = document.querySelectorAll('.delete_book')
supprimer2.forEach(function(element){
  element.addEventListener('click',()=>{
    element.parentNode.remove()
  })
})
})
