import React, {createContext, useReducer} from 'react'
import AppReducer from './AppReducer'

const initialState={
    users:[
        {id:1, name:'Tedros'},
        {id:2, name:'Abeil'},
        {id:3, name:'AAA'}
    ]
};

export const GlobalContext = createContext(initialState)

export const GlobalProvider =({children})=>{
    const [state, dispatch]=useReducer(AppReducer, initialState);

const removeUser =(id)=>{
    dispatch({
        type: 'REMOVE_USER',
        payload:id

    })
}

    return(
        <GlobalContext.Provider value={{users: state.users, removeUser}}>
            {children}
        </GlobalContext.Provider>
    )
}