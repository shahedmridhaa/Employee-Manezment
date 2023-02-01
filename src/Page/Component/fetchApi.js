import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

 export const apiSlice = createApi({
    reducerPath : 'employee',
    baseQuery : fetchBaseQuery({baseUrl : 'http://localhost:9000', 
}),
   endpoints : (builder) => ({
     employeeQuery : builder.query({
        query : () => '/employee',
     })
   })
})

export const {useEmployeeQueryQuery} = apiSlice