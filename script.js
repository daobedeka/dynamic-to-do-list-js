document.addEventListener('DOMContentLoaded', function(){
    const addButton=document.getElementById('add-task-btn');
    const taskInput=document.getElementById('task-input');
    const taskList=document.getElementById('task-list');
    const addTaskBtn=document.getElementById("add-task-btn" )
    
    taskInput.addEventListener( 'keypress' ,(e) =>{
     if(e.key == 'Enter')
        addTaskBtn.click( );
     
    })
    
    addTaskBtn.addEventListener('click', addTask)
    
    
    
    function addTask( ){
        let taskText=taskInput.value;
        if(!taskText|taskText==" "){
            alert(' enter a task')
        }
        else{
                 console.log(taskText);
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
    }

    document.activeElement('DOMContentLoaded', addTask( ))

} )

