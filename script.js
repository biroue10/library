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
const button = document.querySelector(".container button");
const table = document.querySelector(".table");
button.addEventListener("click", (event) => {
  event.preventDefault();
  const titre = document.getElementById("titre").value;
  const auteur = document.getElementById("auteur").value;
  const page = document.getElementById("page").value;
  const book = new Book(titre, auteur, page);
  if (myLibrary.push(book)) {
    const div1 = document.createElement('div')
    div1.classList.add('grid-element')
    table.append(div1)
  }
  const fields = document.querySelectorAll("input");
  fields.forEach(function (element) {
    element.value = "";
  });
});
