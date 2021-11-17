export const addTask =(addTodo) =>{
    console.log(addTodo,'from Action, add Todo')
    return{
        type:'ADD_TODO',
        payload: addTodo}
}

export const addedTask =(id) =>{
    console.log(id,'from Action, doneSubmit')
    return{
        type:'DONE_TASK',
        payload: id
    }
}
 
export const editTask=(edit) => {
    return{
        type:'Edit_TASK',
        payload:edit
    }
}

