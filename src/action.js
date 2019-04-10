export const addPost=(name,message,id)=>{
    return {
        type:"ADD_POST",
        payload:{name,message,id}
    }
}


export const deletePost=(id)=>{
    return {
        type:"DELETE_POST",
        payload:{id}
    }
}