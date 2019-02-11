import {ADD_TASK, DELETE_TASK, SET_DONE} from './ActionTypes'

export function addTask(text){
    return{
        type:ADD_TASK,
        payload:
        {
            text
        }
    }
}


export function setDoneTask(index){
    return{
        type: SET_DONE,
        payload:
        {
            index
        }
    }
}

export function onDeleteTask(index){
    return{
        type: DELETE_TASK,
        payload:
        {
            index
        }
    }
}