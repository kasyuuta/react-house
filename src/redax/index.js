import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { authSliceReducer } from "./authSlice";
import { carsSliceReducer } from "./carsSlice";
import { housesSliceReducer } from "./housesSlice"


  const reducers = combineReducers({
    auth: authSliceReducer,
    houses: housesSliceReducer,
    cars: carsSliceReducer
})

export  const store = configureStore({
    reducer: reducers
})
   

store.subscribe(() =>{
    const auth = store.getState().auth
    console.log(auth);
    localStorage.setItem("auth", JSON.stringify(auth))
})

console.log(store);