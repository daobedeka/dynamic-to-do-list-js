document.addEventListener('DOMContentLoaded', function(){
   let storedTask= JSON.parse( localStorage.getItem('tasks')||'[ ]' );
   
    const addButton=document.getElementById('add-task-btn');
    const taskInput=document.getElementById('task-input');
    const taskList=document.getElementById('task-list');

    
    taskInput.addEventListener( 'keypress' ,(event) =>{
     if(event.key == 'Enter')
        addButton.click( );
     
    })
    
    addButton.addEventListener('click', addTask)
    
    
    
    function addTask( ){
        let taskText=taskInput.value.trim();
        if(!taskText|taskText==" "){
            alert(' enter a task')
        }
        else{
             
           
            if(storedTask.includes(taskText)){
            }
            else{
                storedTask.push(taskText)
                console.log(storedTask)
            }

            let li=document.createElement("li");

            for(i=0;i<storedTask.lenght;i++){
              
               
                console.log(storedTask[i])

            }

       
           
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

