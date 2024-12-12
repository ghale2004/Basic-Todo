const storedTodo = JSON.parse(localStorage.getItem('todo'))|| [ ];
const todolist = storedTodo;


render();


function saveToStorage(){
  localStorage.setItem('todo' , JSON.stringify(todolist));
}

function render() {
  let todolisthtml = '';

  todolist.forEach(  (todoObject, index) => {
    
    
    const { name, dueDate } = todoObject; // destructuring the object selection
    // const dueDate = todoObject.dueDate;
    const html = `
      <div> ${name} </div>
      <div> ${dueDate} </div>
      <button onclick = "Delete(${index});  render(); " class = "del"> Delete</button> 
     `;
    todolisthtml += html;

  }
    
  );



  document.querySelector('.container').innerHTML = todolisthtml;
  saveToStorage();
}

function addtodo() {
  const input = document.querySelector('.input');
  const inputdate = document.querySelector('.date');
  const name = input.value;
  const date = inputdate.value;
  // console.log(name);


  if(name === ' ' && dueDate === " "){
    alert("both name  and dueDate are required");
    return 0 ;
  }

  todolist.push({
    name: name,
    dueDate: date,
  })


  input.value = "";
  inputdate.value = "";

  render();
 
}


const Delete = (index) => {
  todolist.splice(index, 1);
  saveToStorage();
  render();
}