document.addEventListener('DOMContentLoaded', function(){
   loadTasks();
   
    const addButton=document.getElementById('add-task-btn');
    const taskInput=document.getElementById('task-input');
    const taskList=document.getElementById('task-list');




    taskInput.addEventListener( 'keypress' ,(event) =>{
     if(event.key == 'Enter')
        addButton.click( );
     
    })
    
    addButton.addEventListener('click', addTask)
    
    
    
    function addTask( taskText, save=true){
        let taskText=taskInput.value.trim();
        if(!taskText|taskText==" "){
            alert(' enter a task')
        }
        else{
                
                let li=document.createElement("li");    
                li.textContent=taskText;
           
            console.log(li);
    
            let btRemove=document.createElement('button')
            btRemove.textContent='Remove'
            btRemove.classList.add('remove-btn')
    
            btRemove.addEventListener('click', function (){
                li.remove();
            })
    
            li.appendChild(btRemove);
            taskList.appendChild(li);
            taskInput.value=' ';
        }

         if (save) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }
    }

    document.activeElement('DOMContentLoaded', addTask( ))

} )

    function loadTasks(){
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false)); // 'false' indicates not to save again to Local Storage

    }

