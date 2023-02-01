const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit')


const initialState = {
   loading: false,
   data : [],
   error : ""
}



export const employee = createAsyncThunk('get/employee', async() =>{
   const response = await fetch('http://localhost:9000/employee')
   const data = await response.json()
   return data
})

export const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  // reducers: {
  //   // showEmployee: (state) => state,
  //   addEmployee : (state, action)=>{
  //       state.employee.push(action.payload) 
  //   },
  //   deleteEmployee : (state, action) =>{
  //     const id = action.payload
  //     state.employee = state.employee.filter((employ) => employ.id !== id)
  //   }
  // },
  extraReducers : (builder) =>{
    builder.addCase(employee.pending, (state, action) =>{
       state.loading = true
       state.error = ""
       state.data = []
    })
    builder.addCase(employee.fulfilled,(state, action) =>{
      state.loading = false
      state.error = ""
      state.data = action.payload
    })
    builder.addCase(employee.rejected,(state, action) =>{
      state.loading = false
      state.error = action.error.message
      state.data = action.payload
    })
  }
})


export const {showEmployee, addEmployee, deleteEmployee} = employeeSlice.actions
export default employeeSlice.reducer
