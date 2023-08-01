import {createSlice, PayloadAction} from '@reduxjs/toolkit'

type InitialState = {
    value: AuthModalState;
}


type AuthModalState = 
   { 
    isOpen: boolean;
    page: "login" | "forgotPassword" | "createAccount";
}
  
  
  const initialState = {

    value: {isOpen: false,
    page: "login",} as AuthModalState,
  } as InitialState


export const authModalState = createSlice({
    name: 'authModalState',
    initialState,
    reducers: {
        changePage: (state, action: PayloadAction<"login" | "forgotPassword" | "createAccount">) => {
           return ({
               value: {
                    ...state.value,
                    page: action.payload
                }
           })
                      
        },
        closeAuth: () => {return initialState}
    }
    })

export const  {closeAuth, changePage} = authModalState.actions
export default authModalState.reducer