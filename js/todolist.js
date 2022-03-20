const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

let toDo = []; // toDo는 저장되고 수정되어야 하므로 let으로 선언해준다

function saveToDo() {
    localStorage.setItem("todoKey", JSON.stringify(toDo)); // JSON stringify > 배열을 문자열로 끊어서 저장해줌
}

function deleteTodo(event){
    const delLi = event.target.parentElement; // 클릭 이벤트를 받은 button의 부모요소 = 즉 li
    delLi.remove(); // event target의 부모 레벨인 li를 지우겠다
    toDo = toDo.filter((toDo) => toDo.id !== parseInt(delLi.id)) // 해당 li의 id가 지워졌으니 id가 존재하는 항목만 배열에 남긴다.
    saveToDo(); // 정리된 배열을 다시 저장. click이란 이벤트를 받은 li와 todo 배열요소는 지워졌다.
}

function paintToDo(todoObj) {
    const li = document.createElement("li");
    li.classList.add("list");
    li.id = todoObj.id;
    const span = document.createElement("span");
    span.innerText = todoObj.text;
    const button = document.createElement("button");
    button.innerText = "✅";
    button.classList.add("delBtn");
    button.addEventListener("click", deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function todoSubmit(e) {
    e.preventDefault();
    const newTodo = toDoInput.value; // newTodo에 입력을 저장함
    toDoInput.value = "" // 입력창의 value값을 초기화
    const todoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDo.push(todoObj);
    paintToDo(todoObj);
    saveToDo();
}

toDoForm.addEventListener("submit", todoSubmit);

const savedTodo = localStorage.getItem("todoKey");

if (savedTodo !== null) {
    const parsedTodo = JSON.parse(savedTodo); 
    // 로컬스토리지에 저장된 todo 요소들을 끊어서, 문자열 ("" 말고 ㄹㅇ 문자인것들) 만 따로 모아 배열로 다시 저장해준다
    toDo = parsedTodo; // 문자만 다시 모아진 배열 parseTodo를 원래 배열 toDo에 저장
    parsedTodo.forEach(paintToDo); // 배열 요소 각자에 paintTodo 함수를 적용해주겠다.
}