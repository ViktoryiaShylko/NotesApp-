const notesElems = document.querySelector('.notes');
const addBtn = document.querySelector('.note-add');
let notesArr = [];




function createNote(title, text) {
    const elem = document.createElement('div');
    elem.classList.add('note');
    elem.innerHTML = `
        <div class = "note-header">
          <p id = "note-title">${title}</p>
          <input id = "note-title-input" class = "hidden"></input>
          <div class = "btns">
            <button class = "note-edit"><i class="fa-solid fa-file-pen"></i></button>
            <button class = "note-delete"><i class="fa-solid fa-trash"></i></button>
          </div>
        </div>
        <p id = "note-text">${text}</p>
        <textarea id = "note-textarea" class = "hidden"></textarea>
        `


        /*-----LS manipulations----*/


        localStorage.setItem('note', elem.innerHTML);

        
        notesArr.push(elem.innerHTML);

        const saveNotesToLS = () => {
            // преобразуем массив в строку
            const notesString = JSON.stringify(notesArr);
            // сохраняем строку в local storage нашего браузера
            localStorage.setItem('notesArr', notesString);
          }
        
          




        saveNotesToLS();
        


        /*-----*/

        const editBtn = elem.querySelector('.note-edit');
        const deleteBtn = elem.querySelector('.note-delete');
        const titleElem = elem.querySelector('#note-title');
        const textElem = elem.querySelector('#note-text');
        const titleInputElem = elem.querySelector('#note-title-input');
        const textInputElem = elem.querySelector('#note-textarea');

        editBtn.addEventListener('click', (e) => {
            titleElem.classList.toggle('hidden');
            textElem.classList.toggle('hidden');

            titleInputElem.classList.toggle('hidden');
            textInputElem.classList.toggle('hidden');
        });

        deleteBtn.addEventListener('click', (e) => {
            elem.remove();
        });

        titleInputElem.addEventListener('input', (e) => {
            titleElem.innerText = e.target.value;
        });

        textInputElem.addEventListener('input', (e) => {
            textElem.innerText = e.target.value;
        });


        return elem;
       
}

addBtn.addEventListener('click', (e) => {
    const el = createNote("Заголовок", "Текст заметки");
    notesElems.appendChild(el);
   
});


const getNotesFromLS = () => {
  // считываем comments из local storage 
  const notesString = localStorage.getItem('notesArr');
  // преобразуем строку в массив и сохраняем во внешнюю переменную comments
  notesArr = JSON.parse(notesString);
}
getNotesFromLS();

console.log(notesArr);
