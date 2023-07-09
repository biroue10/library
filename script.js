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
  let titre = document.getElementById("titre").value;
  let auteur = document.getElementById("auteur").value;
  let page = document.getElementById("page").value;
  const book = new Book(titre, auteur, page);
  if (titre != "" && auteur != "" && page != "") {
    myLibrary.push(book);
    const div1 = document.createElement("div");
    const delete_book = document.createElement("div");
    const read = document.createElement("div");
    const titre_containair = document.createElement("div");
    titre_containair.textContent = titre;
    const auteur_container = document.createElement("div");
    auteur_container.textContent = auteur;
    const page_container = document.createElement("div");
    page_container.textContent = page;
    read.classList.add("read");
    read.textContent = "Read";
    delete_book.classList.add("delete_book");
    delete_book.textContent = "remove";
    div1.append(
      titre_containair,
      auteur_container,
      page_container,
      delete_book,
      read
    );
    div1.classList.add("grid-element");
    table.append(div1);
    document.getElementById("titre").value ='';
    document.getElementById("auteur").value ='';
    document.getElementById("page").value ='';
    button.addEventListener("click", (e) => {
      e.preventDefault();
      const supprimer2 = document.querySelectorAll(".delete_book");
      const read = document.querySelectorAll(".read");
      supprimer2.forEach(function (element) {
        element.addEventListener("click", () => {
          element.parentNode.remove();
        });
      });
      read.forEach(function (element) {
        element.addEventListener("click", (element) => {
          if (element.target.classList.contains("read")) {
            element.target.classList.remove("read");
            element.target.classList.add("unread");
          } else if (element.target.classList.contains("unread")) {
            element.target.classList.remove("unread");
            element.target.classList.add("read");
          }
        });
      });
    });
  }
});
