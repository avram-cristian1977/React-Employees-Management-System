import {createStore} from 'redux'


const initialToken  = localStorage.getItem('token')

const authReducer = (state={token:initialToken}, action) => {
       if(action.type === "login"){
           localStorage.setItem("token", state.token)
          
           return state = {
                token:action.payload
           }
       }
       if(action.type === "logout"){
           localStorage.removeItem("token")
        return state ={
             token:null
        }
    }

    return state
}


 const store = createStore(authReducer)

 export default store

