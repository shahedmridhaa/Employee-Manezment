import employeeSlice from "./employeeSlice";
const { configureStore } = require("@reduxjs/toolkit");



const store = configureStore({
    reducer:{
        employeeReducer : employeeSlice
    }
})

export default store