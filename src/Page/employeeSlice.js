import data from "../db.json"


const { createSlice } = require('@reduxjs/toolkit')


export const employeeSlice = createSlice({
  name: 'employee',
  initialState: data,
  reducers: {
    showEmployee: (state) => state,
    addEmployee : (state, action)=>{
        state.employee.push(action.payload) 
    },
    deleteEmployee : (state, action) =>{
      const id = action.payload
      state.employee = state.employee.filter((employ) => employ.id !== id)
    }
  },
})


export const {showEmployee, addEmployee, deleteEmployee} = employeeSlice.actions
export default employeeSlice.reducer
