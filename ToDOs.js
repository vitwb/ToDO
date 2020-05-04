var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonEWlement = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem('list_todos'))||[];

function render(){
    listElement.innerHTML = '';
    for(todo of todos){
        var todoElement = document.createElement('li');
        var todoText =  document.createTextNode(todo);

        var linkElement = document .createElement('a');
        linkElement.setAttribute('href','#');

        var pos = todos.indexOf(todo);
        linkElement.setAttribute('onclick','deleteToDo(' + pos + ')');
        var linkText = document.createTextNode('Excluir!');
        linkElement.appendChild (linkText);
        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);
        listElement.appendChild(todoElement);
    }
}
render();
function   addTodo(){
        var todoText = inputElement.value;
        todos.push(todoText);
        inputElement.value = '';
        render();
        saveToStorange()
}
buttonEWlement.onclick = addTodo;

function deleteToDo(pas){
    todos.splice(pas,1);
    render();
    saveToStorange()
};

function saveToStorange(){
    localStorage.setItem('list_todos',JSON.stringify(todos));
};