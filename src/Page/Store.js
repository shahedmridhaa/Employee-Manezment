import { apiSlice } from "./Component/fetchApi";
import employeeSlice from "./employeeSlice";
const { configureStore } = require("@reduxjs/toolkit");


const store = configureStore({
    reducer:{
      //  employeeReducer : employeeSlice,
       [apiSlice.reducerPath] : apiSlice.reducer
    },
    middleware : (getMiddleWare) => getMiddleWare().concat(apiSlice.middleware)
})


export default store