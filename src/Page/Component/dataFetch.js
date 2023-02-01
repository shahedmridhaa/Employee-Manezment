import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const employeeApi = createApi({
   reducerPath: "employeeApi",
   baseQuery : fetchBaseQuery({baseUrl: "http://localhost:9000/employee"}),
   endpoints :(builder) =>({
    getallEmployee : builder.query({
        query : () => "employee"
    }),
   })
})

export const {useGetallEmployeeQuery} = employeeApi