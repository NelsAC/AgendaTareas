const initialState=[{
    id: 1,
    todo: 'Buy bread',
    done: false
}]

const todoReducer=(state=initialState, action)=>{
if(action?.type==='addTodo'){
    return [...state, action.payload];
}
    return state; //siempre se retorna el state
}
let todos=todoReducer();

const newTodo={
    id: 2,
    todo: 'Buy milk',
    done: false
}

const addTodoAction={
    type: 'addTodo',
    payload: newTodo
}

todos=todoReducer(todos , addTodoAction); //primero mandamos el estado anterior, por ello es que mandamos el 'todos', seguido de la acción

console.log(todos);