// HTML Elements: 
let taskList = document.getElementById('tasks')
let taskForm = document.getElementById('create-task-form')
let taskDescription = document.getElementById('new-task-description')
let submit = document.getElementById('submit')
let del = document.createElement('button')

// Variables
let tasks = []

//Renderers
function renderTasks(){
    
    tasks.forEach(function(task){
        // taskForm.innerHTML = ''
        let taskOut = document.createElement('li')
        let deleteButton = document.createElement('button')
        let text = document.createElement("X")
        
        deleteButton.innerHTML = "X"
        taskOut.innerText = task
        taskOut.append(deleteButton)
        taskList.append(taskOut)
        

    })
    

}
// renderTasks()

//Event Listeners
taskForm.addEventListener('submit', function(e){
    e.preventDefault()
    let task = taskDescription.value
    tasks.push(task)
    taskList.innerHTML= ''
    renderTasks()

})

