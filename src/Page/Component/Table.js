import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteEmployee } from '../employeeSlice';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'
import Modal from './Modal';


const Table = () => {

  const [userInfo, setUserInfo] = useState(null)

    const dispatch = useDispatch()

    const handleDelete = (id) => {
      dispatch(deleteEmployee(id))
    }
  
    const employees = useSelector((state) => state.employeeReducer.employee)
    console.log(employees);
  

    return (
        <div>
        <div className="py-10">
      <div className="overflow-x-auto">
        <table className="table table-compact w-full">
          <thead>
            <tr className="bg-[#1e293b]">
              <th>Name</th>
              <th>Email</th>
              <th>Salary</th>
              <th>Join</th>
              <th>Status</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {employees &&
              employees.map((employee) => {
                const { id, name, email, salary, join, status } = employee

                return (
                  <tr key={id}>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td>{salary}</td>
                    <td>{join}</td>
                    <td>{status}</td>

                    <td className='text-green-600'>
                        <label onClick={() => setUserInfo(employee)} htmlFor="modal" className=""><AiFillEdit /></label>
                    </td>

                    <td>
                      <button
                        onClick={() => handleDelete(id)}
                        className="text-red-700 text-center"
                      >
                        <AiFillDelete />
                      </button>
                    </td>
                  </tr>
                )
              })}
          </tbody>
        </table>
      </div>
    </div>
    {
      userInfo && <Modal userInfo={userInfo} setUserInfo={setUserInfo}/>
    }
        </div>
    );
};

export default Table;