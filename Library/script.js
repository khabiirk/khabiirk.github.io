
  let myLibrary = [];
  //The book constructor
  function Book(title, author, page, read){
    this.title = title;
    this.author = author;
    this.page = page;
    this.read = read;

   }
   //Add book to array and display it
   function addBookToLibrary(b){
     if(!myLibrary.includes(b)){
       myLibrary.push(b);
     }
     render();
   }

   //Function to display the books in the myLibrary array in html
   function render(){
     let table = document.querySelector('#myTable');
     let body = document.querySelector('tbody');
     body.innerHTML = '';

     for(let count = 0; count < myLibrary.length; count++){

       let row = document.createElement('tr');
       row.classList.add('tableRow');
       for(let key in myLibrary[count]){
         let cell = document.createElement('td');

         if(key == "read"){
           //let cell = document.createElement('button');
           cell.innerText = myLibrary[count][key];
           cell.classList.add('status');
           cell.setAttribute('id', 100 + count);
           row.appendChild(cell);
           cell.addEventListener('click', ()=>{
               if(cell.textContent != "Not yet"){
                 cell.textContent = "Not yet";
                 myLibrary[parseInt(cell.id) - 100].read = "Not read";
               }
               else{
                 cell.textContent = "I've read it";
                 myLibrary[parseInt(cell.id) - 100].read = "I've read it";

              }

           })
         }
         else{

           cell.innerText = myLibrary[count][key];
           row.appendChild(cell)

         }

       }
       //Create the delete button

        const deleteButton = document.createElement('button');
        deleteButton.setAttribute('type', 'button')
        deleteButton.setAttribute('id', count);
        deleteButton.classList.add('delete-button');
        deleteButton.innerHTML = `<i class="fa fa-trash" aria-hidden="true"></i>`
        row.appendChild(deleteButton);

        deleteButton.addEventListener('click', () => {

          myLibrary.splice(count, 1);
          row.parentNode.deleteRow(deleteButton.id);

})
       body.appendChild(row);

     }

   }

   //Event handler for the add button to open the form
   let c = document.querySelector('#Add');
   let modal = document.querySelector('.modal');
   c.addEventListener('click', () => {
//     let form = document.querySelector('.form-page');
//     form.classList.remove('hidden');
      modal.style.display = 'block';
   });

   let form = document.querySelector('.form-page');
   let add = document.querySelector('.add');

   //Event Listener to add a new book to the myLibrary array using data from the form
   add.addEventListener('click', ()=> {

       let newTitle = document.querySelector('#title').value;
       let newAuthor = document.querySelector('#Author').value;
       let newPages = document.querySelector('#Pages').value;
       let newRead = document.forms["Book-form"]["read"];
       if(newTitle.length == 0 || newAuthor.length == 0 || newPages.length == 0){
         alert('Please fill in all');
       }
       else{
         alert(newRead.value);
         addBookToLibrary(new Book(newTitle, newAuthor, newPages, newRead.value));
         document.forms['Book-form'].reset();
  //       form.classList.add('hidden');

         newTitle.value = '';
         newAuthor.value = '';
         newPages.value = '';
         modal.style.display = "none";

       }

 });
   let cancel = document.querySelector('.cancel');
   cancel.addEventListener('click', () => {
     //form.classList.add('hidden');
     modal.style.display = "none";
     document.forms['Book-form'].reset();

   })



   mybook = new Book("The Lost Hero", "Rick Riordarn", 500, "read");

   addBookToLibrary(mybook);
   addBookToLibrary(new Book("The Son of Neptune", "Rick Riordarn", 450, "read"));
   addBookToLibrary(new Book("Hunger Games", "Roth", 200, 'read'));
