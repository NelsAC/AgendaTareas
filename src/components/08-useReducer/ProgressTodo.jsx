import React from 'react'

const ProgressTodo = ({todos}) => {
    let sumaTodoTrue=0;
    todos.map((todo)=>(todo.done&&(sumaTodoTrue+=1)));
    let percentage=sumaTodoTrue/todos.length*100;
    let color='';
    if(percentage<50){color='red';}else if(percentage<75){color='yellow';}else{color='green';}
    return (
        // <div className="h-4 shadow-md p-progress">
            <div className={`progress bg-${color}-500 h-1 rounded-none ${percentage<100 && 'rounded-r-md'} fixed z-10`} style={{width: percentage+'%'}}>
            </div>
        // </div>
    )
}

export default ProgressTodo
